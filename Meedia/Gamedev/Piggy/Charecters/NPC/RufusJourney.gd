extends CharacterBody2D

@onready var canvas_layer = %CanvasLayer
@export var fadeOutTimer: int = 1
@onready var animation_player = %AnimationPlayer
@export var GateName: String
var player_in_range = false


signal StopMoving
signal CanMove

@export var Speech: DialogueResource


@export var nextLevel: String

func _ready():
	if Global.SpiritJourney == 4:
		self.queue_free()

func _unhandled_input(_event):
		
	if player_in_range:
		
		if Input.is_action_just_pressed("Interact"):
			emit_signal("StopMoving")
			DialogueManager.show_dialogue_balloon(load(Speech.resource_path), "Start")
		elif Global.SpiritJourney == 5:
			emit_signal("StopMoving")
			canvas_layer.visible = true
			animation_player.play("fade_out")
			await(get_tree().create_timer(fadeOutTimer).timeout)
			Global.from_level = get_parent().name + GateName
			get_tree().change_scene_to_file("res://Levels/"+nextLevel+".tscn")
		else:
			emit_signal("CanMove")
		
			
func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		

