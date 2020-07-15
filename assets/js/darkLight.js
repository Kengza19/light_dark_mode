/**
* @abstract - This file is the Light-Dark Mode management file
* @author- Kengza
* @description - A frontend Mentor Challenge: Social Media Dashboard with Theme switcher
*/

(function(){ //To avoid polluting the global space
    var switcher = document.querySelector('input'),
    body = document.querySelector('body');
    
    document.querySelector('form').addEventListener('load', function(){
        this.reset();
    });
    body.className = "";
    switcher.checked = true;

    if(!(switcher.checked) && body.className == ""){
        setTimeout(function(){
            body.className = "darkMode";
        }, 250);
    }
    (function(){
        switcher.addEventListener('change', function(){
            if(!(switcher.checked) && body.className == ""){
                setTimeout(function(){
                    body.className = "darkMode";
                }, 250);
            }
            else {
                setTimeout(function(){
                    body.className = "";
                }, 250);
            }
        });
    })();
})();