console.log('script sourced');

$(document).ready(function(){

var click= 0

//button push creates appended<div>
$('#generate').on('click', function(){
click +=1;
addDivsAndButtons();
console.log('button clicked')
});//end of button click

//button push delete appended div
$('#box-fields').on('click','#delete', function(){
removeDivAndButtons();
console.log('delete clicked');
})

//swap button should toggle colors
$('#box-fields').on('click','#swap', function(){
toggleColors();
console.log('swap clicked');
})

var addDivsAndButtons = function(){
$('#box-fields').append('<div class="box"><p>' + click + '</p><p><button id="swap">Swap</button><button id="delete">Delete</button></p></div>');
console.log('addDivs ran');
};//end of addDivsAndButtons

var removeDivAndButtons =function (){
$('#delete').parent().parent().remove();
console.log('removal run');
};//end of removeDivAndButtons

var toggleColors = function (){
$('.box').css('background-color','yellow')
    //need to rename the class of the boxes and style them within the css. not enough time.
};//end of toggleColors

}); // end of document
