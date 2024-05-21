extends Node2D

@onready var panel = %PanelContainer

@export var labelText: String
@onready var label = %Label

func _ready():
	label.text = labelText
	
func _on_area_2d_body_entered(_body):
	panel.visible = true


func _on_area_2d_body_exited(_body):
	panel.visible = false
