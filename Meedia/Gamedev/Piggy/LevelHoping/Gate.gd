extends Area2D
@onready var canvas_layer = %CanvasLayer
@export var fadeOutTimer: int = 3
var entered = false
@onready var animation_player = %AnimationPlayer


func _on_body_entered(_body):
	entered = true
	canvas_layer.visible = true
	if canvas_layer.visible:
		animation_player.play("fade_out")
		await(get_tree().create_timer(fadeOutTimer).timeout)
		entered = false
		Global.from_level = get_parent().name
		get_tree().change_scene_to_file("res://Levels/"+ self.name +".tscn")
		
func _on_body_exited(_body):
	entered = false
	
