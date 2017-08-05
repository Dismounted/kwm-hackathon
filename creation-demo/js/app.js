var step2Clicked = {
    "Para1_1": false,
    "Para1_2": false,
    "Para2_1": false,
    "Para2_2": false,
    "Para2_3": false,
    "Para3_1": false,
    "Para3_2": false,
    "Para3_3": false,
    "Para3_4": false,
    "Para4_1": false,
    "Para4_2": false,
    "Para4_3": false,
    "Para5_1": false,
    "Para5_2": false,
    "Para5_3": false,
    "Para6_1": false,
    "Para6_2": false,
    "Para6_3": false
};
var step2ClickInProgress = false;
var step2EditorClicked = {
    "Para_5_1_1": false,
    "Para_5_1_2": false,
    "Para_5_2_2": false,
    "Para_5_2_3": false
}

$(function() {
    $("#Step1Continue").click(function() {
        $("#Step1").slideUp();
        $("#Step2").delay(750).slideDown();
    });
    $("#Step2Continue").click(function() {
        $("#Step2").slideUp();
        $("#Step3").delay(750).slideDown();
        $(".list-group-item-success").delay(500).each(function() {
            $("#" + $(this).data("nextStepId")).slideDown();
        });
    });
    $(".gutter-para")
        .mouseenter(function() {
            $(this).fadeTo("fast", 1);
        })
        .mouseleave(function() {
            $(this).fadeTo("fast", 0.5);
        });
    $("#Step2Para1_1 > h3")
        .mouseover(function() {
            if (step2Clicked["Para1_1"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para1_1"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para1_2 > h3")
        .mouseover(function() {
            if (step2Clicked["Para1_2"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para1_2"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para2_1 > h3")
        .mouseover(function() {
            if (step2Clicked["Para2_1"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para2_1"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para2_2 > h3")
        .mouseover(function() {
            if (step2Clicked["Para2_2"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para2_2"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para2_3 > h3")
        .mouseover(function() {
            if (step2Clicked["Para2_3"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para2_3"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para3_1 > h3")
        .mouseover(function() {
            if (step2Clicked["Para3_1"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para3_1"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para3_2 > h3")
        .mouseover(function() {
            if (step2Clicked["Para3_2"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para3_2"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para3_3 > h3")
        .mouseover(function() {
            if (step2Clicked["Para3_3"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para3_3"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para3_4 > h3")
        .mouseover(function() {
            if (step2Clicked["Para3_4"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para3_4"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para4_1 > h3")
        .mouseover(function() {
            if (step2Clicked["Para4_1"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para4_1"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para4_2 > h3")
        .mouseover(function() {
            if (step2Clicked["Para4_2"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para4_2"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para4_3 > h3")
        .mouseover(function() {
            if (step2Clicked["Para4_3"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para4_3"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para5_1 > h3")
        .mouseover(function() {
            if (step2Clicked["Para5_1"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para5_1"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para5_1"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key + " > h3").click();
                        $("#Step2" + key + " > h3").mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para5_1"] = (step2Clicked["Para5_1"] ? false : true);
            $("#Step2Para5_1Left").fadeToggle();
            $("#Step2Para5_1Right").fadeToggle();
        });
    $("#Step2Para5_2 > h3")
        .mouseover(function() {
            if (step2Clicked["Para5_2"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para5_2"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para5_2"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key + " > h3").click();
                        $("#Step2" + key + " > h3").mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para5_2"] = (step2Clicked["Para5_2"] ? false : true);
            $("#Step2Para5_2Left").fadeToggle();
            $("#Step2Para5_2Right").fadeToggle();
        });
    $("#Step2Para5_3 > h3")
        .mouseover(function() {
            if (step2Clicked["Para5_3"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para5_3"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para6_1 > h3")
        .mouseover(function() {
            if (step2Clicked["Para6_1"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para6_1"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para6_2 > h3")
        .mouseover(function() {
            if (step2Clicked["Para6_2"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para6_2"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para6_3 > h3")
        .mouseover(function() {
            if (step2Clicked["Para6_3"] == false) {
                $(this).children("span").css("background-color", "#f1d5f6");
            }
        })
        .mouseout(function() {
            if (step2Clicked["Para6_3"] == false) {
                $(this).children("span").css("background-color", "inherit");
            }
        });
    $("#Step2Para5_1LeftAdd").click(function() {
        $("#Step2Para5_1 > h3").click();
        $("#Step2Para5_1 > h3").mouseout();
        $("#Step2Para5_1_2").delay(750).slideDown();
    });
    $("#Step2Para5_1_1 > .col-sm-11").click(function() {
        if (step2EditorClicked["Para_5_1_1"] == false) {
            $(this).children("div").trumbowyg();
            step2EditorClicked["Para_5_1_1"] = true;
        }
    });
    $("#Step2Para5_1_2 > .col-sm-11").click(function() {
        if (step2EditorClicked["Para_5_1_2"] == false) {
            $(this).children("div").trumbowyg();
            step2EditorClicked["Para_5_1_2"] = true;
        }
    });
    $("#Step2Para5_2_2 > .col-sm-11").click(function() {
        if (step2EditorClicked["Para_5_2_2"] == false) {
            $(this).children("div").trumbowyg();
            step2EditorClicked["Para_5_2_2"] = true;
        }
    });
    $("#Step2Para5_2_3 > .col-sm-11").click(function() {
        if (step2EditorClicked["Para_5_2_3"] == false) {
            $(this).children("div").trumbowyg();
            step2EditorClicked["Para_5_2_3"] = true;
        }
    });
    $(".list-group-item").click(function(e) {
        e.preventDefault();
        if ($(this).hasClass("list-group-item-success")) {
            $(this).removeClass("list-group-item-success");
        } else {
            $(this).addClass("list-group-item-success");
        }
    });
});
