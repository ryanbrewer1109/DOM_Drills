window.addEventListener('DOMContentLoaded', function() {
	var divHeader = document.createElement('div');
	divHeader.style.className = 'header-container';
	let h1 = document.createElement('h1');
	h1.style.className = 'header-color-change';
	let h1Text = document.createTextNode('This is an h1.');
	h1.appendChild(h1Text);
	divHeader.appendChild(h1);
	document.body.appendChild(divHeader);
	clickColorChange(h1);

	// Step 5 in DOM Drills
	let h2 = document.createElement('h2');
	h2.style.className = 'header-color-change';
	let h2Text = document.createTextNode('This is an h2.');
	h2.appendChild(h2Text);
	divHeader.appendChild(h2);
	clickColorChange(h2);


	// Step 6 in DOM Drills
	let h3 = document.createElement('h3');
	let h3Text = document.createTextNode('This is an h3.');
	h3.style.className = 'header-color-change';
	h3.appendChild(h3Text);
	divHeader.appendChild(h3);
	clickColorChange(h3);

	let h4 = document.createElement('h4');
	h4.style.className = 'header-color-change';
	let h4Text = document.createTextNode('This is an h4.');
	h4.appendChild(h4Text);
	divHeader.appendChild(h4);
	clickColorChange(h4);

	let h5 = document.createElement('h5');
	h5.style.className = 'header-color-change';
	let h5Text = document.createTextNode('This is an h5.');
	h5.appendChild(h5Text);
	divHeader.appendChild(h5);
	clickColorChange(h5);

	let h6 = document.createElement('h6');
	h6.style.className = 'header-color-change';
	let h6Text = document.createTextNode('This is an h6');
	h6.appendChild(h6Text);
	divHeader.appendChild(h6);
	clickColorChange(h6);

	// Step 7 in DOM Drills
	h1.style.className = 'h1';
	h2.style.className = 'h2';
	h3.style.className = 'h3';
	h4.style.className = 'h4';
	h5.style.className = 'h5';
	h6.style.className = 'h6';

	// Step 9 in DOM Drills
	// DEBUG: Following statement tests whether the divs just created above can be selected using querySelectorAll
	let numHeaders = document.querySelectorAll(".header-color-change").length;
	// DEBUG: Currently, result in console.log is zero, indicating 
	console.log("The number of elements with class header-color-change is: ", numHeaders);


}) // end anonymous function
function clickColorChange (headerType) {
	// When the header type (passed into this function) is clicked, change font to new color.
	headerType.addEventListener("click", function() {
	let colors = ['gray', 'red', 'orange', 'brown', 'green', 'pink', 'blue', 'purple'];	
	let randNum = (Math.floor(Math.random() * 7));
	let newColor = colors[randNum];
	console.log("First attempt to choose a new font color: New color = ", newColor);
	// If new random color is same as existing color, choose another random color
	while(headerType.style.color == newColor) {
		randNum = (Math.floor(Math.random() * 7));
		newColor = colors[randNum];
		console.log("Next attempt to choose a new font color: New color = ", newColor);
	}; // end while




	console.log("Inside clickColorChange function for ", headerType, ". New font color is: ", newColor);
	headerType.style.color = newColor;
	}); // end anon function

}; // end functiondefinition: clickColorChange()


x = document.getElementsByClassName('divHeader');
l = x.length;
for (i = 0; i < l; i++) {
  document.write(x[i].tagName + "<br>");
}