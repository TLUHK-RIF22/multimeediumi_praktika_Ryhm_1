extends Area2D
@onready var canvas_layer = %CanvasLayer
@export var fadeOutTimer: int = 1

var entered = false
@onready var animation_player = %AnimationPlayer
@export var level: String
@export var GateName: String
@export var key:Item
@export var sunglasses:Item
@export var gas_can:Item


var inventory = Global._content
var itemGivenToNPC = Global.itemGivenToNPC



signal StopMoving
signal CanMove

@export var Speech: DialogueResource


func _on_body_entered(_body):
	entered = true
	

func _on_body_exited(_body):
	entered = false
	
func _unhandled_input(_event):
	if key in inventory:
		Global.key = 1
	if sunglasses in inventory:
		Global.sunglasses = 1
	if gas_can in inventory:
		Global.gas_can = 1
	
	if entered && Input.is_action_just_pressed("ui_accept") && Global.BoatTrigger == 0:
		emit_signal("StopMoving")
		DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "BoatFirstSeen")
		Global.BoatTrigger = 1

	elif entered && Input.is_action_just_pressed("ui_accept") && Global.BoatTrigger == 1 && key in inventory && sunglasses in inventory && gas_can in inventory:
		emit_signal("StopMoving")
		DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "Escape")
			
	elif entered && Global.BoatTrigger == 2 && key in inventory && sunglasses in inventory && gas_can in inventory:
		emit_signal("StopMoving")
		canvas_layer.visible = true
		animation_player.play("fade_out")
		await(get_tree().create_timer(fadeOutTimer).timeout)
		entered = false
		Global.from_level = get_parent().get_parent().name + GateName
		get_tree().change_scene_to_file("res://Levels/"+level+".tscn")
	
	elif entered && Input.is_action_just_pressed("ui_accept") && Global.BoatTrigger == 1 :
		emit_signal("StopMoving")
		DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "NoKey")
		
	elif entered:
			emit_signal("CanMove")



