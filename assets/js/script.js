var dateToday = moment().format('dddd, MMMM Do');
$('#currentDay').html(dateToday);


// loop through each hour and determine class for each timeBlock
var time = moment().hour();
console.log(time);
$(".time-block").each(function(){
    console.log(this);
    var timeBlock = $(this).attr("id");
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
})