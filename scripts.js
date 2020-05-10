'use strict';
let counter = 0;
window.addEventListener('DOMContentLoaded', function() {
	let container = document.getElementById('mainDiv'); 
	let divHeader = document.createElement('div');
	divHeader.style.className = 'header-container';
	let h1 = document.createElement('h1');
	h1.style.className = 'header-color-change';
	let h1Text = document.createTextNode('This is an h1.');
	h1.appendChild(h1Text);
	divHeader.appendChild(h1);
	container.appendChild(divHeader);
	clickColorChange('dblclick', h1);

	// Step 5 in DOM Drills
	let h2 = document.createElement('h2');
	h2.style.className = 'header-color-change';
	let h2Text = document.createTextNode('This is an h2.');
	h2.appendChild(h2Text);
	divHeader.appendChild(h2);
	clickColorChange("dblclick", h2);


	// Step 6 in DOM Drills
	let h3 = document.createElement('h3');
	let h3Text = document.createTextNode('This is an h3.');
	h3.style.className = 'header-color-change';
	h3.appendChild(h3Text);
	divHeader.appendChild(h3);
	clickColorChange("dblclick", h3);

	let h4 = document.createElement('h4');
	h4.style.className = 'header-color-change';
	let h4Text = document.createTextNode('This is an h4.');
	h4.appendChild(h4Text);
	divHeader.appendChild(h4);
	clickColorChange("dblclick", h4);

	let h5 = document.createElement('h5');
	h5.style.className = 'header-color-change';
	let h5Text = document.createTextNode('This is an h5.');
	h5.appendChild(h5Text);
	divHeader.appendChild(h5);
	clickColorChange("dblclick", h5);

	let h6 = document.createElement('h6');
	h6.style.className = 'header-color-change';
	let h6Text = document.createTextNode('This is an h6');
	h6.appendChild(h6Text);
	divHeader.appendChild(h6);
	clickColorChange("dblclick", h6);

	// Step 7 in DOM Drills
	h1.style.className = 'h1';
	h2.style.className = 'h2';
	h3.style.className = 'h3';
	h4.style.className = 'h4';
	h5.style.className = 'h5';
	h6.style.className = 'h6';

	// Step 9 in DOM Drills
	// DEBUG: Following statement tests whether the divs just created above can be selected using querySelectorAll
	let numHeaders = document.querySelectorAll('.header-color-change').length;
	// DEBUG: Currently, result in console.log is zero, indicating 
	console.log("The number of elements with class header-color-change is: ", numHeaders);

	// Add add functionality to button to add a list item when clicked
	let listButton = document.getElementsByClassName('btnList');
	listButton[0].addEventListener('click', addListItem);
}) // end anonymous function

function clickColorChange (userAction, el) {
	// When the header type (passed into this function) is clicked, change font to new color.
	el.addEventListener(userAction, function(evnt) {
		let colors = ['gray', 'red', 'orange', 'brown', 'green', 'pink', 'blue', 'purple'];	
		let randNum = (Math.floor(Math.random() * 7));
		let newColor = colors[randNum];
		console.log("First attempt to choose a new font color: New color = ", newColor);
		// If the randomly-selected color is same as existing color, choose another random color
		while(el.style.color == newColor) {
			randNum = (Math.floor(Math.random() * 7));
			newColor = colors[randNum];
			console.log("Next attempt to choose a new font color: New color = ", newColor);
		}; // end while

		console.log("Inside clickColorChange function for ", el, ". New font color is: ", newColor);
		evnt.target.style.color = newColor;
	}); // end anon function

}; // end functiondefinition: clickColorChange()


function addListItem() {
/*
	// Determine how many items already exist
	let itemsArr = document.querySelectorAll('.addedItem');
	let counter = itemsArr.length;
	console.log("Counter value is currently: " + counter)
	// NOTE: This doesn't work b/c query appears to only search for static 
	// elements in the index.html file, excluding the new ones created in this file
*/
	// This is the <ol> node. Any <li> items should be added as children of this node. 
	let oList;
	// See if <ol> already exists in the DOM. If not, create it.
	let oListArray = document.getElementsByTagName('ol');
	if(oListArray.length > 0) {
		oList = oListArray[0];
	}
	else {
		oList = document.createElement('ol');	
		document.body.appendChild(oList);
		// oList.style.className = 'newList';
	}


	// Add item with text indicating it is the 'nth' item
	let item = document.createElement('li');
	item.style.className = 'addedItem';
	let msg = ("This is list item " + ++counter);
	let itemText = document.createTextNode(msg);
	item.textContent = msg;
	console.log(msg); 
	// Add new item to ordered list
	//let numberedList = document.getElementsByClassName('newList');
	//numberedList[0].appendChild(item);
	oList.appendChild(item);

	// Change color of a list item when it is clicked
	// Arguments are 1) event action, and 2) target element
	clickColorChange('click', item);  

	// Delete a list item when it is double-clicked
	item.addEventListener('dblclick', deleteElement);

}

function deleteElement(e) {
	let element = e.target;
	let parent = e.target.parentNode;
	console.log("Deleteing this child node:", parent.removeChild(element));
	counter--;
}