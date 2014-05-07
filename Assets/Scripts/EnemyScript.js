#pragma strict

private var weapon :WeaponScript;

function Awake() {
	weapon = GetComponent(WeaponScript);
}

function Update () {
	if (weapon != null && weapon.CanAttack) {
		weapon.Attack(true);
	}
}