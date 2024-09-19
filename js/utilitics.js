
    // function getInputFieldValueById(){
    //     const addMoney = document.getElementById('input-add-money').value;
    //     return addMoney;
    // }

    function getInputFieldValueById(id){
        const inputValue = document.getElementById(id).value;
        const inputValueNumber = parseFloat(inputValue);
        return inputValueNumber;
    }

    function getTextFieldById(id){
        const textValue = document.getElementById(id).innerText;
        const textNumber = parseFloat(textValue);
        return textNumber;
    }

    function showSectionById(id){
        document.getElementById('add-money-form').classList.add('hidden');
        document.getElementById('cashout-form').classList.add('hidden');
        document.getElementById('transation-section').classList.add('hidden');

        // SHOW THE SECTION WITH TEH PROVIDE ID AS A PARAMTER
        document.getElementById(id).classList.remove('hidden');
    }