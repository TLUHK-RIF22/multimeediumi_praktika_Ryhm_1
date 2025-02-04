class_name InventoryDialog
extends PanelContainer

@export var slot_scene:PackedScene

@onready var grid_container:GridContainer = %GridContainer

func open(inventory:Inventory):
	show()
	
	for child in grid_container.get_children():
		child.queue_free()
	
	for item in inventory.get_item():
		var slot = slot_scene.instantiate()
		grid_container.add_child(slot)
		slot.display(item)

func _unhandled_input(_event):
	if Input.is_action_just_pressed("ui_cancel"):
		hide()
