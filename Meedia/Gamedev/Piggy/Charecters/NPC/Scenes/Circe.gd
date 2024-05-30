extends CharacterBody2D


var player_in_range = false

signal StopMoving
signal CanMove

@export var Speech: DialogueResource

@export var key:Item
@export var sunglasses:Item
@export var gas_can:Item

var inventory = Global._content
var itemGivenToNPC = Global.itemGivenToNPC

func _unhandled_input(_event):
		
	if player_in_range:
		
		if Input.is_action_just_pressed("Interact") && Global.KeyFuelSunglassesMentioned == 0:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "Preboat")
		elif Input.is_action_just_pressed("Interact") && Global.KeyFuelSunglassesMentioned == 1 && key in inventory && sunglasses in inventory && gas_can in inventory:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "PostBoatItems")
		elif Input.is_action_just_pressed("Interact") && Global.KeyFuelSunglassesMentioned == 1:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "Postboat")
		
		
		else:
			emit_signal("CanMove")
		
			
func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		

