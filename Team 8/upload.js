var a=1,b=1,c=1,d=1,e=1,f=1,g=1,h=1,i=1,j=1,k=1;

document.querySelector("#image").addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        if (document.getElementById("3D").checked == true) { 
            if ("3D" in localStorage) {
                localStorage.setItem("3D"+a, reader.result);
                a+=1;
            }
            else {
                localStorage.setItem("3D", reader.result);
            }
        }
        else if (document.getElementById("anime").checked == true) { 
            if ("anime" in localStorage) {
                localStorage.setItem("anime"+b, reader.result);
                b+=1;
            }
            else {
                localStorage.setItem("anime", reader.result);
            }
        }
        else if (document.getElementById("comics").checked == true) { 
            if ("comics" in localStorage) {
                localStorage.setItem("comics"+c, reader.result);
                c+=1;
            }
            else {
                localStorage.setItem("comics", reader.result);
            }
        }
        else if (document.getElementById("digital_art").checked == true) { 
            if ("digital_art" in localStorage) {
                localStorage.setItem("digital_art"+d, reader.result);
                d+=1;
            }
            else {
                localStorage.setItem("digital_art", reader.result);
            }
        }
        else if (document.getElementById("drawing").checked == true) { 
            if ("drawing" in localStorage) {
                localStorage.setItem("drawing"+e, reader.result);
                e+=1;
            }
            else {
                localStorage.setItem("drawing", reader.result);
            }
        }
        else if (document.getElementById("landscape").checked == true) { 
            if ("landscape" in localStorage) {
                localStorage.setItem("landscape"+f, reader.result);
                f+=1;
            }
            else {
                localStorage.setItem("landscape", reader.result);
            }
        }
        else if (document.getElementById("nature").checked == true) { 
            if ("nature" in localStorage) {
                localStorage.setItem("nature"+g, reader.result);
                g+=1;
            }
            else {
                localStorage.setItem("nature", reader.result);
            }
        }
        else if (document.getElementById("photography").checked == true) { 
            if ("photography" in localStorage) {
                localStorage.setItem("photography"+h, reader.result);
                h+=1;
            }
            else {
                localStorage.setItem("photography", reader.result);
            }
        }
        else if (document.getElementById("pixel_art").checked == true) { 
            if ("pixel_art" in localStorage) {
                localStorage.setItem("pixel_art"+i, reader.result);
                i+=1;
            }
            else {
                localStorage.setItem("pixel_art", reader.result);
            }
        }
        else if (document.getElementById("sculpture").checked == true) { 
            if ("sculpture" in localStorage) {
                localStorage.setItem("sculpture"+j, reader.result);
                j+=1;
            }
            else {
                localStorage.setItem("sculpture", reader.result);
            }
        }
        else if (document.getElementById("other").checked == true) {
            if ("other" in localStorage) {
                localStorage.setItem("other"+k, reader.result);
                k+=1;
            }
            else {
                localStorage.setItem("other", reader.result);
            }
        }
    });
    reader.readAsDataURL(this.files[0]);
});
