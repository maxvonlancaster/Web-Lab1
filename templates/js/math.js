function multi() {
    let num1, num2, result, result2;
    if(isNaN(num1)){
        console.log("hello world");
    }
    num1 = document.getElementById('inp_1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('inp_2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById('result_multi').innerHTML = result;
    result2 = num1 + num2
    document.getElementById('result_sum').innerHTML = result2;
}