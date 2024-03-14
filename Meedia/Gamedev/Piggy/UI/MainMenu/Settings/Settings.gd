extends Node2D

func _ready():
	%AudioStreamPlayer.play()
	%HSlider.set_value(Global.audioLevel)

func _on_back_button_pressed():
	get_tree().change_scene_to_file("res://UI/MainMenu/main.tscn")

func _process(_delta):
	%AudioStreamPlayer.set_volume_db(Global.audioLevel)
	

func _on_h_slider_value_changed(value):
	Global.audioLevel = %HSlider.value 
