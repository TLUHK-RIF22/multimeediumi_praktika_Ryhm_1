extends Node2D

@export var IntroVideo:PackedScene

func _ready():
	$ColorRect/AnimationPlayer.play("fade_in")
	await(get_tree().create_timer(6).timeout)
	$ColorRect/AnimationPlayer.play("fade_out")
	await(get_tree().create_timer(3).timeout)
	get_tree().change_scene_to_packed(IntroVideo)
	
	
