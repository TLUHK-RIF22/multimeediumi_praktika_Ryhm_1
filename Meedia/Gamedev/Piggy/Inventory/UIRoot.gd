extends CanvasLayer

@onready var inventory_dialog:PanelContainer = %InventoryDialog
@onready var player:Player = $".."

func _input(event: InputEvent) -> void:
	if(event.is_action_pressed("inventory")):
		if !inventory_dialog.visible:
			inventory_dialog.open(player.inventory)

		else:
			inventory_dialog.hide()
