var menu, cajaover

function menu_desp() {
	menu = document.getElementById('botones_arriba')
	if(menu.style.display=='none') {
		menu.style.display = 'block'	
	} else {
		menu.style.display = 'none'
	}
}

function prodsover(sobre){
	cajaover = document.getElementById(sobre)
	cajaover.style.backgroundColor = '#fae073'
}
function prodsout(sobre){
	cajaout = document.getElementById(sobre)
	cajaout.style.backgroundColor = '#faee73'
}