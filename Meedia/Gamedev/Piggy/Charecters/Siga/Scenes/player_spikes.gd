extends CharacterBody2D

@export var move_speed : float = 80
@export var starting_direction : Vector2 = Vector2(0,1)

# parameters/idle/blend_position

@onready var animation_tree = $AnimationTree
@onready var state_machine = animation_tree.get("parameters/playback")

func _ready():
	update_animation_parameters(starting_direction)

func _physics_process(_delta):
	#get input direction
	var input_direction = Vector2(
		Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left"),
		0 - 0
	)
	
	update_animation_parameters(input_direction)
	#update veleocity
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
	#if(velocity != Vector2.ZERO):
		state_machine.travel("walk")
	#else:
	#	state_machine.travel("idle")
