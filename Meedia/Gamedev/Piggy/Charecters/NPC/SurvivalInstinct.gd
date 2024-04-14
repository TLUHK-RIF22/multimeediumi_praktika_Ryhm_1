extends CharacterBody2D


var player_in_range = false

@export var item:Item

@export var Speech: DialogueResource
var inventory = Global._content
var itemGivenToNPC = Global.itemGivenToNPC
@onready var guide_1 = %Guide1



func _unhandled_input(event):
	if player_in_range && Global.appearMoveInstructions:
		guide_1.visible = true
	
	if player_in_range && Global.canMove:
		
		if Input.is_action_just_pressed("Interact"):
			Global.canMove = false
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "start")
			
	else:
		Global.canMove = true
		
			
func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		

func give_item(item):
	inventory.erase(item)

func check_if_got_item(item):
	if item in inventory :
		itemGivenToNPC.append(self.name+item.name)
		give_item(item)
