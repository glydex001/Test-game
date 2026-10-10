# Kid Cars

An endless-driving game for Android, made for a 5-year-old. Real car models, real-looking roads and
scenery, no music, no people, no violence — bumps just slow you down. Everything is unlocked from the start.

Presented by **Glyde-X Recliners — Comfort in Motion**.

## Getting the app

Every push to `main` builds a signed APK automatically (see **Actions** / **Releases**).
Download the newest `KidCars-v1.N.apk` from the Releases page onto the phone and open it.

## Playing

- Landscape only. Big buttons: ◀ ▶ steer, **GO** accelerates, **STOP** brakes, 📣 horn, ⚡ boost, 📷 changes camera.
- Garage: swipe through the seven cars with ‹ ›, pick a colour, pick a world (country / desert / city / snow / **Lenasia**)
  and time of day (day / sunset / night), toggle traffic, sound, and tilt-to-steer.
- Lenasia mode is a free-roam map of the real suburb built from OpenStreetMap data (`app/src/main/assets/www/lenasia.json`,
  made by `game/tools/osm2map.mjs` from an OSM export). You start next to Trade Route Mall; the mini-map shows streets and landmarks.

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

Textures and backdrops generated with Higgsfield. Built with three.js.
Map data © OpenStreetMap contributors, ODbL.
