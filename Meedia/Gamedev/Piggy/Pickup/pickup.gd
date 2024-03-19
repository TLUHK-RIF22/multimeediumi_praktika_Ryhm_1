extends Node2D

@export var item:Item
var itemsPickedUp = Global.itemsPickedUp

func _ready():
	var instance = item.scene.instantiate()
	add_child(instance)
	
	#Items are unique, can only be picked up once
	if get_parent().name +" " + self.name in Global.itemsPickedUp:
		queue_free()
	
func _on_area_2d_body_entered(body):
	if body.has_method("on_item_picked_up"):
		body.on_item_picked_up(item)
		itemsPickedUp.append(get_parent().name +" " + self.name)
		queue_free()
