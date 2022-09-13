function Click(){
    var inputBill = document.querySelector(".bill");
    var bill = Number(inputBill.value);
    

    var inputTip = document.querySelector(".tip");
    var tip = Number(inputTip.value);
    console.log(bill, tip)

    var totalBill = bill  + (tip/100)*bill;

    var h1 = document.querySelectorAll("h1")[1];
    var span = h1.querySelector("span");
    span.innerText = "$"+totalBill + " with a tip of $" + ((tip/100)*bill);
}