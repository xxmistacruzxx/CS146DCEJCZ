var pic = document.querySelectorAll("#aboutsection li div img");
console.log(pic)
for (var i = 0; i < pic.length; i++) {
    var nav = pic[i];
    nav.addEventListener("click", (event) => {
        alert("Hi there!");
    })
}

