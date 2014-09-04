#pragma strict

var health = 100;
var shootingCount = 0;


function Start () {

}

function Update () {

	// Shooting
	var shoot = Input.GetButtonDown("Fire1")
		|| Input.GetButtonDown("Fire2");
	
	if (shoot) {
		shootingCount++;
	}
}