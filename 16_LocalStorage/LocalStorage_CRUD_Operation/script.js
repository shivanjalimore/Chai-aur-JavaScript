// localStorage.clear();
function manageData()
{
    let name = document.getElementById("name").value ;
    let age = document.getElementById("age").value ;
    let address = document.getElementById("address").value ;
    let email = document.getElementById("email").value ;

    if(name=='' || age=='' || address=='' || email =='' || name == null || age==null || address==null || email ==null)
    {
        document.getElementById('msg').innerHTML="Please fill all data";
        return false;
    }
    return true;
}


function showData(){
    let peopleList;
    if(localStorage.getItem('peopleList') == null)
    {
        peopleList =[];
    }
    else
    {
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }

    let html="";
    peopleList.forEach(function(element,index){
        html += "<tr>";
        html += "<td>" + element.name +"</td>";
        html += "<td>" + element.age +"</td>";
        html += "<td>" + element.address +"</td>";
        html += "<td>" + element.email +"</td>";
        html += 
           '<td><button onclick="deleteData('+index+
           ')"class="btn" style="background-color:red;">Delete</button><button onclick="editData('
           +index+')"class="btn" style="background-color:green;">Edit</button></td>';
        html +="</tr>";
    });

    document.querySelector('#crudTable').innerHTML = html;

}

 //Load all data when document or page load
 document.onload = showData();

 //function to Add data to localStorage
 function AddData(){
    if(manageData() == true)
    {
        let name = document.getElementById("name").value ;
        let age = document.getElementById("age").value ;
        let address = document.getElementById("address").value ;
        let email = document.getElementById("email").value ;
    

    let peopleList;
    if(localStorage.getItem('peopleList') == null)
    {
        peopleList =[];
    }
    else
    {
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }
    peopleList.push(
        {
        name : name,
        age : age,
        address : address,
        email : email ,
        }
    );
    localStorage.setItem('peopleList',JSON.stringify(peopleList));
    showData();
 
       //clearing input
        document.getElementById("name").value = "" ;
        document.getElementById("age").value = "" ;
        document.getElementById("address").value = "" ;
        document.getElementById("email").value = "" ;

  }
 }

 //function to delete data from local Storage
function deleteData(index){

    let peopleList;
    if(localStorage.getItem('peopleList') == null)
    {
        peopleList =[];
    }
    else
    {
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }
    
    peopleList.splice(index,1);
    localStorage.setItem('peopleList',JSON.stringify(peopleList));
    showData();
 
}


//function to Edit data
function editData(index){
//submit button will hide and edit button will show up

document.getElementById("submit").style.display="none";
document.getElementById("edit").style.display="block";

let peopleList;
    if(localStorage.getItem('peopleList') == null)
    {
        peopleList =[];
    }
    else
    {
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }

    //to show present data 
    document.getElementById("name").value=peopleList[index].name;
    document.getElementById("age").value=peopleList[index].age;
    document.getElementById("address").value=peopleList[index].address;
    document.getElementById("email").value=peopleList[index].email;

    document.querySelector('#edit').onclick = function(){
        if(manageData() == true)
        {
           peopleList[index].name = document.getElementById("name").value
           peopleList[index].age = document.getElementById("age").value
           peopleList[index].address = document.getElementById("address").value
           peopleList[index].email = document.getElementById("email").value
        }
    

    localStorage.setItem('peopleList',JSON.stringify(peopleList));
    showData();
 
       //clearing input
        document.getElementById("name").value = "" ;
        document.getElementById("age").value = "" ;
        document.getElementById("address").value = "" ;
        document.getElementById("email").value = "" ;

        document.getElementById("submit").style.display="block";
        document.getElementById("edit").style.display="none";
    }
}