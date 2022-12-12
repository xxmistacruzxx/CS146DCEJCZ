document.querySelector("#image").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        var category = "other";
        if (document.getElementById("3D").checked == true)
            category = "3D";
        else if (document.getElementById("anime").checked == true)
            category = "anime";
        else if (document.getElementById("comics").checked == true)
            category = "comics";
        else if (document.getElementById("digital_art").checked == true)
            category = "digital_art";
        else if (document.getElementById("drawing").checked == true)
            category = "drawing";
        else if (document.getElementById("landscape").checked == true)
            category = "landscape";
        else if (document.getElementById("nature").checked == true)
            category = "nature";
        else if (document.getElementById("photography").checked == true)
            category = "photography";
        else if (document.getElementById("pixel_art").checked == true)
            category = "pixel_art";
        else if (document.getElementById("sculpture").checked == true)
            category = "sculpture";
        else if (document.getElementById("other").checked == true) {
            category = "other";
        }

        count = 0;
        cond = 0;
        while (cond == 0) {
            if (category + count.toString() in localStorage) {
                console.log("IMAGE " + count.toString() + " FOUND! Skipping...")
                count++;
            } else {
                console.log("ADDING IMAGE TO LOCALSTORAGE")
                localStorage.setItem(category + count.toString(), reader.result);
                cond = 1;
            }
        }
    });

    reader.readAsDataURL(this.files[0]);
    document.getElementById("msg").removeAttribute("hidden");
});
