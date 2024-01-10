let Button = document.getElementById("item-add");
let ulElmt = document.querySelector('.list-unstyled');
let result = document.getElementById('result');

let expenses = [];
let total = 0;
function renderExpenses(){

    let html = "";
    expenses.forEach(expense =>{
        html += `<li class="shadow-lg">
                    <span class="d-flex justify-content-between align-items-center">
                        <p>${expense.expenses}</p> <p>$${expense.prices}</p><button class="btn btn-danger fw-bold">Del</button>
                    </span>
                </li>`;
            });
            ulElmt.innerHTML = html;
            result.innerText = `Total Expenses: $${total}`;
}
function addExpenses(){
    let description = prompt("Product you wanna bought");
    let amount = parseFloat(prompt("price of the product"));
    if(description && amount)
    {
        const expense = {
            expenses :description,
            prices : amount
        };

        expenses.push(expense);
        total += amount;
        renderExpenses();
    }
}
function deleteExpenses(index){
    total -= expenses[index].amount;
    expenses.splice(index,1)
    renderExpenses();
}
ulElmt.addEventListener('click',function(event){
    if(event.target.classList.contains("btn-danger")){
        let index = Array.from(event.target.parentNode.parentNode.children)
        .indexOf(event.target.parentNode);
        deleteExpenses(index)
    }
})

Button.addEventListener('click',function(){
    addExpenses()
})



