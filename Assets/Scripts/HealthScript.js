#pragma strict

var hp : int = 1;
var isEnemy = true;

function Damage(damageCount :int) {
	hp -= damageCount;
	
	if(hp <= 0) {
		Destroy(gameObject);
	}
}

function OnTriggerEnter2D(otherCollider :Collider2D) {
	var shot : ShotScript = otherCollider.gameObject.GetComponent(ShotScript);
	
	if (shot != null) {
		if (shot.isEnemyShot != isEnemy) {
			Damage(shot.damage);
			
			Destroy(shot.gameObject);
		}
	}
}

function Start () {

}

function Update () {

}