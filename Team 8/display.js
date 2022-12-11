document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "3D_image"
    document.getElementById("3D_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("3D" in localStorage && "3D1" in localStorage) {
            var img = document.createElement("img");
            img.id = "3D_image"+i;
            document.getElementById("3D_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("3D" in localStorage) {
            document.getElementById("3D_image").setAttribute("src", localStorage.getItem("3D"))
            document.getElementById("3D_image"+i).setAttribute("src", localStorage.getItem("3D"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "anime_image"
    document.getElementById("anime_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("anime" in localStorage && "anime1" in localStorage) {
            var img = document.createElement("img");
            img.id = "anime_image"+i;
            document.getElementById("anime_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("anime" in localStorage) {
            document.getElementById("anime_image").setAttribute("src", localStorage.getItem("anime"))
            document.getElementById("anime_image"+i).setAttribute("src", localStorage.getItem("anime"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "comics_image"
    document.getElementById("comics_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("comics" in localStorage && "comics1" in localStorage) {
            var img = document.createElement("img");
            img.id = "comics_image"+i;
            document.getElementById("comics_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("comics" in localStorage) {
            document.getElementById("comics_image").setAttribute("src", localStorage.getItem("comics"))
            document.getElementById("comics_image"+i).setAttribute("src", localStorage.getItem("comics"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "digital_art_image"
    document.getElementById("digital_art_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("digital_art" in localStorage && "digital_art1" in localStorage) {
            var img = document.createElement("img");
            img.id = "digital_art_image"+i;
            document.getElementById("digital_art_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("digital_art" in localStorage) {
            document.getElementById("digital_art_image").setAttribute("src", localStorage.getItem("digital_art"))
            document.getElementById("digital_art_image"+i).setAttribute("src", localStorage.getItem("digital_art"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "drawing_image"
    document.getElementById("drawing_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("drawing" in localStorage && "drawing1" in localStorage) {
            var img = document.createElement("img");
            img.id = "drawing_image"+i;
            document.getElementById("drawing_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("drawing" in localStorage) {
            document.getElementById("drawing_image").setAttribute("src", localStorage.getItem("drawing"))
            document.getElementById("drawing_image"+i).setAttribute("src", localStorage.getItem("drawing"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "landscape_image"
    document.getElementById("landscape_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("landscape" in localStorage && "landscape1" in localStorage) {
            var img = document.createElement("img");
            img.id = "landscape_image"+i;
            document.getElementById("landscape_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("landscape" in localStorage) {
            document.getElementById("landscape_image").setAttribute("src", localStorage.getItem("landscape"))
            document.getElementById("landscape_image"+i).setAttribute("src", localStorage.getItem("landscape"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "nature_image"
    document.getElementById("nature_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("nature" in localStorage && "nature1" in localStorage) {
            var img = document.createElement("img");
            img.id = "nature_image"+i;
            document.getElementById("nature_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("nature" in localStorage) {
            document.getElementById("nature_image").setAttribute("src", localStorage.getItem("nature"))
            document.getElementById("nature_image"+i).setAttribute("src", localStorage.getItem("nature"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "photography_image"
    document.getElementById("photography_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("photography" in localStorage && "photography1" in localStorage) {
            var img = document.createElement("img");
            img.id = "photography_image"+i;
            document.getElementById("photography_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("photography" in localStorage) {
            document.getElementById("photography_image").setAttribute("src", localStorage.getItem("photography"))
            document.getElementById("photography_image"+i).setAttribute("src", localStorage.getItem("photography"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "pixel_art_image"
    document.getElementById("pixel_art_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("pixel_art" in localStorage && "pixel_art1" in localStorage) {
            var img = document.createElement("img");
            img.id = "pixel_art_image"+i;
            document.getElementById("pixel_art_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("pixel_art" in localStorage) {
            document.getElementById("pixel_art_image").setAttribute("src", localStorage.getItem("pixel_art"))
            document.getElementById("pixel_art_image"+i).setAttribute("src", localStorage.getItem("pixel_art"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "sculpture_image"
    document.getElementById("sculpture_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("sculpture" in localStorage && "sculpture1" in localStorage) {
            var img = document.createElement("img");
            img.id = "sculpture_image"+i;
            document.getElementById("sculpture_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("sculpture" in localStorage) {
            document.getElementById("sculpture_image").setAttribute("src", localStorage.getItem("sculpture"))
            document.getElementById("sculpture_image"+i).setAttribute("src", localStorage.getItem("sculpture"+i))
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var img = document.createElement("img")
    img.id = "other_image"
    document.getElementById("other_images").appendChild(img)
    for (var i = 1; i < localStorage.length; i++) {
        if ("other" in localStorage && "other1" in localStorage) {
            var img = document.createElement("img");
            img.id = "other_image"+i;
            document.getElementById("other_images").appendChild(img);
        }
    }
    for (let i=1; i<localStorage.length; i++) {
        if ("other" in localStorage) {
            document.getElementById("other_image").setAttribute("src", localStorage.getItem("other"))
            document.getElementById("other_image"+i).setAttribute("src", localStorage.getItem("other"+i))
        }
    }
});