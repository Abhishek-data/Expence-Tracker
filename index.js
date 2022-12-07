
function saveTolocalstorage(event){
    event.preventDefault()
    const amount = event.target.amount.value;
    const description = event.target.description.value;
    const category = event.target.category.value;

    const obj = {
        amount,
        description,
        category
    }
    localStorage.setItem(obj.category, JSON.stringify(obj))
    showExpenceOnScreen(obj)
}

window.addEventListener("DOMContentLoaded", () =>{
    const localStorageobj = localStorage;
    const localStoragekeys = Object.keys(localStorageobj);
    for(let i=0; i<localStoragekeys.length; i++) {
        const key = localStoragekeys[i];
        const expenceDetailsstring = localStorageobj[key];
        const expenceDetailobj = JSON.parse(expenceDetailsstring);
        showExpenceOnScreen(expenceDetailobj)
    }
})

function showExpenceOnScreen(expence){
    const parentNode = document.getElementById("expenceList")
    const childHtml = `<li id=${expence.category}>${expence.amount}-
    ${expence.description}-${expence.category}
    <button onclick=editExpence('${expence.category}','${expence.amount}','${expence.description}')>Edit Expence</button>
    <button onclick=deleteExpence('${expence.category}')>Delete Expence</button>
    </li>`
    parentNode.innerHTML += childHtml
}

function deleteExpence(category){
    const parentNode = document.getElementById("expenceList");
    const childNodeToBeDeleted = document.getElementById(category);
    parentNode.removeChild(childNodeToBeDeleted)
    localStorage.removeItem(category)
}


console.log(amount, category, description)
function editExpence(category, amount, description){
    document.getElementById("category").value = category
    document.getElementById("amount").value = amount
    document.getElementById("description").value = description
    deleteExpence(category)
}



