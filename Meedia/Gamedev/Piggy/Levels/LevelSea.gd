extends Node2D
@onready var canvas_layer = %CanvasLayer
@export var fadeOutTimer: int = 3
@onready var animation_player = %AnimationPlayer
@export var	TheEnd:PackedScene
@export var level: String
var screen_size :int = 480
var scroll = 0
var scroll_speed = 2
var piggy_speed = -0.3
@onready var sea_ground = %SeaGround
@onready var player = %Player


func _process(_delta):
	scroll -= scroll_speed
	if scroll <= -2*screen_size:
		scroll = 0
		sea_ground.position.x = 0
	sea_ground.position.x = +scroll
	player.position.x -= piggy_speed
	#if $player_spikes.position.y > screen_size:
	#	$player_spikes.position.y = screen_size 
	if player.position.x>= screen_size :
		canvas_layer.visible = true
		animation_player.play("fade_out")
		await(get_tree().create_timer(fadeOutTimer).timeout)

		get_tree().change_scene_to_packed(TheEnd)
