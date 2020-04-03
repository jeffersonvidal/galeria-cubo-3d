"use strict";

        window.addEventListener("DOMContentLoaded",
        function(){
            var cube = document.querySelector(".cube"),
            imageBUttons = document.querySelector(".image-buttons");

            var cubeImageClass = cube.classList[1];

            imageBUttons.addEventListener("click", function(e){
                var targetNode = e.target.nodeName,
                targetClass = e.target.className;

                if(targetNode === "INPUT" && targetClass !== cubeImageClass){
                    console.log("show image: ".concat(targetClass.charAt(11)));

                    cube.classList.replace(cubeImageClass, targetClass);

                    cubeImageClass = targetClass;
                }
            });
        });