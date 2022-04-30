var dateToday = moment().format('dddd, MMMM Do');
$('#currentDay').html(dateToday);


// loop through each hour and determine class for each timeBlock
var time = moment().hour();
console.log(time);
$(".time-block").each(function(){
    console.log(this);
    var timeBlock = parseInt($(this).attr("id").split("-"));
    console.log(timeBlock);
    if(timeBlock === time){
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else if(timeBlock < time){
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    }
    else{
        $(this).removeClass("present");
        $(this).addClass("future");
        $(this).removeClass("past");
    }
});
<<<<<<< HEAD
// need to work on
$('saveBtn').on('click', function(){
    var text = $('.description');
    localStorage.setItem(text);
})
=======


var saveTask = function(){
    var time =
    var text =
    localStorage.setItem(time, text);
}


// save button click listener
$("button").on("click", function(){
    saveTask();
});
>>>>>>> 48c8c7db3ffef7b42b60ec52c16557bbef948456
