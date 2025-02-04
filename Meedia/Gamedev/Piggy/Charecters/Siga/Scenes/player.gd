class_name Player
extends CharacterBody2D

@onready var playerWalkingAudioStream = %AudioStreamPlayer_Walking
@export var default_speed: float = 80
var move_speed : float = default_speed
@export var starting_direction : Vector2 = Vector2(0,0)
@onready var sleep_timer = %SleepTimer
@export var idleTimer = false
var input_direction: Vector2
# parameters/idle/blend_position

@onready var animation_tree = $AnimationTree
@onready var state_machine = animation_tree.get("parameters/playback")

var stopTurning = false

func _ready():
	update_animation_parameters(starting_direction)

func _physics_process(_delta):
	#get input direction
	if !stopTurning:
		input_direction = Vector2(
			Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left"),
			Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
		)

	update_animation_parameters(input_direction)

	velocity = velocity.normalized()
	velocity = input_direction * move_speed

	
	# Move and Slide 
	move_and_slide()
	
	pick_new_state()

	
func update_animation_parameters(move_input : Vector2):
	# Don't change animation parameters if there is on move input
	if(move_input != Vector2.ZERO):
		animation_tree.set("parameters/idle/blend_position", move_input)
		animation_tree.set("parameters/walk/blend_position", move_input)
		
# Choose state based on what is happening wiht the player

func pick_new_state():
	if(velocity != Vector2.ZERO):
		state_machine.travel("walk")
		sleep_timer.start()
		idleTimer = false
		if !playerWalkingAudioStream.playing:
			playerWalkingAudioStream.play()
	else:
		state_machine.travel("idle")
		playerWalkingAudioStream.stop()
		if idleTimer:
			state_machine.travel("sleep")
		

func Player():
	pass


func on_item_picked_up(item:Item):
	inventory.add_item(item)
	
	
var inventory:Inventory = Inventory.new()



func _on_sleep_timer_timeout():
	idleTimer = true


func _on_stop_moving_stop_moving():
	move_speed = 0
	stopTurning = true
	sleep_timer.stop()

func _on_stop_moving_can_move():
	move_speed = default_speed
	stopTurning = false
	sleep_timer.start()
