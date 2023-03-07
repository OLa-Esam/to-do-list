const container = document.querySelector("#container");
const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const trash = document.querySelector(".icon-trash");

container.addEventListener("click", (eo) =>
{
    
    if (eo.target.className=="icon-trash icon")
    {
      
        eo.target.parentElement.parentElement.remove();
        
    }
    else if (eo.target.className=="icon-sad icon")
    {eo.target.classList.add("dn");
    
    const heart=` <span class="icon-heart icon"></span>`;
 
        eo.target.parentElement.parentElement
            .getElementsByClassName("task-text")[0]
            .classList.add("finish");
      
      
     eo.target.parentElement.innerHTML+=heart; 
  }
    else if (eo.target.className=="icon-heart icon")
    {eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");

      eo.target.classList.add("dn");
    
    const sad=` <span class="icon-sad icon"></span>`;
 
     eo.target.parentElement.innerHTML+=sad; 
  }
    else if (eo.target.className=="icon-star icon")
    {
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement )
  }
    else if (eo.target.className=="icon-star icon orange")
    {
      eo.target.classList.remove("orange");
     
  }
  
  
});

form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const newtask = `
          <div class="task">

      <span class="icon-star icon"> </span>

     <p class="task-text">${input.value}</p>

   <div> 
     <span class="icon-trash icon"> </span>
 

     <span class="icon-sad icon">  </span>`;
  container.innerHTML+=newtask;
  input.value=""
});


