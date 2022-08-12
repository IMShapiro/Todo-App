const input = document.querySelector("input");
const addItemBtn = document.querySelector(".add-item-button");
const list = document.querySelector(".list");
const listContainer = document.querySelector(".list-container");

addItemBtn.addEventListener("click",()=>{
    if(input.value){
        const item = input.value;
        const newItem = document.createElement("li");
        newItem.innerHTML = `<button>X</button>${item}`;
        list.appendChild(newItem);
    }
    input.value = ""
})

input.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        if(input.value){
            const item = input.value;
            const newItem = document.createElement("li");
            newItem.innerHTML = `<button>X</button>${item}`;
            list.appendChild(newItem);
        }
        input.value = ""
    }
})

list.style.display = "block";
list.addEventListener("click",(e)=>{
    
    if(e.target.classList != "checked"){
        e.target.classList = "checked"
    }
    else{
        e.target.classList = ""
    }

    if(e.target.type == "submit"){
        e.target.parentElement.style.display = "none"
        console.log(e.target.parentElement);
    }
    
    console.log(e.target);
})