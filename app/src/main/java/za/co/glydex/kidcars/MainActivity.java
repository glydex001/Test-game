package za.co.glydex.kidcars;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.JavascriptInterface;
import android.content.ContentValues;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Base64;
import android.widget.Toast;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.Locale;
import android.speech.tts.TextToSpeech;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import androidx.webkit.WebViewAssetLoader;

/** Full-screen WebView that runs the game from the bundled assets (served over a secure origin). */
public class MainActivity extends AppCompatActivity {
    private WebView web;
    private TextToSpeech tts; private boolean ttsReady = false; private boolean ttsArabic = false;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);

        web = new WebView(this);
        setContentView(web);
        web.setBackgroundColor(0xFF000000);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setUseWideViewPort(true);
        s.setLoadWithOverviewMode(true);
        s.setBuiltInZoomControls(false);
        s.setSupportZoom(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        web.setLayerType(View.LAYER_TYPE_HARDWARE, null);

        final WebViewAssetLoader loader = new WebViewAssetLoader.Builder()
                .addPathHandler("/assets/", new WebViewAssetLoader.AssetsPathHandler(this))
                .build();
        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
                return loader.shouldInterceptRequest(request.getUrl());
            }
        });
        web.addJavascriptInterface(new Bridge(), "Android");
        tts = new TextToSpeech(this, status -> {
            if (status != TextToSpeech.SUCCESS) return;
            ttsReady = true;
            try { tts.setLanguage(Locale.UK); tts.setSpeechRate(0.9f); } catch (Exception ignored) {}
            try { int r = tts.isLanguageAvailable(new Locale("ar")); ttsArabic = r >= TextToSpeech.LANG_AVAILABLE; } catch (Exception ignored) {}
        });
        web.loadUrl("https://appassets.androidplatform.net/assets/www/index.html");
        hideSystemBars();
    }

    /** Small bridge for the game: save a photo (JPEG, base64) to the phone's Pictures/Glyde-X Racing album. */
    private class Bridge {
        /** Speak a short line (kid narration). lang: "en" or "ar" (Arabic only if the phone has an Arabic voice). */
        @JavascriptInterface
        public boolean speak(String text, String lang) {
            if (!ttsReady || text == null || text.isEmpty()) return false;
            try {
                if ("ar".equals(lang)) { if (!ttsArabic) return false; tts.setLanguage(new Locale("ar")); } else tts.setLanguage(Locale.UK);
                tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "kc" + System.currentTimeMillis());
                return true;
            } catch (Exception e) { return false; }
        }
        @JavascriptInterface
        public boolean canSpeak(String lang) { return ttsReady && (!"ar".equals(lang) || ttsArabic); }
        @JavascriptInterface
        public void stopSpeaking() { try { if (tts != null) tts.stop(); } catch (Exception ignored) {} }
        @JavascriptInterface
        public boolean savePhoto(String base64) {
            try {
                byte[] bytes = Base64.decode(base64, Base64.DEFAULT);
                String name = "GlydeXRacing-" + System.currentTimeMillis() + ".jpg";
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    ContentValues v = new ContentValues();
                    v.put(MediaStore.Images.Media.DISPLAY_NAME, name);
                    v.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
                    v.put(MediaStore.Images.Media.RELATIVE_PATH, Environment.DIRECTORY_PICTURES + "/Glyde-X Racing");
                    Uri uri = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, v);
                    if (uri == null) return false;
                    try (OutputStream out = getContentResolver().openOutputStream(uri)) { out.write(bytes); }
                } else {
                    File dir = new File(getExternalFilesDir(Environment.DIRECTORY_PICTURES), "Glyde-X Racing");
                    if (!dir.exists()) dir.mkdirs();
                    File f = new File(dir, name);
                    try (FileOutputStream out = new FileOutputStream(f)) { out.write(bytes); }
                    android.media.MediaScannerConnection.scanFile(MainActivity.this, new String[]{ f.getAbsolutePath() }, new String[]{ "image/jpeg" }, null);
                }
                runOnUiThread(() -> Toast.makeText(MainActivity.this, "Saved to Photos \u2713", Toast.LENGTH_SHORT).show());
                return true;
            } catch (Exception e) {
                return false;
            }
        }
    }

    private void hideSystemBars() {
        WindowInsetsControllerCompat c = WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        c.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
        c.hide(WindowInsetsCompat.Type.systemBars());
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideSystemBars();
    }

    @Override
    protected void onPause() { super.onPause(); if (web != null) web.onPause(); if (tts != null) tts.stop(); }

    @Override
    protected void onDestroy() { if (tts != null) { tts.stop(); tts.shutdown(); } super.onDestroy(); }

    @Override
    protected void onResume() { super.onResume(); if (web != null) web.onResume(); hideSystemBars(); }

    @Override
    public void onBackPressed() {
        // The game has its own pause button; back goes to the garage via JS, or exits from the garage.
        if (web != null) {
            web.evaluateJavascript("(function(){ return (window.__kidcars && window.__kidcars.back) ? window.__kidcars.back() : 'exit'; })()",
                    value -> { if (value != null && value.contains("exit")) finish(); });
        } else {
            super.onBackPressed();
        }
    }
}
