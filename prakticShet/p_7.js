// var li=document.getElementsByTagName("li");
// li[0].style.color="red"


// if we can all element one time operaction perfome we can use for each loop for example;

Array.from(document.getElementsByTagName("li")).forEach((element)=>{
element.style.color="green"
})

