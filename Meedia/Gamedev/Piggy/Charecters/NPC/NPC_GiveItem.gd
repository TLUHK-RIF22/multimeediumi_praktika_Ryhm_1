extends CharacterBody2D

var player_in_range = false

@export var item:Item

@export var Speech: DialogueResource
var inventory = Global._content
var itemGivenToNPC = Global.itemGivenToNPC
var metNPC = 0

func _unhandled_input(_event):
		
	if player_in_range:
		if Input.is_action_just_pressed("Interact"):
			if Global.canMove:
				Global.canMove = false
				if metNPC == 0:
					DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "start")
					metNPC += 1
					
					
				elif metNPC < 3 :
					DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "Questions1")
					metNPC += 1
				else:
					DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "GetLost")
			
				
func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		print(player_in_range)

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		print(player_in_range)

func give_item(itemVar):
	inventory.erase(itemVar)

func check_if_got_item(itemVar):
	if itemVar in inventory :
		itemGivenToNPC.append(self.name+itemVar.name)
		print(self.name+itemVar.name)
		give_item(itemVar)
