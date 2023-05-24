

a=5
b=10

console.log("Привет",a*b)
function myfunction()
{
	n = document.getElementById("in_name").value;
	a = document.getElementById("in_age").value;
	response = "Имя: " +" "+  n +" "+  "Возраст: " + a
	alert(response)
t = document.getElementById("mytable")
var row = t.insertRow(3);
var c_name = row.insertCell(0);
var c_photo = row.insertCell(1);
var c_task = row.insertCell(2);
c_name.innerHTML = n;
c_photo.innerHTML = '<img src="./Leha.png" width="200">'
c_task.innerHTML = "Сотрудник"
}

