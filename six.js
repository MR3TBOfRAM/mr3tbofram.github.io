var toggled = false;
var IntervalTime = 500;

function Generate()
{
    var rando = Math.floor(Math.random() * 10000) + 0;
    document.getElementById("PMain").innerHTML = (rando);
}
function AutoGen()
{
toggled = !toggled;
switch(toggled)
{
    case "true":
        clearInterval(Auto);
        document.getElementById("plus").style.visibility = "hidden";
        document.getElementById("minus").style.visibility = "hidden";
        document.getElementById("AutoGen").style.backgroundColor = "#b4009c";
        break;
    case "false":
        Auto = setInterval(Generate,IntervalTime);
        document.getElementById("plus").style.visibility = "visible";
        document.getElementById("minus").style.visibility = "visible";
        document.getElementById("AutoGen").style.backgroundColor = "#ff7afb";
        break;
}

function plus()
{
    if(IntervalTime >= 200)
    {
        IntervalTime -= 100;
        clearInterval(Auto);
        Auto = setInterval(Generate,IntervalTime);
        
    }
    if(IntervalTime == 100)
    {
        document.getElementById("plus").disabled = true;
        document.getElementById("plus").style.color = "#7d7d7d";
        document.getElementById("plus").style.backgroundColor = "#6b005d";
    }
    document.getElementById("minus").disabled = false;
    document.getElementById("minus").style.color = "#ffffff";
    document.getElementById("minus").style.backgroundColor = "#b4009c";  
}
function minus()
{
    if(IntervalTime <= 400)
    {
        IntervalTime += 100;
        clearInterval(Auto);
        Auto = setInterval(Generate,IntervalTime);
        
    }
    if(IntervalTime == 500)
    {
        document.getElementById("minus").disabled = true;
        document.getElementById("minus").style.color = "#7d7d7d";
        document.getElementById("minus").style.backgroundColor = "#6b005d";
    }
    document.getElementById("plus").disabled = false;
    document.getElementById("plus").style.color = "#ffffff";
    document.getElementById("plus").style.backgroundColor = "#b4009c";
}
