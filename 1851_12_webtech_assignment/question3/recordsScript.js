var row = 1;
var roll_no_array = new Array(20);
var regName = /^[a-zA-Z\ ]+$/;

function fetch() {	

  var roll = document.getElementById("roll_no").value;
  var name = document.getElementById("name").value;
  var gender;
    if (document.getElementById('m').checked) {
      gender = document.getElementById('m').value;
    }
    if (document.getElementById('f').checked) {
      gender = document.getElementById('f').value;
    }
    if (document.getElementById('o').checked) {
      gender = document.getElementById('o').value;
    }

  var e = document.getElementById("sem");
  var sem = e.options[e.selectedIndex].value;

  var elective1,elective2,elective3;
  if (document.getElementById("ele1").checked == true){
    elective1=document.getElementById("ele1").value;
  }

  if (document.getElementById("ele2").checked == true){
  	elective2=document.getElementById("ele2").value;
  }
  if (document.getElementById("ele3").checked == true){
  	elective3=document.getElementById("ele3").value;
  }

  var i=0;
  var ele = new Array(3); 
  if(elective1!=""){
  		ele[i]=elective1;
  }
  else{
      ele[i]=null;
  }
  i++;
  if(elective2!=""){
  		ele[i]=elective2;
  }
  else{
    ele[i]=null;
  }
  i++
  if(elective3!=""){
  		ele[i]=elective3;
  }
  else{
      ele[i]=null;
  }

  if (!roll){
    alert("please enter your roll no");
    return;
  }
  else if (!name){
    alert("please your name");
    return;
  }
  else if (!gender){
    alert("please enter your gender");
    return;
  }
  else if (!sem){
    alert("please which semester you are in");
    return;
  }
  else if (roll_no_array.indexOf(roll)!==-1)
    {
      alert("Record with same Roll No Already Exist!...");
      return;
    }
  else if(!regName.test(name)){
    alert("Name can contain only letters")
    return;
  }  
  else{
    alert(roll + name + gender + sem + ele);
    var temp = document.createElement("p");
    temp.innerHTML = roll;
    document.getElementById("roll").appendChild(temp);

    var temp = document.createElement("p");
    temp.innerHTML = name;
    document.getElementById("naam").appendChild(temp);

    var temp = document.createElement("p");
    temp.innerHTML = gender;
    document.getElementById("ling").appendChild(temp);

    var temp = document.createElement("p");
    temp.innerHTML = sem;
    document.getElementById("semster").appendChild(temp);

    var temp = document.createElement("p");
    temp.innerHTML = ele;
    document.getElementById("el").appendChild(temp);
    /*
    roll_no_array[row-1]=roll;  
    var display=document.getElementById("display_area");

    var newRow=display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);
    var cell4=newRow.insertCell(3);
    var cell5=newRow.insertCell(4);

    cell1.innerHTML = roll;
    cell2.innerHTML = name;
    cell3.innerHTML = gender;
    cell4.innerHTML = sem;
    cell5.innerHTML = ele;

    row++;
    */
  }
}  