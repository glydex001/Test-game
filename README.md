# Glyde-X Racing 🏁

An endless-driving game for Android, made for a 5-year-old. Real car models, real-looking roads and
scenery, no music, no people, no violence — bumps just slow you down. Everything is unlocked from the start.

Presented by **Glyde-X Recliners — Comfort in Motion**.

## Getting the app

Every push to `main` builds a signed APK automatically (see **Actions** / **Releases**).
Download the newest `GlydeXRacing-v1.N.apk` from the Releases page onto the phone and open it.

## Playing

- Landscape only. Steering wheel (drag to turn, springs back), **GO** and **STOP** pedals, 📣 horn, ⚡ boost, 🎥 changes camera,
  📸 takes a photo (saved to the phone's Pictures/Glyde-X Racing album). The garage has a 🎡/🕹️ switch to use big ◀ ▶ buttons instead of the wheel.
- Things to do: ⭐ stars to collect along the road, and missions (collect stars, reach a speed, pass cars, drive to a
  place in Lenasia, deliver a Glyde-X recliner from the showroom to a customer's street). Stars and missions earn
  stickers in the 📒 sticker book. Progress is saved on the phone.
- Garage: swipe through the fourteen cars with ‹ ›, pick a colour, pick a world (country / desert / city / snow / **Lenasia**)
  and weather (day / sunset / night / rain), toggle traffic, sound, tilt-to-steer and 🔋 eco mode (30 fps, cooler phone;
  ✨ turns the full graphics back on).
- ❚❚ pauses (also the phone's back button); switching apps pauses automatically.
- Lenasia mode is a free-roam map of the real suburb built from OpenStreetMap data (`app/src/main/assets/www/lenasia.json`,
  made by `game/tools/osm2map.mjs` from an OSM export) with every real building outline from satellite data (`lenasia-bld.json`).
  You start next to Trade Route Mall; the mini-map shows streets and landmarks.

## Testing

`cd game && npm install && npm test` runs a touch-input test loop: it opens the game in headless Chrome, presses the real
on-screen controls with emulated fingers (wheel, pedals, buttons, two fingers at once) and checks the car reacts correctly.
`npm run shots` takes screenshots of a few setups.

## Project layout

- `app/` — the Android wrapper (a full-screen WebView that runs the game from `app/src/main/assets/www`).
- `game/` — the game's source (Three.js). `game/src` is the code, `game/tools` are the asset-preparation scripts
  (car model pipeline, texture keying, billboards). The playable bundle lives in `app/src/main/assets/www`.
  Rebuild it with `cd game && npm install && npx esbuild src/main.js --bundle --minify --format=iife --target=es2018 --outfile=../app/src/main/assets/www/game.js`.
- `signing/kidcars.jks` — the app signing key (so updates install over older versions).

## Credits

Car models (CC-BY / MIT, used with attribution):
- Ferrari 458 — three.js example asset
- Lamborghini Aventador — github.com/aaronbernath143/3D-car-model (MIT)
- Lamborghini Urus, Peugeot 3008 — github.com/nhunguyendev/Threejs-3D-models-GLTF-loader (Sketchfab, CC-BY)
- Porsche 911 930 Turbo — github.com/UtkarshPathrabe (MIT)
- Aston Martin Valhalla — github.com/Rabby567/3D_Car_Website
- Tesla Model 3 — "Tesla 2018 Model 3" by Ameer Studio on Sketchfab (CC-BY)
- Bugatti Bolide 2024, Ford GT40 Mark II, Tesla Roadster 2020, Dodge Challenger RT, Lancia 037 Stradale — vecarz on Sketchfab (CC-BY 4.0)
- Ferrari 599 GTO — Black Snow on Sketchfab (CC-BY 4.0)
- Nissan GT-R R35 — Ciasny on Sketchfab (CC-BY 4.0)

Textures and backdrops generated with Higgsfield. Built with three.js.
Lenasia street furniture (traffic lights, stop signs, humps, street names) and suburb boundaries come from OpenStreetMap tags.
Map data © OpenStreetMap contributors, ODbL.
Building footprints in Lenasia from the Google Open Buildings dataset (CC BY 4.0), clipped with `game/tools/clip-buildings.py`.
