extends Area2D
@onready var canvas_layer = %CanvasLayer
@export var fadeOutTimer: int = 1

var entered = false
@onready var animation_player = %AnimationPlayer
@export var level: String

func _on_body_entered(_body):
	entered = true
	Global.canMove = false
	canvas_layer.visible = true
	animation_player.play("fade_out")
	await(get_tree().create_timer(fadeOutTimer).timeout)
	entered = false
	Global.from_level = get_parent().name + self.name
	get_tree().change_scene_to_file("res://Levels/"+level+".tscn")
	
func _on_body_exited(_body):
	entered = false
	
