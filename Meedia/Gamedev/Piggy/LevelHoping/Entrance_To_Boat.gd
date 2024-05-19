extends Area2D
@onready var canvas_layer = %CanvasLayer
@export var fadeOutTimer: int = 1

var entered = false
@onready var animation_player = %AnimationPlayer
@export var level: String

@export var item:Item

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
	if entered && Input.is_action_just_pressed("ui_accept") && Global.BoatTrigger == 0:
		emit_signal("StopMoving")
		DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "BoatFirstSeen")
		Global.BoatTrigger = 1
	elif entered && Input.is_action_just_pressed("ui_accept") && Global.BoatTrigger == 1 && !item in inventory:
		emit_signal("StopMoving")
		DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "NoKey")
		
	elif entered && Input.is_action_just_pressed("ui_accept") && Global.BoatTrigger == 1 && item in inventory:
		emit_signal("StopMoving")
		canvas_layer.visible = true
		animation_player.play("fade_out")
		await(get_tree().create_timer(fadeOutTimer).timeout)
		entered = false
		
		get_tree().change_scene_to_file("res://Levels/"+level+".tscn")
		
	elif entered:
			emit_signal("CanMove")



