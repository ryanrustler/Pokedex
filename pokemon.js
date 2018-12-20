let groudon = document.querySelector('#groudon1');

groudon.addEventListener('click', event =>{
  groudon.href= "groudon.html";
})

let ho_oh = document.querySelector('#HO-OH');
  ho_oh.addEventListener('click', event => {
    ho_oh.href ="hoho.html";
  })

  let snorlax = document.querySelector('#snorlax');
    snorlax.addEventListener('click', event => {
      snorlax.href ="snorlax.html";
    }) 
    

let pokeball = document.querySelector('#pokeball1');
  pokeball.addEventListener('click', event =>{
    event.preventDefault();
    let pokemon1 = document.querySelector('#groudon1');
      pokemon1.style.opacity = 1;
    
   } )    

  let pokeball2 = document.querySelector('#pokeball2');
  pokeball2.addEventListener('click', event =>{
    event.preventDefault();
    let pokemon2 = document.querySelector('#HO-OH');
      pokemon2.style.opacity = 1;
    
  } )    

  let pokeball3 = document.querySelector('#pokeball3');
  pokeball3.addEventListener('click', event =>{
    event.preventDefault();
    let pokemon3 = document.querySelector('#snorlax');
      pokemon3.style.opacity= 1;
    
  } )    