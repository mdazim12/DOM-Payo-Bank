
    document.getElementById('btn-cash-out').addEventListener('click',function(event){
        event.preventDefault();
        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cashout-pin');
        console.log('cashout button clicked', cashOut, pinNumber);
    })