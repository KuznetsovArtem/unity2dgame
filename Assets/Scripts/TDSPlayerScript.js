#pragma strict

var health = 100;
var shootingCount = 0;
var weapon : Transform;


function Start () {
	Debug.Log("start fx");
}

function Update () {
	// Shooting
	var shoot = Input.GetButtonDown("Fire1")
		|| Input.GetButtonDown("Fire2");
	
	if (shoot) {
		weapon.animation.Play("attack");
		shootingCount++;
	}
}