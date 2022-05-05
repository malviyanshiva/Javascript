function insert(num) 
    {
    var x=document.getElementById('result');
    x.value=x.value+num;
    }
function evaluate_result()
{
    var x=document.getElementById('result');
    x.value=eval(x.value);
}
function clear_result()
{
    document.getElementById('result').value=''
}