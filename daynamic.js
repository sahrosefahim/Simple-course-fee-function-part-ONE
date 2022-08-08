function calculatePart1(){
    let name =document.getElementById('name').value;
    document.getElementById('ShowName').innerHTML= 'Your Name is '+name;

    let cell =document.getElementById('cell').value;
    document.getElementById('ShowNumber').innerHTML= 'Your Number is '+cell;

    let email =document.getElementById('email').value;
    document.getElementById('ShowEmail').innerHTML= 'Your email is '+email;

    let takeAmount =document.getElementById('takeAmount').value;
    let installment =document.getElementById('installment').value;

    let parMonth=takeAmount/installment
    document.getElementById('ShowParMonthPay').innerHTML='You have to pay par month= '+parMonth
}