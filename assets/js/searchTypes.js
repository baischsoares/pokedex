let types = [];

function searchTypesCreate(){
  const url = 'https://pokeapi.co/api/v2/type/'

    return fetch(url)
        .then((response) => response.json())
        .then((r) => r.results)
        .then(r => r.map(pokeApi.getPokemonType))
}

searchTypesCreate()

pokeApi.getPokemonType = (tipo) => {
  crateList(tipo)
}

function crateList(tipo){
  let lista = document.querySelector('.searchType');
  const li = document.createElement('li')
  li.addEventListener('click', searchPokemonType)
  li.classList.add('typeItem')
  li.classList.add(tipo.name)
  li.setAttribute('data-type', tipo.name)
  li.innerText = `${tipo.name}`
  lista.appendChild(li)
}

function searchPokemonType(){
  const data = this.getAttribute('data-type')
  const url = `https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`
  return fetch(url)
        .then((response) => response.json())
        .then((r) => r.results)
        .then((pokemons) => console.log(pokemons))
}