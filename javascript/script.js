
let black = document.getElementById("span1");

black.addEventListener("click" , function (){

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("firstrow").style.backgroundColor = "black"; 
    document.getElementById("navbarside").style.color = "white";
    let bars = document.getElementsByClassName("menuside");
    let convert = Array.from(bars);
    convert.forEach((elm)=>{
        elm.style.color = "white";
    });
    document.getElementById("firstrow").style.boxShadow = "0px 0px 10px 0px gray";
    let per = document.getElementsByClassName("persons");
    let trans = Array.from(per)
    trans.forEach((input)=>{
        input.style.boxShadow= "0px 0px 7px 0px gray";
    });
    document.getElementById("buttonsubmit").style.boxShadow = "0px 0px 7px 0px gray";
    document.getElementById("footerdiv").style.boxShadow = "0px 0px 10px 0px gray";

});

let white = document.getElementById("span2");

white.addEventListener("click" , function (){
    
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("firstrow").style.backgroundColor = "white"; 
    document.getElementById("navbarside").style.color = "black";
    let bars = document.getElementsByClassName("menuside");
    let convert = Array.from(bars);
    convert.forEach((elm)=>{
        elm.style.color = "black";
    });
    document.getElementById("firstrow").style.boxShadow = "0px 0px 10px 0px gray";
    let per = document.getElementsByClassName("persons");
    let trans = Array.from(per)
    trans.forEach((input)=>{
        input.style.boxShadow= "0px 0px 4px 0px gray";
    });
    document.getElementById("buttonsubmit").style.boxShadow = "none";
    document.getElementById("footerdiv").style.boxShadow = "none";

});