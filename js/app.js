$(function() {
    $("#Step1Continue").click(function() {
        $("#Step1").slideUp();
        $("#Step2").delay(750).slideDown();
    });
    $("#Step2Para1").mouseover(function() {
        $(this).popover({
            title: "test",
            content: "Test",
            placement: "left"
        });
        $(this).popover("show");
    });
    $("#Step2Para1").mouseout(function() {
        $(this).popover("hide");
    });
});
