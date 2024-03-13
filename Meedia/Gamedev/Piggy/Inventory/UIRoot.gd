extends CanvasLayer

@onready var inventory_dialog:PanelContainer = %InventoryDialog
@onready var player:Player = $".."
var open = false

func _input(event: InputEvent) -> void:
	if(event.is_action_pressed("inventory") and !open):
		open = true
		inventory_dialog.open(player.inventory)
		
	if(event.is_action_released("inventory") and open) :
		open = false
		inventory_dialog.hide()
		
		
