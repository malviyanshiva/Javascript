var count=5;
function addrow(){
    document.getElementById("table");
    var row=table.insertRow(-1);
    var a=row.insertCell(0);
    var b=row.insertCell(1);
    a.innerHTML= "new CELL"+count;
    count++;
    b.innerHTML= "new CELL"+count;
    count++;
}
function delrow(){
    if(count<=1){
        alert("No row left to delete")
    }
    else{
        var a=document.getElementById("table");
        a.deleteRow(-1);
        count-=2;
    }
}
var change=0;
function changebackground(){
    if(change%2==0){
        document.body.style.backgroundImage = "url('https://picsum.photos/1536/1000')";
    }
    else{
        document.body.style.backgroundImage = "url('https://picsum.photos/1536/1001')";
    }
    change++;
}