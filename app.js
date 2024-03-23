const btn = document.querySelector("form");

btn.addEventListener("submit", (evt) => {
    // console.log("Hello")
    evt.preventDefault();
    const h = parseInt(document.querySelector("#h").value);
    const w = parseInt(document.querySelector("#w").value);
    const result = document.querySelector("#result");
    
    if(w === "" || w <= 0 || w > 1000 && h === "" || h <= 0 || h>1000)
    {
        result.innerText = "Please enter valid weight and height";

    }
    else if(w === "" || w <= 0 || w > 1000)
    {
        result.innerText = "Please enter valid weight";
    }
    else if(h === "" || h <= 0 || h>1000)
    {
        result.innerText = "Please enter valid height";
    }
    else
    {
        let bmi = (w / ((h*h)/10000)).toFixed(2); 
        result.innerText = bmi;
    }

})