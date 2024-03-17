extends CharacterBody2D

var player_in_range = false

@export var item:Item
@export var gotItem:bool
@export var Speech: Array[String]
@export var SpeechHungry: Array[String]
var inventory = Global._content

#const lines: Array[String] = [
#	"mees, ma ei tea?",
#	"Mis keeles sa räägid?",
#]

func _process(_delta):
	if player_in_range:
		
		if Input.is_action_just_pressed("Interact"):
			if gotItem == false:
				Dialogue.start_dialog(global_position, SpeechHungry)
				print("ei ole õuna")
				check_if_got_item(item)
				if check_if_got_item(item):
					give_item(item)
			elif gotItem == true:
				Dialogue.start_dialog(global_position, Speech)
				
		#	#DialogueManager.show_example_dialogue_balloon(load("res://Charecters/NPC/First_encounter.dialogue"), "start")
			

func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		print(player_in_range)

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		print(player_in_range)

func give_item(item):
	inventory.erase(item)

func check_if_got_item(item):
	if item in inventory :
		gotItem = true
		return gotItem
