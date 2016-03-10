"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {

    var checkMeOut;

    checkMeOut = document.getElementById("checkMeOut");

    checkMeOut.addEventListener("click", function () {
        if (checkMeOut.checked) {
            console.log("checkMeOut clicked");
        } else{
            console.log("It's unchecked");
        }
    }

        );

    // checkMeOut.onlick(function () {
    //     console.log("checkMeOut clicked");
    // })

})();

