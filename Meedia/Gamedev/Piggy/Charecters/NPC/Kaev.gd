extends CharacterBody2D


var player_in_range = false

@export var item:Item

@export var Speech: DialogueResource
var inventory = Global._content
var itemGivenToNPC = Global.itemGivenToNPC
#@export var NewLevel: PackedScene
func _unhandled_input(_event):
		
	if player_in_range && Global.canMove:
		
		if Input.is_action_just_pressed("Interact") && Global.RufusWellMentioned == 0:
			Global.canMove = false
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "WellMentioned0")
		elif Input.is_action_just_pressed("Interact") && Global.RufusWellMentioned == 1 && !item in inventory:
			Global.canMove = false
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "WellMentioned1NoRope")
		elif Input.is_action_just_pressed("Interact") && Global.RufusWellMentioned == 1 && item in inventory:
			Global.canMove = false
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "WellMentioned1HasRope")
	else:
		Global.canMove = true
		
	if player_in_range && Global.GoDownWell == 1:
		inventory.erase(item)
		Global.GoDownWell = 2
	if player_in_range && Global.GoDownWell == 2:
		Global.from_level = get_parent().name
		get_tree().change_scene_to_file("res://Levels/LevelWell.tscn")

			
func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		
# Give item to NPC
func give_item(itemVar):
	inventory.erase(itemVar)


func check_if_got_item(itemVar):
	if itemVar in inventory :
		itemGivenToNPC.append(self.name+itemVar.name)
		give_item(itemVar)
