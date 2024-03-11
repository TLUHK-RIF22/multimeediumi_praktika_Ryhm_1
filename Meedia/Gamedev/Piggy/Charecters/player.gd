extends CharacterBody2D

@export var move_speed : float = 150
@export var starting_direction : Vector2 = Vector2(0,1)

# parameters/idle/blend_position

@onready var animation_tree = $AnimationTree
@onready var state_machine = animation_tree.get("parameters/playback")

var apple_dec = false

func _ready():
	update_animation_parameters(starting_direction)

func _physics_process(_delta):
	#get input direction
	var input_direction = Vector2(
		Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left"),
		Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")
	)
	
	update_animation_parameters(input_direction)
	#update veleocity
	velocity = velocity.normalized()
	velocity = input_direction * move_speed
	
	# Move and Slide 
	move_and_slide()
	pick_new_state()
	
	if apple_dec == true:
		if Input.is_action_just_pressed("ui_accept"):
			Global.apple_found = true
			
	
func update_animation_parameters(move_input : Vector2):
	# Don't change animation parameters if there is on move input
	if(move_input != Vector2.ZERO):
		animation_tree.set("parameters/idle/blend_position", move_input)
		animation_tree.set("parameters/walk/blend_position", move_input)
		
# Choose state based on what is happening wiht the player

func pick_new_state():
	if(velocity != Vector2.ZERO):
		state_machine.travel("walk")
	else:
		state_machine.travel("idle")

func Player():
	pass


func _on_apple_detection_body_entered(body):
	if body.has_method("Player"):
		apple_dec = true


func _on_apple_detection_body_exited(body):
	if body.has_method("Player"):
		apple_dec = false

func on_item_picked_up(item:Item):
	print("I got a ", item.name)
