let costValue = document.getElementById('cost');
let tipValue = document.getElementById('tip');
let calculate = document.querySelector('.btn');
let result = document.getElementById('result');

calculate.addEventListener('click',function(){
    let cost= parseFloat(costValue.value);
    let tipPercentage=parseFloat(tipValue.value);
    if(!isFinite(cost) || !isFinite(tipPercentage)){
        alert("Please enter a valid number");
        return false;
        }else{
            let tipAmount=parseFloat((cost * (tipPercentage/100)).toFixed(2));
            let totalCost=(cost + tipAmount);
            //displaying the results
            result.innerHTML="Tip Amount: $"+tipAmount+"<br> Total Cost"
            + " including Tip: $"+totalCost;
            };
}) 