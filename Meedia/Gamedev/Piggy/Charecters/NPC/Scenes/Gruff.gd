extends CharacterBody2D


var player_in_range = false

signal StopMoving
signal CanMove

@export var Speech: DialogueResource


func _unhandled_input(_event):
		
	if player_in_range:
		
		if Input.is_action_just_pressed("Interact"):
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "Gruff")
		
		else:
			emit_signal("CanMove")
		
			
func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		

