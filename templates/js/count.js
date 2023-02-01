function count() {
    let str, result;
    str = document.getElementById("inp_1").value;

    result = str.length;
    document.getElementById('result_count').innerHTML = result;
}