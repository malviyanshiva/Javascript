function fetch_data(){
    var input=document.getElementsByClassName('input_text')[0];
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=61096aeeb13ac69b5918538acbc5b777')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        tempValue=Number(tempValue-273.15).toFixed(2);
        document.getElementById('name').innerHTML = nameValue;
        document.getElementsByClassName('desc')[0].innerHTML = "Description - "+descValue;
        document.getElementsByClassName('temp')[0].innerHTML= "Temp - "+tempValue+" &#8451;";
        input.value='';
    })

    .catch(err => alert("Wrong city name!"));
}