var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var loader = document.getElementById("loader");
        var loaded = document.getElementById("loaded");
        var width = 10;
        var id = setInterval(frame, 1);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
                loaded.style.display = "block";
                loader.style.display = "none";
                window.dispatchEvent(new Event('resize'))
            } else {
                width = width + 0.15;
                elem.style.width = width + "%";
            }
        }
    }
}

move();