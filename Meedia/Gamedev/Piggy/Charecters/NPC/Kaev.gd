extends CharacterBody2D

@onready var canvas_layer = %CanvasLayer
@onready var animation_player = %AnimationPlayer
@export var fadeOutTimer: int = 1

var player_in_range = false

@export var item:Item

@export var level: String
@export var GateName: String

signal StopMoving
signal CanMove


@export var Speech: DialogueResource
var inventory = Global._content
var itemGivenToNPC = Global.itemGivenToNPC

func _unhandled_input(_event):
		
	if player_in_range:
		
		if Input.is_action_just_pressed("ui_accept") && Global.GoDownWell == 2:
			emit_signal("StopMoving")
			
		elif Input.is_action_just_pressed("ui_accept") && Global.RufusWellMentioned == 0:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "WellMentioned0")
		elif Input.is_action_just_pressed("ui_accept") && Global.RufusWellMentioned == 1 && !item in inventory:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "WellMentioned1NoRope")
		elif Input.is_action_just_pressed("ui_accept") && Global.RufusWellMentioned == 1 && item in inventory:
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "WellMentioned1HasRope")
		elif Global.GoDownWell == 0:
			emit_signal("CanMove")
		
	if player_in_range && Global.GoDownWell == 1:
		inventory.erase(item)
		loadLevel()
	if Input.is_action_just_pressed("ui_accept") && player_in_range && Global.GoDownWell == 2:
		emit_signal("StopMoving")
		loadLevel()

			
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

func loadLevel():
	emit_signal("StopMoving")
	Global.GoDownWell = 2
	canvas_layer.visible = true
	animation_player.play("fade_out")
	await(get_tree().create_timer(fadeOutTimer).timeout)
	Global.from_level = get_parent().name + GateName
	get_tree().change_scene_to_file("res://Levels/"+level+".tscn")
