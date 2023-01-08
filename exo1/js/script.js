// recuperation du conteneur showSelectElement
let showSelectElement = document.getElementsByClassName('showSelectElement')[0]


// recuperation du div id : genres
let genres = document.getElementById('genres')


// recuperation de la valeur selectionné
genres.onchange = (event) =>{
   showSelectElement.textContent = `la valeur selectionnée est ${event.target.value}`
}