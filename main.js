class  Pokemon1{
  constructor(name, Hp, attack, defense, abilitiee){
    this.name = name;
    this.Hp = Hp;
    this.attack = attack;
    this.defense = defense;
    this.abilitiee= abilitiee;
  }
}
axios.get("https://fizal.me/pokeapi/api/v2/name/groudon.json")
  .then(response => { 

    let resp = response.data;
    let pokemon1 = new Pokemon1(

          resp.forms[0].name,
          resp.stats[5].base_stat,
          resp.stats[4].base_stat,
          resp.stats[3].base_stat,
          resp.abilities[0].ability.name
        
    )
    let div = document.querySelector('.card-title');
    div.innerHTML = pokemon1.name;
    console.log(pokemon1);
    
    let hp = document.querySelector('.card-text');
    hp.innerHTML += `<li> HP: ${pokemon1.Hp} </li>`

    let att = document.querySelector('.card-text');
    att.innerHTML += `<li> Attack: ${pokemon1.attack} </li> `

    let def = document.querySelector('.card-text');
    def.innerHTML += `<li> Defense: ${pokemon1.defense} </li> `

    let abb = document.querySelector('.card-text');
    abb.innerHTML += `<li> Abilities: ${pokemon1.abilitiee} </li>`


  });


 
  
