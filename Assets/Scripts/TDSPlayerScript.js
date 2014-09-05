#pragma strict

var health = 100;
var shootingCount = 0;
var weapon : Transform;
var cam : Transform;


function Start () {
	Debug.Log(cam.position);
	cam.position[0] = 20;
	Debug.Log(cam.position);
}

function Update () {

	updateCam();
	// Shooting
	var shoot = Input.GetButtonDown("Fire1")
		|| Input.GetButtonDown("Fire2");
	
	if (shoot) {
		weapon.animation.Play("attack");
		shootingCount++;
	}
}

function updateCam() {
	var camNextLocation : Vector3 = Vector3(
		this.gameObject.transform.position[0], 
		15,
		this.gameObject.transform.position[2]
	);
	//var camNextLocation : Vector3 = this.gameObject.transform.position;
	//Debug.Log(camNextLocation);
	Camera.mainCamera.transform.position = camNextLocation;
}

function MoveCamera() 
{
    // directly move the Main Camera
    //Camera.mainCamera.transform.position = TellCamNextLocation;
}