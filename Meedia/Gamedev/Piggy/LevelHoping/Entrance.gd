extends Area2D

@onready var entered = false

func _on_body_entered(_body):
	entered = true
	

func _on_body_exited(_body):
	entered = false
	
func _unhandled_input(_event):
	if entered && Input.is_action_just_pressed("ui_accept"):
		Global.from_level = get_parent().name
		
		get_tree().change_scene_to_file("res://Levels/"+ self.name + "/" + self.name +".tscn")
		#print(self.name)
		
