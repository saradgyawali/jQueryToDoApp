//Check Off Specific todos by clicking
 $(document).ready(function() {
 $("li").click(function() {
 	$(this).toggleClass("completed");
 });


 // Click on X to delete todo
  $("span").click(function(){
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
		$("ul").append("<li><span>X</span> " + todoText + "</li>")
	};

});

});

