Siia tulevad ainult mänguarendusega seotud failid

# Mängumootor

Kasutame Godot 4 for Windows
Download link [Godot Engine 4.2.1](https://github.com/godotengine/godot/releases/download/4.2.1-stable/Godot_v4.2.1-stable_win64.exe.zip)

# Project settings

## General -> Display -> Window

Size on fikseeritud 1600 \* 900. Stretch alajaotuses on Scale muudetud 4 peale.

## Input Map

Puldi konfiguratsiooni kirjeldamisel on kasutatud XBoxi pulti. Sony, Nintendo ja teiste erineva asetusega pultide puhul võivad nimetused erineda.

Käsitsi on lisatud `WASD` nupud liikumise jaoks.
Liikumise jaoks on kasutusel `ui_left`, `ui_right`, `ui_up` ja `ui_down` käsud liikumissuuna jaoks.

Kasutusel on `WASD`, `Nooleklahvid` ja puldi Joypad `D-pad ` ja `vasak analog juhtkang`.

`ui_accept` interaktsiooni nupp. Selle jaoks töötavad `enter`, `KP Enter`, `Space` ja puldil `X`.

`ui_cancel` nupu jaoks töötavad `Escape` nupp klaviatuuril ja `Start` nupp puldil. Selle abil saab mängu paus menüüsse.

## Autoload

Mäng kasutab Global muutujaid. Nende laadimine toimub läbi `res://Global.tscn`.
Selleks, et need töötaksid tuleb need lisada Autoload tabi kaudu. Selleks tuleb see lisada Path: lahtrisse. See lisab `Node Name:` välja muutuja `Global`. See tuleb lisada `Add` nuppu kasutades. Kontrolli üle, et lisandunud väli tekiks ja et seal oleks `Global Variable` all `Enable` linnuke märgitud.

# Player Charecter

`player.tscn` asub `Charecters` kaustas.
See koosneb `CharecterBody2d`, millele on lisatud `Sprite2d`, `CollisonShape2D`, `AnimationPlayer` ja `AnimationTree`.
