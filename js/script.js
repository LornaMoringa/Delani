$('document').ready(function () {
    $('#design1').click(function () {
        $('#design2').toggle();
        $('#design1').hide();
    })
    $('#dev1').click(function () {
        $('#dev2').toggle();
        $('#dev1').hide();
    })
    $('#product1').click(function () {
        $('#product2').toggle();
        $('#product1').hide();
    })
    $('#design3').click(function () {
        $('#design2').hide();
        $('#design1').show();
    })
    $('#dev3').click(function () {
        $('#dev2').hide();
        $('#dev1').show();
    })
    $('#product3').click(function () {
        $('#product2').hide();
        $('#product1').show();
    })
    $('#design2').click(function () {
        $('#design2').hide();
        $('#design1').show();
    })
    $('#dev2').click(function () {
        $('#dev2').hide();
        $('#dev1').show();
    })
    $('#product2').click(function () {
        $('#product2').hide();
        $('#product1').show();
    })
    $('.work4').hover(function () {
        $('#black').toggle();
        $('#work4').fadeout();
    })
    $('.work3').hover(function () {
        $('#ontario').toggle();
    })
    $('.work2').hover(function () {
        $('#pyramids').toggle();
    })
    $('.work1').hover(function () {
        $('#jim').toggle();
    })
    $('#work5').hover(function () {
        $('#niceday').toggle();
    })
    $('#work6').hover(function () {
        $('#calc').toggle();
    })
    $('#work7').hover(function () {
        $('#burned').toggle();
    })
    $('#work8').hover(function () {
        $('#giraffe').toggle();
    })
    $("form#mc-embedded-subscribe-form").submit(function () {
        var name = $("input#mce-FNAME").val();
        var form = document.getElementsByName("form1")[0];
        if ($("input#mce-FNAME").val() && $("input#mce-FNAME").val()) {
            alert(name + ",thank you for reaching out to us. We will get back to you soon.");
            form.reset();
            return false;
        }
        else {
            alert("Please enter your name and email address!");
        }
    });
});