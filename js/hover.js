$(document).ready(function() {

    var color = [, "#CE84AD", "#CE96A6",
    "#D1A7A0", "#D4CBB3", "#D2E0BF"];

    $(".link-list a").on({
        "mouseover" : inWeGo,
        "mouseout" : outWeCome
    });

    function inWeGo() {
        // console.log("hello");
        document.querySelector("body").style.background 
        = color[Math.floor(Math.random() * color.length)]
    }

    function outWeCome() {
        //  console.log("And we're out");
         document.querySelector("body").style.background 
         = color[Math.floor(Math.random() * color.length)]
    }
});