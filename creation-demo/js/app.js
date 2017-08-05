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

$(function() {
    $("#Step1Continue").click(function() {
        $("#Step1").slideUp();
        $("#Step2").delay(750).slideDown();
    });
    $("#Step2Continue").click(function() {
        $("#Step2").slideUp();
        $("#Step3").delay(750).slideDown();
    });
    $(".gutter-para")
        .mouseover(function() {
            $(this).fadeTo("fast", 1);
        })
        .mouseout(function() {
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para1_1"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para1_1"] = (step2Clicked["Para1_1"] ? false : true);
            $("#Step2Para1_1Left").fadeToggle();
            $("#Step2Para1_1Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para1_2"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para1_2"] = (step2Clicked["Para1_2"] ? false : true);
            $("#Step2Para1_2Left").fadeToggle();
            $("#Step2Para1_2Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para2_1"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para2_1"] = (step2Clicked["Para2_1"] ? false : true);
            $("#Step2Para2_1Left").fadeToggle();
            $("#Step2Para2_1Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para2_2"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para2_2"] = (step2Clicked["Para2_2"] ? false : true);
            $("#Step2Para2_2Left").fadeToggle();
            $("#Step2Para2_2Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para2_3"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para2_3"] = (step2Clicked["Para2_3"] ? false : true);
            $("#Step2Para2_3Left").fadeToggle();
            $("#Step2Para2_3Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para3_1"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para3_1"] = (step2Clicked["Para3_1"] ? false : true);
            $("#Step2Para3_1Left").fadeToggle();
            $("#Step2Para3_1Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para3_2"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para3_2"] = (step2Clicked["Para3_2"] ? false : true);
            $("#Step2Para3_2Left").fadeToggle();
            $("#Step2Para3_2Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para3_3"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para3_3"] = (step2Clicked["Para3_3"] ? false : true);
            $("#Step2Para3_3Left").fadeToggle();
            $("#Step2Para3_3Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para3_4"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para3_4"] = (step2Clicked["Para3_4"] ? false : true);
            $("#Step2Para3_4Left").fadeToggle();
            $("#Step2Para3_4Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para4_1"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para4_1"] = (step2Clicked["Para4_1"] ? false : true);
            $("#Step2Para4_1Left").fadeToggle();
            $("#Step2Para4_1Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para4_2"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para4_2"] = (step2Clicked["Para4_2"] ? false : true);
            $("#Step2Para4_2Left").fadeToggle();
            $("#Step2Para4_2Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para4_3"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para4_3"] = (step2Clicked["Para4_3"] ? false : true);
            $("#Step2Para4_3Left").fadeToggle();
            $("#Step2Para4_3Right").fadeToggle();
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
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
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
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para5_3"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para5_3"] = (step2Clicked["Para5_3"] ? false : true);
            $("#Step2Para5_3Left").fadeToggle();
            $("#Step2Para5_3Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para6_1"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para6_1"] = (step2Clicked["Para6_1"] ? false : true);
            $("#Step2Para6_1Left").fadeToggle();
            $("#Step2Para6_1Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para6_2"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para6_2"] = (step2Clicked["Para6_2"] ? false : true);
            $("#Step2Para6_2Left").fadeToggle();
            $("#Step2Para6_2Right").fadeToggle();
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
        })
        .click(function() {
            if (step2ClickInProgress == false && step2Clicked["Para6_3"] == false) {
                step2ClickInProgress = true;
                $.each(step2Clicked, function(key, val) {
                    if (val == true) {
                        $("#Step2" + key).click();
                        $("#Step2" + key).mouseout();
                    }
                });
                step2ClickInProgress = false;
            }
            step2Clicked["Para6_3"] = (step2Clicked["Para6_3"] ? false : true);
            $("#Step2Para6_3Left").fadeToggle();
            $("#Step2Para6_3Right").fadeToggle();
        });
    $("#Step2Para1_1 > div").click(function() {
        // $(this).trumbowyg();
    });
});
