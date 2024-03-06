extends StaticBody2D

func _process(_delta):
	if Global.apple_found:
		visible = false
