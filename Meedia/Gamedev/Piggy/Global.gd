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
var canMove: bool
var fadeToBlack: bool = true

#Tutorial level
var appearMoveInstructions: bool = false
var appearPickupItemInstructions: bool = false
var timesInteracted: int = 0

#Rufus Interact
var RufusTimesInteracted: int = 10
var RufusWellMentioned: int = 0
var GoDownWell: int = 0

#Spirit Journey
var SpiritJourney:int = 0

#Boat Escape

var BoatTrigger:int = 0
var key = 0
var gas_can = 0
var sunglasses = 0


var KeyFuelSunglassesMentioned = 0
