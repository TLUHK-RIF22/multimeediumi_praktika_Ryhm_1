extends Node2D

@export var item:Item
@export var posX:int
@export var posY:int


func _input(event):
	if event.is_action_released("Interact"):
		moveNPC(item)

func moveNPC(item):
	if (get_parent().name+item.name) in Global.itemGivenToNPC:
		get_parent().position.x = posX
		get_parent().position.y = posY
		
