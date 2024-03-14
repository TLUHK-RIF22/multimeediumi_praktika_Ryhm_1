extends Control

@export var game_manager : GameManager



func _process(_delta):
	
	%AudioStreamPlayer.set_volume_db(Global.audioLevel)

func _ready():
	hide()
	game_manager.connect("toggle_game_paused", _on_game_manager_toggle_game_paused)
	
	
func _on_game_manager_toggle_game_paused(is_paused : bool):
	if(is_paused):
		show()
		%ResumeButton.grab_focus()
		%HSlider.set_value(Global.audioLevel)
		%AudioStreamPlayer.play()
		
	else:
		hide()
		%AudioStreamPlayer.stop()

func _on_resume_button_pressed():
	game_manager.game_paused = false


func _on_exit_button_pressed():
	get_tree().quit()


func _on_h_slider_value_changed(value):
	Global.audioLevel = %HSlider.value 
