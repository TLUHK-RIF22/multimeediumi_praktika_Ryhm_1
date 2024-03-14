extends AudioStreamPlayer

func _process(_delta):
	
	%AudioStreamPlayer.set_volume_db(Global.audioLevel)
