
let abilitiee = []

axios.get("https://fizal.me/pokeapi/api/v2/id/250.json")
.then(response => {

    let resp = response.data;
    let ho_oh = new Pokemon(

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
    div.innerHTML = ho_oh.name;
   

    let hp = document.querySelector('.card-text');
    hp.innerHTML += `<li> HP: ${ho_oh.Hp} </li>`

    let att = document.querySelector('.card-text');
    att.innerHTML += `<li> Attack: ${ho_oh.attack} </li> `

    let def = document.querySelector('.card-text');
    def.innerHTML += `<li> Defense: ${ho_oh.defense} </li> `

    let abb = document.querySelector('.card-text');
    abb.innerHTML += `<li> Abilities: ${ho_oh.abilitiee} </li>`





    




    })

