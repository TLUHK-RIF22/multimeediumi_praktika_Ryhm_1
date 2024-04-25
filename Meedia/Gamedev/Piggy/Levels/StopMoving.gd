extends Node

signal StopMoving

signal CanMove

func _on_gate_level_swap_stop_moving():
	emit_signal("StopMoving")


func _on_gate_level_swap_2_stop_moving():
	emit_signal("StopMoving")

func _on_gate_level_swap_3_stop_moving():
	emit_signal("StopMoving")


func _on_gate_level_swap_4_stop_moving():
	emit_signal("StopMoving")


func _on_entrance_stop_moving():
	emit_signal("StopMoving")


func _on_entrance_2_stop_moving():
	emit_signal("StopMoving")


func _on_kaev_a_stop_moving():
	emit_signal("StopMoving")


func _on_kaev_a_can_move():
	emit_signal("CanMove")


func _on_rufus_can_move():
	emit_signal("CanMove")


func _on_rufus_stop_moving():
	emit_signal("StopMoving")


func _on_survival_instinct_can_move():
	emit_signal("CanMove")


func _on_survival_instinct_stop_moving():
	emit_signal("StopMoving")


func _on_rufus_journey_can_move():
	emit_signal("CanMove")


func _on_rufus_journey_stop_moving():
	emit_signal("StopMoving")
