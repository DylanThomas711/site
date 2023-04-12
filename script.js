var answer;
var activity;
var location;
$("#two").hide();
$("#ya").hide();
$("#no").hide();


$(".yes").click(() => {
   $("#one").hide();
   $("#two").show();
   answer = "yes";
})

$(".later").click(() => {
   $("#one").hide();
   $("#two").show();
   answer = "later"
})

$(".no").click(() => {
   $("#one").hide();
   $("#no").show();
})

$(".act").change(()=>{
   activity = $(".act").val();
   console.log($(".act").val());
})

$(".results").click(()=>{
   $("#ya").show();
   $("#no").hide();
   $("#one").hide();
   $("#two").hide();
   $(".yes").text(answer)
   $(".activity").text(activity)
})