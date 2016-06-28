$("#button").on("click", function(){
  $.ajax({
    url: "http://www.fvi-grad.com/ajax/lesson1.txt",
    success :function(resp, txt, xhr){
      $("#par").html(resp);
    },
    error: function(xhr, txt, error){

    }
  })
});
