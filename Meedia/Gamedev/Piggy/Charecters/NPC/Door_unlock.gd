extends CharacterBody2D

var player_in_range = false
@export var posX:int
@export var posY:int
@export var item:Item

@export var SpeechNoItem: Array[String]
@export var SpeechGotItem: Array[String]


var inventory = Global._content
var itemGivenToNPC = Global.itemGivenToNPC

func _process(_delta):
	if player_in_range:
			if !(self.name+item.name) in itemGivenToNPC:
				#Dialogue.start_dialog(global_position, SpeechNoItem)
				check_if_got_item(item)
				
			elif (self.name+item.name) in itemGivenToNPC:
				openDoor(item)
				
		#	#DialogueManager.show_example_dialogue_balloon(load("res://Charecters/NPC/First_encounter.dialogue"), "start")
			

func _on_area_2d_body_entered(body):
	if body.has_method("Player"):
		player_in_range = true
		print(player_in_range)

func _on_area_2d_body_exited(body):
	if body.has_method("Player"):
		player_in_range = false
		print(player_in_range)

func give_item(item):
	inventory.erase(item)

func check_if_got_item(item):
	if item in inventory :
		itemGivenToNPC.append(self.name+item.name)
		print(self.name+item.name)
		give_item(item)

func openDoor(item):
	if (self.name+item.name) in Global.itemGivenToNPC:
		self.position.x = self.position.x + 10
		#self.position.y = self.position.y - 10
