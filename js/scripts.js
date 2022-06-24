$(document).ready(function () {
    $("#myForm").submit(function(e){
        e.preventDefault();
    const userInput = $("#animal").val();

    if (userInput === "snakes"){
        $("#snakes").show();
        $("#turtles").hide();
        $("#insects").hide();
    }
    else if(userInput === "turtles"){
        $("#turtles").show();
        $("#snakes").hide();
        $("#insects").hide();
    }
    else{
        $("#insects").show();
        $("#snakes").hide();
        $("#turtles").hide();
    }
    });


    // if ($("#animals = .snake")) {
    //     $("#snakes").show();
    //     $("#turtle").hide();
    //     $("#insects").hide();
    // }
    // else if ($("#animals = .turtle")) {
    //     $("#turtle").show();
    //     $("#snakes").hide();
    //     $("#insects").hide();
    // }
    // else if ($("#animals = .insects")) {
    //     $("#insects").show();
    //     $("#snakes").hide();
    //     $("turtle").hide();
    // }



});