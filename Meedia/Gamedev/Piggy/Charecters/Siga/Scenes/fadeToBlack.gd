extends CanvasLayer

@export var fadeInTimer: int = 3

func _ready():
	%CanvasLayer.visible = true
	if %CanvasLayer.visible:
		%AnimationPlayer.play("fade_in")
		await(get_tree().create_timer(fadeInTimer).timeout)
