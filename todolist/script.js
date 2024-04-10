loadEvents();
function loadEvents(){
	// document : a global object : used for modifing document(web-page) contents

	// the Document method querySelector() returns the first Element within the document
	//that matches the specified selector, or group of selectors. If no matches are found, null is returned.

	//The matching is done using depth-first pre-order traversal of the document's nodes
	//starting with the first element in the document's markup and iterating through sequential nodes
	//by order of the number of child nodes.

  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteOrTick);
}
//An event handler function is always given an argument when it is called.
//That argument is an Event object. In this case, it is being represented by "e"
function submit(e) {
	
	e.preventDefault();
	let listValue;
	let input = document.querySelector('input');
	if (input.value != '')
		addList(input.value);
	input.value='';

}
function addList(list){
	// querySelector() : returns the first element that matches a specified CSS selector(s) in the document
	// querySelectorAll() : to return all the matches 
	let ul = document.querySelector('ul');
	// createElement() : creates an Element Node with the specified name
	let li = document.createElement('li');
	// .innerHTML or .innerText
	li.innerHTML = `<input type="checkbox"><label>${list}</label><span class="delete" style="color:red;"> X</span>`;
	// .appendChild() or insertBefore()
	ul.appendChild(li);
	document.querySelector('listHere').style.display = 'block';
	// var arr = [`<input type="checkbox">`,`<label>${list}</label>`,`<span class="delete">X</span>`]
	// for (var i = 0; i < 3; i++) {
	// 	// k[i]
	// 	let ul = document.querySelector('ul'+i);
	// 	let li = document.createElement('li');
	// 	li.innerHTML = arr[i];
	// 	ul.appendChild(li);
	// 	document.querySelector('listHere'+i).style.display = 'block';
	// }
}
// clears all the list by sending null values
function clearList(e){
	let ul = document.querySelector('ul').innerHTML='';
}
function deleteOrTick(e){
	if (e.target.className == 'delete') //above in <span> mentioned class name
	 {
		deleteList(e);
	}
	else{
		tickList(e);
	}
}
function deleteList(e){
	let remove = e.target.parentNode;
	let parentNode = remove.parentNode;
	parentNode.removeChild(remove);
}
function tickList(e){
	const lst = e.target.nextSibling;
	if (e.target.checked) {
		lst.style.textDecoration = "line-through";
		lst.style.color="#ff0000";
	}else{
		lst.style.textDecoration = "none";
		lst.style.color="#2f4f4f";
	}
}