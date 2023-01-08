let shoppingList=[]

// recupeation du div root id 

let root = document.getElementById('root')

// création du formulaire
let domForm = document.createElement('form')

// creation d'un label
let label = document.createElement('label')
label.textContent = "Entrer votre produit"

// creation du input
let input = document.createElement('input')
input.type = 'text'

// creation du boutton d'ajout
let btnAdd = document.createElement('button')
btnAdd.textContent = 'Ajouter'
btnAdd.addEventListener('click' , function(event){
    event.preventDefault()
    addItem()
})

// creation du button de suppression
let btnDelete = document.createElement('button')
btnDelete.textContent = 'Vider mon panier'
btnDelete.style.backgroundColor = 'red'
btnDelete.addEventListener('click' , function(event){
    event.preventDefault()
    deleteItem()
})


// injection des differents element dans le DOM
domForm.appendChild(label)
domForm.appendChild(input)
domForm.appendChild(btnAdd)
domForm.appendChild(btnDelete)
root.appendChild(domForm)


// ajouter dans le tableau 
function addItem(){
    let inputValue = document.getElementsByTagName('input')[0]
    if(inputValue.value == ''){
        alert('veuillez renseigner une course')
    }else{
        shoppingList.push(inputValue.value)
        inputValue.value = ''
        console.log('----------- Produit dans le panier ---------------')
        console.log(shoppingList)
        console.log('--------------------------------------------------')
    }
}

// on vide le panier ici 
function deleteItem(){
    shoppingList = []
    console.log('----------- Produit vider ---------------')
    console.log(shoppingList)
    console.log('--------------------------------------------------')
}