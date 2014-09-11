#pragma strict

var health : int = 100;

function applyDammage(demmage: int) {
	health -= demmage;
	Debug.Log('Enemy: Ou oi');
}