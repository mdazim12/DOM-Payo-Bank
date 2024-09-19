
    document.getElementById('btn-add-money').addEventListener('click',function(event){
        event.preventDefault();
        
        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');
        
        if(pinNumber === 1234){
            const balance = getTextFieldById('account-balance');
            const newBalance = addMoney + balance;
            document.getElementById('account-balance').innerText = newBalance;

            //add to transation history

            const p = document.createElement('p');
            p.innerText = `Added : ${addMoney} TK. New Balance : ${newBalance}`;
            
            //show it on transation area using appped
            document.getElementById('transaction-container').appendChild(p);


        }
        else{
            alert('Wrong PIN Number');
        }
        
        
       
    })