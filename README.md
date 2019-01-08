# Pokedex

# My favorite Project 


## Object-oriented programming  and AJAX

```javascript

class  Pokemon{
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
    let pokemon1 = new Pokemon(

          resp.forms[0].name,
          resp.stats[5].base_stat,
          resp.stats[4].base_stat,
          resp.stats[3].base_stat,
          resp.abilities[0].ability.name
        
    )
```

## Description
My Pokedex project is an electronice device that provides information regarding the various species of Pokemon featured
in the Pokemon game and series. The code above uses a class to define the blueprint for the Pokedex I am modeling.
It utilizies objects, methods, this and dot syntax.






