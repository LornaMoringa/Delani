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