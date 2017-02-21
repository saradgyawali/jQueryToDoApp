//Check Off Specific todos by clicking
 $(document).ready(function() {
 $("ul").on("click", "li", function() {
 	$(this).toggleClass("completed");
 });


 // Click on X to delete todo
  $("ul").on("click", "span", function(){
 	$(this).parent().fadeOut(500,function(){
 		$(this).remove();
 	});
 	event.stopPropagation(); 
 });


$("input[type='text']").keypress(function(event){
	if(event.which === 13) {

		//grabbing new todo from the input
		var todoText = ($(this).val());

		//create a new li to add to ul
		$("ul").append("<li><span><i class='fa fa-trash fa-lg'></i></span> " + todoText + "</li>")
	};

});

$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
})
});

