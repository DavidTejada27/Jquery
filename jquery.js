$( function() {

    
    $( ".draggable" ).draggable({
        containment: "parent",
        snap: true,
        snapTolerance: 100,
        cursor: "grabbing",
        opacity: 0.35,
        stack: ".draggable",
        zIndex: 100
        

    });
    $(".btncontainer").css({"display": "flex", "justify-content": "center"})

    $("button").css({"background":"radial-gradient(circle, rgba(236,251,63,1) 10%, rgba(221,223,54,1) 48%, rgba(236,251,63,1) 90%)", "width": "500px", "height": "50px", "margin": "20px 0 20px 0", "border-radius": "6px"}).on("click", function(){
        $(".container").css("visibility", function(index, visibility) {
            return (visibility === "visible") ? "hidden" : "visible";
        });
        
        
    })

    

  });
