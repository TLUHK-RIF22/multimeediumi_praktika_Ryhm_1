extends Node2D


var screen_size :float = 270
var scroll = 0
var scroll_speed = 0.8
var piggy_speed = 0.2

func _ready():
	Global.SpiritJourney = 2
	
func _process(_delta):
	scroll += scroll_speed
#	if scroll >= screen_size:
	#	scroll = 0
	$Ground.position.y = +scroll
	$player_spikes.position.y -= piggy_speed
	#if $player_spikes.position.y > screen_size:
	#	$player_spikes.position.y = screen_size 
	if $player_spikes.position.y <= screen_size / 2:
		$player_spikes.position.y = screen_size / 2
