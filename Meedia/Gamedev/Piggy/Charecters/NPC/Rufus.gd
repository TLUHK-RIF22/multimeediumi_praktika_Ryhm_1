extends CharacterBody2D


var player_in_range = false



@export var Speech: DialogueResource


func _unhandled_input(_event):
		
	if player_in_range && Global.canMove:
		
		if Input.is_action_just_pressed("Interact") && Global.RufusTimesInteracted == 0:
			Global.canMove = false
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "PlanToLeaveTheIsland")
		elif Input.is_action_just_pressed("Interact") && Global.RufusTimesInteracted == 1:
			Global.canMove = false
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "Second")
	else:
		Global.canMove = true
		
			
func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		

