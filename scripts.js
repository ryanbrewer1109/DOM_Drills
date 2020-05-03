window.addEventListener('DOMContentLoaded', function() {
	let divHeader = document.createElement('div');
	divHeader.style.className = 'header-container';
	let h1 = document.createElement('h1');
	let h1Text = document.createTextNode('This is an h1.');
	h1.appendChild(h1Text);
	divHeader.appendChild(h1);
	document.body.appendChild(divHeader);

	// Step 5 in DOM Drills
	let h2 = document.createElement('h2');
	let h2Text = document.createTextNode('This is an h2.');
	h2.appendChild(h2Text);
	divHeader.appendChild(h2);


	// Step 6 in DOM Drills
	let h3 = document.createElement('h3');
	let h3Text = document.createTextNode('This is an h3.');
	h3.appendChild(h3Text);
	divHeader.appendChild(h3);

	let h4 = document.createElement('h4');
	let h4Text = document.createTextNode('This is an h4.');
	h4.appendChild(h4Text);
	divHeader.appendChild(h4);

	let h5 = document.createElement('h5');
	let h5Text = document.createTextNode('This is an h5.');
	h5.appendChild(h5Text);
	divHeader.appendChild(h5);

	let h6 = document.createElement('h6');
	let h6Text = document.createTextNode('This is an h6');
	h6.appendChild(h6Text);
	divHeader.appendChild(h6);

	// Step 7 in DOM Drills
	h1.style.className = 'h1';
	h2.style.className = 'h2';
	h3.style.className = 'h3';
	h4.style.className = 'h4';
	h5.style.className = 'h5';
	h6.style.className = 'h6';

	// Step 9 in DOM Drills

	var colors = ['black', 'red', 'orange', 'brown', 'green', 'pink', '#4682B4', 'purple'];	
	var h1Color = 'red';
	h1.addEventListener('dblclick', function() {
		let randNum = (Math.ceil(Math.random() * 10) % 7);

		if(h1Color == colors[randNum]) {
			randNum = ((randNum +1) % 7);
		}
		h1Color = colors[randNum];
		console.log('The random number is ', randNum, " and the applicable color is ", h1Color, ".");
		h1.style.color = h1Color;

	});
//	h1.addEventListener('dblclick', changeColor('h1'));

	// Add eventListener and function to change font color when h1 is double-clicked 
})

/*
let changeColor = function(header) {
		let colors = ['black', 'red', 'orange', 'goldenrod', 'green', 'light-blue', 'blue', 'purple'];
		let randNum = (Math.ceil(Math.random() * 10) % 7);
		header.style.color = colors[randNum];
	}
	*/