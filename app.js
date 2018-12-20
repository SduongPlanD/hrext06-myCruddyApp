$(document).ready(function(){
  console.log('jQuery loaded');
  var myItemsInStorage = []
  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem('inputFieldValue', $('.text-entry').val());
    myItemsInStorage.push(' ' + localStorage.getItem('inputFieldValue'));
    console.log('myItemsInStorage', myItemsInStorage);

    // display the value here
    $('.list-display-field').text(myItemsInStorage); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
    myItemsInStorage.pop()
    $('.list-display-field').text(myItemsInStorage)
  });

  //delete all storage when delete button clicked
  $('.btn-clear-all').on('click', function(){
    myItemsInStorage = [];
    $('.list-display-field').text(myItemsInStorage)
  });

});