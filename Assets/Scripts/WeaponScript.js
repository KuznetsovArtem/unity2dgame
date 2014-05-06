#pragma strict

var shotPrefab :Transform;
var shootingRate : float = 0.25;

private var shootCooldown : float;

function Start () {
	shootCooldown = 0;
}

function Update () {
	if (shootCooldown > 0) {
		shootCooldown -= Time.deltaTime;
	}
}

//----------===================

function Attack(isEnemy) {
	if ( CanAttack ) {
	
		shootCooldown = shootingRate;
		
		var shotTransform = Instantiate(shotPrefab) as Transform;
		shotTransform.position = transform.position;
		
		var shot : ShotScript = shotTransform.gameObject.GetComponent(ShotScript);
		
		if (shot != null) {
			shot.isEnemyShot = isEnemy;
		}
		
		var move : MoveScript = shotTransform.gameObject.GetComponent(MoveScript);
		if (move != null) {
			move.direction = this.transform.right;
		}
		
	}
}

var CanAttack = shootCooldown <= 0;