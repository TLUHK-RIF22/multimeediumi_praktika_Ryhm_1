extends Node2D

@export var firstLevel:PackedScene
@export var settings:PackedScene

func _ready():
	%AudioStreamPlayer.play()
	%AudioStreamPlayer.set_volume_db(Global.audioLevel)

func _on_play_button_pressed():
	get_tree().change_scene_to_packed(firstLevel)


func _on_quit_button_pressed():
	get_tree().quit()


func _on_settings_button_pressed():
	get_tree().change_scene_to_packed(settings)
