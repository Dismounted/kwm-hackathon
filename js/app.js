var step2Clicked = {
    "Para1": false
};

$(function() {
    $("#Step1Continue").click(function() {
        $("#Step1").slideUp();
        $("#Step2").delay(750).slideDown();
    });
    $("#Step2Para1")
        .mouseover(function() {
            if (step2Clicked["Para1"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para1"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        })
        .click(function() {
            step2Clicked["Para1"] = (step2Clicked["Para1"] ? false : true);
            $("#Step2Para1Left").fadeToggle();
            $("#Step2Para1Right").fadeToggle();
        });
    $(".gutter-para")
        .mouseover(function() {
            $(this).fadeTo("fast", 1);
        })
        .mouseout(function() {
            $(this).fadeTo("fast", 0.5);
        });
});
