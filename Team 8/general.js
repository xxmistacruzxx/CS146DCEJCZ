var pic = document.querySelectorAll("nav ul li a");
console.log(pic)
for (var i = 0; i < pic.length; i++) {
    var nav = pic[i];
    pic[i].addEventListener("mouseover", (event) => {
        event.target.style.color = "#2b1055";
        event.target.style.background = "#fff";
    })
    pic[i].addEventListener("mouseout", (event) => {
        event.target.style.color = "";
        event.target.style.background = "";
    })
}

