extends PanelContainer

@onready var texture_rect:TextureRect = %TextureRect

func display(item):
	texture_rect.texture = item.icon
