#pragma strict

var demmage : int = 50;
var distance : float;
var maxDistance : float = 1.5;
var shootingCount = 0;

function Update () {
	if(Input.GetButtonDown("Fire1")) {
		var hit : RaycastHit;
		if(Physics.Raycast(transform.position, transform.TransformDirection(Vector3.forward), hit)) {
			distance = hit.distance;
			if (distance < maxDistance) {
				Debug.Log('Shoot');
				hit.transform.SendMessage("applyDammage", demmage, SendMessageOptions.DontRequireReceiver);		
				shootingCount++;		
			}

		}
		
	}
}