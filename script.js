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
})











//
