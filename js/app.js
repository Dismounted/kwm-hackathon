var step2Clicked = {
    "Para1": false,
    "Para2": false,
    "Para3": false,
    "Para4": false,
    "Para5": false
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
    $("#Step2Para2")
        .mouseover(function() {
            if (step2Clicked["Para2"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para2"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        })
        .click(function() {
            step2Clicked["Para2"] = (step2Clicked["Para2"] ? false : true);
            $("#Step2Para2Left").fadeToggle();
            $("#Step2Para2Right").fadeToggle();
        });
    $("#Step2Para3")
        .mouseover(function() {
            if (step2Clicked["Para3"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para3"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        })
        .click(function() {
            step2Clicked["Para3"] = (step2Clicked["Para3"] ? false : true);
            $("#Step2Para3Left").fadeToggle();
            $("#Step2Para3Right").fadeToggle();
        });
    $("#Step2Para4")
        .mouseover(function() {
            if (step2Clicked["Para4"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para4"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        })
        .click(function() {
            step2Clicked["Para4"] = (step2Clicked["Para4"] ? false : true);
            $("#Step2Para4Left").fadeToggle();
            $("#Step2Para4Right").fadeToggle();
        });
    $("#Step2Para5")
        .mouseover(function() {
            if (step2Clicked["Para5"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para5"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        })
        .click(function() {
            step2Clicked["Para5"] = (step2Clicked["Para5"] ? false : true);
            $("#Step2Para5Left").fadeToggle();
            $("#Step2Para5Right").fadeToggle();
        });
    $(".gutter-para")
        .mouseover(function() {
            $(this).fadeTo("fast", 1);
        })
        .mouseout(function() {
            $(this).fadeTo("fast", 0.5);
        });
    $("#Step2Continue").click(function() {
        $("#Step2").slideUp();
        $("#Step3").delay(750).slideDown();
    });
});
