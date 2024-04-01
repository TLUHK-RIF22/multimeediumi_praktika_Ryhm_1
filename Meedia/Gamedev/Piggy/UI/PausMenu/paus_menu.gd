extends Control

@export var game_manager : GameManager

@onready var MusicButton = $Panel/ColorRect/VBoxContainer/BackgroundMusic/MusicSprite
@onready var SFXButton = $Panel/ColorRect/VBoxContainer/SFX/SFXSprite

@onready var MUSIC_BUS_ID = AudioServer.get_bus_index("Music")
@onready var SFX_BUS_ID = AudioServer.get_bus_index("SFX")

var isMutedMusic = Global.isMutedMusic
var isMutedSFX = Global.isMutedSFX
func _process(_delta):
	
	%AudioStreamPlayer.set_volume_db(Global.audioLevel)

func _ready():
	hide()
	game_manager.connect("toggle_game_paused", _on_game_manager_toggle_game_paused)
	
	
	
	
func _on_game_manager_toggle_game_paused(is_paused : bool):
	if(is_paused):
		show()
		%ResumeButton.grab_focus()
		
		%AudioStreamPlayer.play()
		%MusicSlider.set_value(Global.audioLevelMusic)
		%SFXSlider.set_value(Global.audioLevelSXF)
		if isMutedMusic:
			MusicButton.play("muted")
		else:
			MusicButton.play("unmuted")
		if isMutedSFX:
			SFXButton.play("muted")
		else:
			SFXButton.play("unmuted")
	else:
		hide()
		%AudioStreamPlayer.stop()

func _on_resume_button_pressed():
	game_manager.game_paused = false


func _on_exit_button_pressed():
	get_tree().quit()


#func _on_h_slider_value_changed(value):
#	Global.audioLevel = %HSlider.value 


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
	
