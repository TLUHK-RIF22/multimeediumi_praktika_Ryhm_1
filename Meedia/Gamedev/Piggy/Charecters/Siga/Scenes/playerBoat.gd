class_name PlayerBoat
extends CharacterBody2D

@onready var playerWalkingAudioStream = %AudioStreamPlayer_Walking
@export var default_speed: float = 80
var move_speed : float = default_speed
@export var starting_direction : Vector2 = Vector2(0,0)

@export var idleTimer = false
var input_direction: Vector2


func _physics_process(_delta):

	input_direction = Vector2(
		Input.get_action_strength("ui_right") #- Input.get_action_strength("ui_left")
		,
		Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
	)
	print(velocity)

	velocity = velocity.normalized()
	velocity = input_direction * move_speed


	pick_new_state()
	
	# Move and Slide 
	move_and_slide()

func pick_new_state():
	if(velocity != Vector2.ZERO):

		if !playerWalkingAudioStream.playing:
			playerWalkingAudioStream.play()
	else:
		playerWalkingAudioStream.stop()
