#pragma strict

var speed : Vector2 = new Vector2(10, 10);
var direction : Vector2 = new Vector2(-1, 0);
private var movement : Vector2;

function Start () {

}

function Update () {
	movement = new Vector2(
		speed.x * direction.x,
		speed.y * direction.y);
}

function FixedUpdate() {
	rigidbody2D.velocity = movement;
}