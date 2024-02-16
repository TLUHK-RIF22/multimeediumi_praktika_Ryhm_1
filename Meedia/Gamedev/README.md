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
See koosneb `CharecterBody2d`, millele on lisatud `Sprite2d`, `AnimatedSprite2D`, `CollisonShape2D`, `AnimationPlayer` ja `AnimationTree`.

`AnimatedSprite2D` kaudu on lisatud 8 animatsiooni `SpriteFrame`. 4 idle ja 4 walk animation frame.
Sama kogus on AnimationPlayerisse animatsioone. Igal animatsioonil on vastavad frame-id ja animation Key. Reset Animation vajab vähemalt ühte frame, et korralikult töötada, seega lisasin sellele Idle_Up 1. sprite.

`AnimationTree` sees on 2 `state`, mille vahel saab animatsioon liikuda: `idle` ja `walk`. Prioteetsemaks liikumissuunaks on määratud külgsuunaline liikumine. Kui tegelane liigub nt vasakule ja ülesse samal ajal, siis animatsiooniks saab sellisel juhul vasakule liikumise animatsioon. AnimatsioonTree on aktiivseks määratud ja erinevate `state` vahel liikumine toimub scripti põhiselt. `res://Charecters/player.gd`

Sea default asend on idle_down vaade. Vastavalt sea liikumissuunale ja kiirusele valib ta AnimationTree kaudu oma animatsiooni.

# Gates

Levelite vaheline laadimine toimub kasutated `Area2D` node. Area2D node küljes on CollisionShape2D, mis on ristküliku kujuline. Area2D on lisatud 2 Node'i Signaali:

- body_entered
- body_exited

Area2D'le on lisatud Script: res://Gate.gd

See script kontrollib, kas PLayer on isenendud CollisionShape2D alasse. Kui jah, siis käivitub script, mis laeb järgmise ala.

Leveli laadimisel käivitub Levelite stseenide külge paigaldatud res://Levels/Levels.gd script. See loeb globaalsest muutujast, millisest levelist Player pärit on. Kui Player vahetab levelit, kirjutatakse ta Leveli nimi Global.from_level muutujasse. Sellest muutujast loetakse see nimi, liidetakse sellele juurde tähed `Pos`. Levelitele on lisatud `Marker2D` elemendid, millel on talle vastava Leveli nimi ja nimi lõpeb tähtedega `Pos`. `Pos` on lühend sõnast "position".

# Pause menu

Kui mäng on pausil, hakkab mängima `AudioStreamPlayer`. Muusikapalaks on 'menüü_põhi.mp3'. Selle seaded on:

- Autoplay
- Process - Mode - 'When Paused'

Pause Menu koosneb kahest elemendist:

- Resume - peidab menüü uuesti ära
- Exit - paneb mängu kinni

# World map

3X3 map on loodud. Igast levelist saab minna järgmisse.
| | | |
|----|----|----|
| a1 | b1 | c1 |
| a2 | b2 | c2 |
| a3 | b3 | c3 |

# Spikes level

Spikes leveli on põgenemistase. Piggy peab jooksma alt üles. Talle satuvad ette takistused, millest ta peab mööda põikama.
Taseme jaoks on tehtud alternatiivne Player tüüp, mis suudab liikuda vaid vasakule-paremale. Tema üles-alla liikumine on scripti poolt muudetud. Kui Player jääb takistuse taha kinni ja ta hakkab ekraanilt väljuma, siis Script sätib ta asukoha ekraani laiuse alumisse äärde. Level lõpeb, kui Player on jõudnud üle ekraani ülemise ääre 32px (kaob ekraanilt). Player laetakse scripti poolt määratud levelile, kust ta saab jätkata oma seiklusi.

Kõik elemendid asuvad res://Levels/Spikes kaustas. Ground.tscn on taust, mis laetakse pidevalt uuesti. Takistused on hetkel joonistatud otse selle peale.
