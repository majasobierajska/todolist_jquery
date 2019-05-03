//check off specidif todos by clicking
$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut(500,function()
		{
			$(this).remove();
		});
	event.stopPropagation();

});

//add listener
$("input[type='text']").keypress(function(event)
{
	if (event.which===13)
	{
		//grabbing new toodo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText +"</li>");
	}
});

$(".fa-compress").click(function()
{
	$("input[type='text']").fadeToggle();
})