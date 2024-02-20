# [Escape from Piggy Island](https://github.com/orgs/TLUHK-RIF22/projects/7)

## Projekti kiirmenüü
| [̲̅~][̲̅~][̲̅~][̲̅~] | 𝕋𝕙𝕖 𝕚𝕤𝕝𝕒𝕟𝕕 𝕒𝕨𝕒𝕚𝕥𝕤..  | [̲̅~][̲̅~][̲̅~][̲̅~] |
|--------|-------|--------|
| [Süžee ja tasemed](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/blob/main/s%C3%BC%C5%BEee.md)  | [Graafika (non-live)](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/tree/main/Meedia/Graafika) | [Mängufailid - Sprited](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/tree/main/Meedia/Gamedev/Piggy/Sprites)  |
| [Mänguarenduse dokumentatsioon](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/blob/main/Meedia/Gamedev/README.md)  | [Mängufailid - Audio](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/tree/main/Meedia/Audio) | [Mängufailid - Kaardiosad](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/tree/main/Meedia/Gamedev/Piggy/Tiles) |
| [Riskianalüüs](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/issues/16#issuecomment-1927801025) | [Mängufailid - Video](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/tree/main/Meedia/Video) | [nothing](https://podcasts.apple.com/us/podcast/beef-and-dairy-network/id1022024768) |
| [Koosolekud - Issue 26](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/issues/26) | [nothing](https://podcasts.apple.com/us/podcast/beef-and-dairy-network/id1022024768) | [nothing](https://podcasts.apple.com/us/podcast/beef-and-dairy-network/id1022024768) |


## Projekti kirjeldus, eesmärk ja umbkaudne tegevusplaan
![Meie klient](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/blob/main/Meedia/Graafika/Siga.png)
### Kirjeldus ning eesmärk
"The Piggy Island" mängu eesmärk on võimaldada mängijatel sukelduda põnevasse seiklusmaailma, kus nad saavad kogeda mitmekesiseid väljakutseid, lahendada loomingulisi mõistatusi ning arendada oma oskusi ja strateegilist mõtlemist. Mäng soovib pakkuda nauditavat ja mitmekülgset mängukogemust. Kuna antud meeskonna arust on liiga palju juba kaasaegseid mänge, otsutas antud meeskond luua retro mängu, mis pärineks justkui otse 90ndatest, kui mängukultuur laiemalt antud riigis levima hakkas. 

### Umbkaudne tegevusplaan
Vastavalt projekti sisule https://github.com/orgs/TLUHK-RIF22/projects/7

## Mängumootori(te) valik

Mängumootoriks osutus antud meeskonna poolt Godot. Tegemist on avatud lähtekoodiga ning tasuta programmiga. Puuduvad litsentsimistasud. Godot toetab mitmeid platvorme, nii windowsi, macOS kui ka Linuxit. Vastavalt tehtud otsingule ning ühise meeskonna töö tulemusena, jõudsime järeldusele, et Godot on ideaalne valik 2D graafikaga mängu tegemiseks. Lisaks on ka Godotil väga suur ja inforohke kogukond, kust materjale ja lisainfot leida ideede teostamiseks. Otsus langetati Godot, Unreal ning Unity mootorite vahelt.

| Omadus             | Godot Engine                                                  | Unreal Engine                                                 | Unity                                                          |
|--------------------|---------------------------------------------------------------|---------------------------------------------------------------|----------------------------------------------------------------|
| **Programmeerimiskeel** | GDScript, C#, C++                                           | C++, Skeemid (Blueprints), C#                                 | C#, UnityScript (aegunud), C++                                 |
| **Platvormitugi**  | Windows, macOS, Linux, Android, iOS, HTML5, teised            | Windows, macOS, Linux, Android, iOS, HTML5, konsoolid, teised | Windows, macOS, Linux, Android, iOS, WebGL, konsoolid, teised |
| **Graafika**       | OpenGL ES 2.0, 3.0, GLES 3.1, Vulkan       | DirectX, Vulkan, OpenGL                                       | DirectX, OpenGL, Vulkan                  |
| **Renderdamine**   | Füüsikapõhine renderdamine (PBR), 2D, 3D                      | Kõrgekvaliteetne renderdamine, PBR, Real-time ray tracing (RTX) | PBR, 2D, 3D, Real-time ray tracing (HDRP)           |
| **Varade toru**    | Tõhus, sujuv, sisseehitatud importijad erinevatele formaatidele | Tugev vara importimine, manipuleerimine ja haldamine         | Paindlik, kohandatav, Asset Store integratsioon               |
| **Kasutusmugavus**| Kasutajasõbralik, intuitiivne liides, visuaalne skriptimine (GDScript) | Algajatele keeruline, ulatuslik dokumentatsioon            | Algajatele sobiv, ulatuslik dokumentatsioon, visuaalne skriptimine (Bolt) |
| **Kogukond**       | Kasvav kogukond, aktiivsed foorumid ja kogukonnapõhine arendamine | Suur, aktiivne kogukond, ulatuslikud foorumid, ametlik tugi | Hiiglaslik kogukond, Asset Store, foorumid, ametlik tugi     |
| **Õppekõver**     | Mõõdukas, sobib algajatele ja kogenud arendajatele             | Järsem õppekõver, eriti keerukamate funktsioonide puhul         | Mõõdukast järsem, ulatuslikud õppematerjalid on saadaval     |
| **Hind**           | Tasuta ja avatud lähtekoodiga                                  | Tasuta isiklikuks kasutamiseks, litsentsitasu kommertsprojektidele | Tasuta isiklikuks kasutamiseks, tellimusel põhinev kommertsprojektidele |




## Riskianalüüs
[Riskianalüüsi issue](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/issues/16)

| Riski kirjeldus                                           | Šanss (1-5) | Kahju realiseerumisel                                   | Maandamise meetmed                                |
| ---------------------------------------------------------- | ----------- | -------------------------------------------------------- | -------------------------------------------------- |
| Graafika ei tule ootuspäraselt välja | 2 | Mäng on kole | Karl ja Dave loevad disainijuhendeid |
| Heliefektid ei tule ootuspäraselt välja | 2 | Heli on halb | Vajadusel ostame heli sisse vajalike litsentsidega |
|Ei jõua ajaga mängumootorit vallata nii, nagu peaks | 2 |Mäng jääb oma võimetelt kehvaks | Peame kriisikoosoleku  |
| Mõni ülesanne läheb üle planeeritud tähtaja | 4 | Midagi jääb tegemata, asjad lükkuvad edasi | Github Projects jälgimine ning täitmine |
| Mäng ei tule ootuspärane | 3 | Trauma meeskonnaliikmetel | Ühine pingutamine eesmärgi nimel |
| Oskused ei vasta ülesande püstitamiseks vajaliku tasemeni | 4 | Midagi jääb tegemata või tehakse ringi viimasel minutil | Valitakse jõukohased vahendid ülesande teostamiseks|
| Meeskonnaliige lõpetab meeskonnas töötamise | 1 | Mäng jääb pooleli | Jaotada ülesanded osalise katvusega |
| Keegi kustutab kogemata repositooriumi ära | 5 | Mäng ei valmi tähtajaks, mäng ei valmi üldse | Andmete varundamine |
| Õppejõud ei ole rahul rühma tööga | 3 | Saame halva hinde | Täita praktika nõudeid punkthaaval |
| Meeskonnaliige haigestub | 3 | Midagi jääb tähtajaks tegemata | Informeerime ja planeerime jooksvalt vajadusel ülesandeid ja punkte ümber |
| Ülesande püstituse täitmiseks vajaliku tarkvara litsents aegub projekti täitmise jooksul | 3 | Meeskonnaliige peab tegema väljamineku, midagi tuleb viia teise keskkonda | Meeskond vajadusel toetab |
| Meeskonnaliige ei saa oma ülesandega hakkama | 3 | Midagi jääb tegematata | Meeskond teeb koheselt kriisikoosoleku |
| Meeskonnaliige tunneb, et tal on liiga suur koormus | 4 | Mäng jääb pooleli | Ülesanne jaotatakse rühma vahel laiali võrdsetes osades kohe alguses |
| Mängu sisu lekib enne esmaesitlust | 5 | Mäng ei osutu nii menukaks | Piirata ligipääsu andmetele |
| Intellektuaalomandi küsimused | 5 | Mängu ei saa avaldada | Meeskond loob kogu sisu ise, teenuse sisseostmise korral lahendab litsentsiküsimused |
| Meeskonnal on omavahel suhtlusprobleemid | 5 | Meeskond ei toimi | Oleme ühenduses Discordi grupis ning peame vähemalt korra nädalas koosolekuid ja arutame progressi |
| Ajaplaneerimine on liiga optimistlik  | 5 | Meeskond jookseb omadega jänni | Ajagraafik pannakse paika ühiselt |
| Mängu kasutajaliides on arusaamatu kasutajale | 5 | Mäng ei osutu edukaks | Testimine erinevate sihtrühmadega |
## Praktikapäevikud, rollid

[Peeter Alliksaar (arendaja)](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/issues/22)

[Martin Kangur (projektijuht, audiodisainer, videodisainer, testija)](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/issues/19)

[Karl Erik Kalmus (graafikadisainer, testija)](https://github.com/TLUHK-RIF22/multimeediumi_praktika_Ryhm_1/issues/21)

[Dave Talimaa (graafikadisainer, (toetav)arendaja)](https://github.com/orgs/TLUHK-RIF22/projects/7/views/1?pane=issue&itemId=52156977)



