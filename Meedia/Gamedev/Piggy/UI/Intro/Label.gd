extends Label

@export var Level:PackedScene
var skip_count = 0

func _physics_process(_delta):
	if Input.is_action_just_pressed("ui_accept") or Input.is_action_just_pressed("ui_cancel"):
		skip_count +=1
		
		
		if skip_count == 1:
			set_text("Press Enter to Skip")
			%Timer.start()
		elif skip_count == 2:
			get_tree().change_scene_to_packed(Level)


func _on_timer_timeout():
	skip_count = 0
	set_text("")
