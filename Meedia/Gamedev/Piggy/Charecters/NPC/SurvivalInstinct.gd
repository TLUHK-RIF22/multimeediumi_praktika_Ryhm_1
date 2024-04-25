extends CharacterBody2D


var player_in_range = false
signal StopMoving
signal CanMove

@export var item:Item

@export var Speech: DialogueResource
var inventory = Global._content
var itemGivenToNPC = Global.itemGivenToNPC
@onready var guide_1 = %Guide1
@onready var guide_2 = %Guide2

func _ready():
	if Global.timesInteracted == 2:
		%SurvivalInstinct.queue_free()
		guide_1.queue_free()
		guide_2.queue_free()
		
func _unhandled_input(_event):

	if Global.appearMoveInstructions:
		guide_1.visible = true
		guide_2.visible = true
		
	if player_in_range:
		
		if Global.timesInteracted == 0:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "start")
		elif Input.is_action_just_pressed("Interact") && Global.timesInteracted == 1 && !item in inventory:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "DoesntHaveApple")
		elif Input.is_action_just_pressed("Interact") && Global.timesInteracted == 1 && item in inventory:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "HasApple")
			inventory.erase(item)
		elif Global.timesInteracted == 2:
			%SurvivalInstinct.queue_free()
			emit_signal("CanMove")
		else:
			emit_signal("CanMove")
	elif Global.timesInteracted == 2:
		%SurvivalInstinct.queue_free()
		emit_signal("CanMove")
	else:
		emit_signal("CanMove")
		
			
func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		

func give_item(itemVar):
	inventory.erase(itemVar)

func check_if_got_item(itemVar):
	if itemVar in inventory :
		itemGivenToNPC.append(self.name+itemVar.name)
		give_item(itemVar)
