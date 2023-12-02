let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currmode = "light";

modebtn.addEventListener ("click", ()=>{
    if (currmode === "light"){
        currmode= "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currmode= "light";
        body.classList.add("light");
        
        body.classList.remove("dark");
    }

    console.log(currmode);
})


let box1 = document.querySelector(".box-1");
let box2 = document.querySelector(".box-2");
let box3 = document.querySelector(".box-3");

box1.addEventListener("mouseover", (e)=>{
    e.target.style.backgroundColor = "blue";

    setTimeout(()=>{
        e.target.style.backgroundColor = ""; },500)
    console.log("Mouseover on box 1");
});


box2.addEventListener("mouseover", (e)=>{
    e.target.style.backgroundColor = "yellow";

    setTimeout(()=>{
        e.target.style.backgroundColor = ""; },500)
    console.log("Mouseover on box 2");
});

box3.addEventListener("mouseover", (e)=>{
    e.target.style.backgroundColor = "green";

    setTimeout(()=>{
        e.target.style.backgroundColor = ""; },500)
    console.log("Mouseover on box 3");
});

