extends Node2D

@export var MainMenu:PackedScene

func _on_video_stream_player_finished():
	get_tree().change_scene_to_packed(MainMenu)
