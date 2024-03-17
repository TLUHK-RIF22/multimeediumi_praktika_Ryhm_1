extends CharacterBody2D

var player_in_range = false


const lines: Array[String] = [
	"Hey, whats up?",
	"Why are you here?",
	"Im little lost here",
]

func _process(_delta):
	if player_in_range:
		if Input.is_action_just_pressed("Interact"):
			#DialogueManager.show_example_dialogue_balloon(load("res://Charecters/NPC/First_encounter.dialogue"), "start")
			Dialogue.start_dialog(global_position, lines)

func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false


