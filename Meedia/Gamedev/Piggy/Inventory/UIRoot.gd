extends CanvasLayer

@onready var inventory_dialog:InventoryDialog = %InventoryDialog
@onready var player:Player = $".."

func _unhandled_input(event):
	if event.is_action_released("inventory"):
		inventory_dialog.open(player.inventory)
