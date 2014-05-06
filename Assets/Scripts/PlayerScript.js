#pragma strict

var speed : Vector2 = new Vector2(50, 50);
private var movement : Vector2;

function Start () {

}

function Update () {
	var inputX : float = Input.GetAxis("Horizontal");
	var inputY : float = Input.GetAxis("Vertical");
	
	// Movement
	movement = new Vector2(
		speed.x * inputX,
		speed.y * inputY);
		
	// Shooting
	var shoot = Input.GetButtonDown("Fire1")
		|| Input.GetButtonDown("Fire2");
	
	if (shoot) {
		var weapon : WeaponScript = GetComponent(WeaponScript);
		if (weapon != null) {
			weapon.Attack(false);
		}
	}
}

function FixedUpdate() {
	rigidbody2D.velocity = movement;
}