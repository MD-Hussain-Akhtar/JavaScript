let submit=document.getElementById("submit");
submit.addEventListener("click",()=>{
    alert("submit form")
})

let show=document.getElementById("show");
show.addEventListener("click",()=>{
    let pass=document.getElementById("pass");
    if(pass.type==="password"){
        pass.type="text";
        
    }
    else{
        pass.type="password";
    }
})