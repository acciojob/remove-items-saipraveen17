// get reference to the button element
const removeBtn = document.querySelector('input[type="button"]');

// add click event listener to the button
removeBtn.addEventListener('click', () => {
  // get reference to the select element
  const selectElem = document.getElementById('colorSelect');
  
  // get the currently selected option
  const selectedOption = selectElem.options[selectElem.selectedIndex];
  
  // remove the selected option from the list
  selectElem.removeChild(selectedOption);
});
