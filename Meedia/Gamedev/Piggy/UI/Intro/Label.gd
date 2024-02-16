extends Label

var skip_count = 0

func _physics_process(_delta):
	if Input.is_action_just_pressed("ui_accept"):
		skip_count +=1
		
		if skip_count == 1:
			set_text("Press Enter to Skip")
		elif skip_count == 2:
			get_tree().change_scene_to_file("res://UI/main.tscn")
