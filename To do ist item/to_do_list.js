let food_title = [
    { food_name: "Hussain Akhter", food_description: "tis food is super food",  img_url: "images.jpeg" }
    
];


  function add(){
  let food_name=document.getElementById("title").value;
  let food_description=document.getElementById("description").value;
  let img_url=document.getElementById("img_url").value;

  let a={
    food_name:food_name,
    food_description : food_description,
    img_url:img_url
  }
  food_title.push(a)

  rendardcard();
  }



  function rendardcard(){
    let ihtml = "";

  for(let i of food_title) {
      ihtml += `
      <div class="card" style="width: 18rem;">
          <img src="${i.img_url}" class="card-img-top" alt="Food image">
          <div class="card-body">
              <h5 class="card-title">${i.food_name}</h5>
              <p class="card-text">${i.food_description}</p>
              <a href="#"  class="btn btn-primary">More info</a>
          </div>
      </div>`;
  }
  
  document.getElementById("box1").innerHTML = ihtml;  
  }
