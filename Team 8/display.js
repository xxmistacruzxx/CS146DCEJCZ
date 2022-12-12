document.addEventListener("DOMContentLoaded", () => {
    var categories = ["3D", "anime", "comics", "digital_art", "drawing", "landscape", "nature", "photography", "pixel_art", "sculpture", "other"]
    var category = "other"

    var added = false;
    for (var i = 0; i < categories.length; i++) {
        // console.log("CHECKING " + categories[i])
        console.log(categories[i]);
        if (document.getElementById(categories[i] + "_images") != null) {
            category = categories[i];
            console.log("BEGINNING EXECUTION")
            cond = 0;
            count = 0;
            var div = document.getElementById(categories[i] + "_images")
            while (cond == 0) {
                if ((categories[i] + count.toString()) in localStorage) {
                    console.log("ADDING IMAGE: " + count)
                    var img = document.createElement("img");
                    img.id = categories[i] + count;
                    img.className = "uImg";
                    div.appendChild(img);
                    img.setAttribute("src", localStorage.getItem(categories[i] + count.toString()))
                    count++;
                    added = true;
                } else {
                    cond = 1;
                    console.log("DONE ADDING")
                }
            }
        }
    }

    if (!added) {
        var elem = document.createElement("h3");
        elem.id = "noImgsFound";
        elem.textContent = "No images have been uploaded to this category.";
        document.getElementById("notFound").appendChild(elem);
    }
});
