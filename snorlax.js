

let abilitiee = []


axios.get("https://fizal.me/pokeapi/api/v2/name/snorlax.json")
.then(response => {

  let resp = response.data
  let snorlax = new Pokemon(

    resp.forms[0].name,
      resp.stats[5].base_stat,
      resp.stats[4].base_stat,
      resp.stats[3].base_stat,
      abilitiee

  )
  for(i = 0; i < resp.abilities.length; i++){
      
    abilitiee.push(resp.abilities[i].ability.name)
  }
  
  
  let div = document.querySelector('.card-title');
    div.innerHTML = snorlax.name;

    let hp = document.querySelector('.card-text');
    hp.innerHTML += `<li> HP: ${snorlax.Hp} </li>`

    let att = document.querySelector('.card-text');
    att.innerHTML += `<li> Attack: ${snorlax.attack} </li> `

    let def = document.querySelector('.card-text');
    def.innerHTML += `<li> Defense: ${snorlax.defense} </li> `

    let abb = document.querySelector('.card-text');
    abb.innerHTML += `<li> Abilities: ${snorlax.abilitiee} </li>`
  
  
  
});