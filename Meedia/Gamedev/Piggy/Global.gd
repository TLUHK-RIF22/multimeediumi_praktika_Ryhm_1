extends Node2D

var from_level
var audioLevel = 0.0
var audioLevelMusic = 0.0
var audioLevelSXF = 0.0
@warning_ignore("unused_private_class_variable")
var _content: Array[Item] = []
var itemsPickedUp: Array = []
var itemGivenToNPC: Array = []

var isMutedMusic = false
var isMutedSFX = false
var canMove = true

#Tutorial level
var appearMoveInstructions: bool = false
var appearPickupItemInstructions: bool = false
var timesInteracted: int = 0
