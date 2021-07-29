

// link one
$("#link-one").click(function(e){
    e.preventDefault();
    // alert("1");
    // hide projects
    hideAll()
    //display appropriate project
    $("#link-one-content").removeClass('hidden');
    $("#link-one-content").addClass('visible');

});

// link two
$("#link-two").click(function(e){
    e.preventDefault();
    // alert("2");
    // hide projects
    hideAll()
    //display appropriate project
    $("#link-two-content").removeClass('hidden');
    $("#link-two-content").addClass('visible');
});

// link three
$("#link-three").click(function(e){
    e.preventDefault();
    // alert("3");
    // hide projects
    hideAll()
    //display appropriate project
    $("#link-three-content").removeClass('hidden');
    $("#link-three-content").addClass('visible');
});



function hideAll() {
    // hide all displayed projects
    $('.projects').each(function() {
        $(this).addClass('hidden');
    });
}