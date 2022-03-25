function tracker (){
    var closingbalance = document.getElementById('closingbalance');
    var showincome = document.getElementById('showincome');
    var showexpense = document.getElementById('showexpense');
    var description = document.getElementById('description').value;
    var enteredAmount = document.getElementById('enteredAmount').value;
    var transaction_trail = document.getElementById('transaction_trail');
    var makeRecord = document.createElement('div');
    makeRecord.setAttribute('id', 'statement')
    var statement = document.createTextNode(description + "------>"+ enteredAmount + "$");
    makeRecord.appendChild(statement);
    transaction_trail.appendChild(makeRecord);

    makeRecord.addEventListener('click', function(){this.remove(statement);})

    if (enteredAmount ==""){
        alert('Please enter an Income or an expense to continue.')
        makeRecord.remove(makeRecord);
    }
    else if (enteredAmount > 0 ){
        totalAmount = parseInt(closingbalance.innerHTML);
        finalBalance = totalAmount + parseInt(enteredAmount);
        closingbalance.innerHTML = finalBalance + " .00 $";
        showincome.innerHTML = finalBalance + ".00 $";
        document.getElementById("enteredAmount").value;
        document.createElement('h2');
    } else if(enteredAmount < 0)
    {
    
     closingbalance = parseInt(closingbalance.innerHTML);
      exp_balance = parseInt(showexpense.innerHTML)
     totalAmount = closingbalance + parseInt(enteredAmount);
     document.getElementById("showexpense").innerHTML = (exp_balance - enteredAmount)+ " .00 $";
     document.getElementById("closingbalance").innerHTML = totalAmount + " .00 $"
    }

    document.getElementById("enteredAmount").value = '';
    document.getElementById("description").value = '';

    window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
      });
}