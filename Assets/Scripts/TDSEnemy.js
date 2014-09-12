#pragma strict

var health : int = 100;

function Update() {
	if(health <= 0) {
		Dead();
	}
}

function applyDammage(demmage: int) {
	health -= demmage;
	Debug.Log('Enemy: Ou oi');
}

function Dead() {
	Destroy(gameObject);
}