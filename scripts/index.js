

function calculateNum(num1, num2) {
	return num1 + num2
}


function getNum(x, y) {
	console.log(calculateNum(x, y))
}


function showName() {
	const showNameElement = document.getElementById('showName')
	let name = document.getElementById('nameInput')
	name = name.value
	// sayName(name)
	showNameElement.style.display = 'block'
	showNameElement.style.color = 'purple'
	showNameElement.innerHTML = name
}

