function palendrome()
{
var palen = document.getElementById("palendrome").value; 
alert(palen)

var splitPalen = palen.split("");
alert ("split " + splitPalen);
var revPalen = splitPalen.reverse("");
alert ("reversed " + revPalen);
var joinPalen = revPalen.join("");
alert ("backwards String " + joinPalen);


if (palen == joinPalen)
{
    alert("This is a palendrome!");
}
}