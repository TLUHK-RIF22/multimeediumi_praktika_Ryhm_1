extends Area2D

var entered = false

func _on_body_entered(_body):
	entered = true
	

func _on_body_exited(_body):
	entered = false
	
func _process(_delta):
	if entered:
		
			Global.from_level = get_parent().name
			
			get_tree().change_scene_to_file("res://Levels/"+ self.name +".tscn")
			entered = false
			print(self.name)
