window.addEventListener('load', () => {
	let exercise1 = document.getElementById('exercise1');
	exercise1.innerHTML = 'Exercise 1 complete';


	// let counter = 1;
	// TODO: prevent user from adding an empty string to the list
	let ex2button = document.querySelector('#ex2button');
	let ex2text = document.querySelector('#ex2text');
	let ex2list = document.querySelector('#ex2list');

	ex2button.addEventListener('click', e => {
		// console.log('Exercise 2 button click');
		let li = document.createElement('li');
		let userText = ex2text.value;
		li.innerText = userText;
		ex2list.appendChild(li);
	});


	let buttonState = true;
	{  // this block creates a new scope for the variables
		let ex3button = document.querySelector('#ex3button');
		let switcherDivs = document.getElementsByClassName('switchContent');
		ex3button.addEventListener('click', e => {
			// If we want to use forEach, we need to convert switcherDivs using Array.from()
			for( let i=0; i<switcherDivs.length; i++ ){
				let div = switcherDivs[i];
				if( buttonState ) {div.innerHTML = 'goodbye';}
				else { div.innerHTML = 'hello'; }
			}
			buttonState = !buttonState;
		})
	}
	{  // this block creates a new scope for the variables
		let ex3button = $('#ex3jbutton');
		let switcherDivs = $('.switchContent');
		ex3button.on('click', e => {
			if( buttonState ) {switcherDivs.html('goodbye');}
			else { switcherDivs.html('hello'); }
			buttonState = !buttonState;
		})
	}

})











//
