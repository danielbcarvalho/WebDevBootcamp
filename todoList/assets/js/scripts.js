//check off specific Todos by clicking
$("ul").on("click", "li", function(){ // the 'ul' listener is for listen future 'li's add
    $(this).toggleClass("checked"); // (this) -refer to specific 'li' that was clicked
});                                 // toggleClass altern class (on/off)

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){ // (this) is related to 'span' .parent() is related to the hole 'li'
        $(this).remove();
    });
    event.stopPropagation(); // this is to not click the 'parents' like li, ul, body...
});

//check if key 'enter' is pressed and atributte the text value to a new 'li' 
$("input[type='text']").keypress(function(event){
    if(event.which === 13){ //.which is the code of ther key pressed (enter === 13)
        var todoText = $(this).val(); //(this).val() is the value of the input
        $(this).val("");
        //create a new 'li' and append/acrescenta to 'ul' using .append to add
		$("ul").append(`<li><span><i class='fa fa-trash'></i></span>${todoText}</li>`)
    }
});

$("#plus").on("click", function(){
    $("input").fadeToggle(200);
});