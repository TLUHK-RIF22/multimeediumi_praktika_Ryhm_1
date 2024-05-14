extends Node2D

@onready var MusicButton = %MusicSprite
@onready var SFXButton = %SFXSprite

@onready var MUSIC_BUS_ID = AudioServer.get_bus_index("Music")
@onready var SFX_BUS_ID = AudioServer.get_bus_index("SFX")

@onready var isMutedMusic = Global.isMutedMusic
@onready var isMutedSFX = Global.isMutedSFX

func _ready():
	if isMutedMusic:
		MusicButton.play("muted")
	else:
		MusicButton.play("unmuted")
	if isMutedSFX:
		SFXButton.play("muted")
	else:
		SFXButton.play("unmuted")
	
	%MusicSlider.set_value(Global.audioLevelMusic)
	%SFXSlider.set_value(Global.audioLevelSXF)	
		
func _on_back_button_pressed():
	get_tree().change_scene_to_file("res://UI/MainMenu/main.tscn")




func _on_sfx_button_pressed():
	if SFXButton.animation == "muted":
		SFXButton.play("unmuted")
		AudioServer.set_bus_mute(SFX_BUS_ID, false)
		Global.isMutedSFX = false
	else:
		SFXButton.play("muted")
		AudioServer.set_bus_mute(SFX_BUS_ID, true)
		Global.isMutedSFX = true


func _on_music_button_pressed():
	if MusicButton.animation == "muted":
		MusicButton.play("unmuted")
		AudioServer.set_bus_mute(MUSIC_BUS_ID, false)
		Global.isMutedMusic = false
		
	else:
		MusicButton.play("muted")
		AudioServer.set_bus_mute(MUSIC_BUS_ID, true)
		Global.isMutedMusic = true
		


func _on_music_slider_value_changed(value):
	AudioServer.set_bus_volume_db(MUSIC_BUS_ID, value)
	Global.audioLevelMusic = value 


func _on_sfx_slider_value_changed(value):
	AudioServer.set_bus_volume_db(SFX_BUS_ID, value)
	Global.audioLevelSXF = value 
	
