// Check if any required field is empty or null
function manageData() {
    // Retrieve values from input fields
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;

    // If any field is empty or null, display an error message and return false
    if (name == '' || age == '' || address == '' || email == '' || name == null || age == null || address == null || email == null) {
        // Display an error message
        document.getElementById('msg').innerHTML = "Please fill all data";
        // Return false to indicate data is not valid
        return false;
    }
    // Data is valid, return true
    return true;
}

// Display data from localStorage on the webpage
function showData() {
    // Retrieve the 'peopleList' array from localStorage
    let peopleList;
    if (localStorage.getItem('peopleList') == null) {
        // If 'peopleList' doesn't exist in localStorage, initialize it as an empty array
        peopleList = [];
    } else {
        // If 'peopleList' exists in localStorage, parse and retrieve its content
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }

    let html = "";
    // Iterate through each person in 'peopleList'
    peopleList.forEach(function (element, index) {
        // Generate HTML for each person's data and buttons
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html +=
            '<td><button onclick="deleteData(' + index +
            ')" class="btn" style="background-color:red;">Delete</button><button onclick="editData(' +
            index + ')" class="btn" style="background-color:green;">Edit</button></td>';
        html += "</tr>";
    });

    // Update the HTML content of the table with the generated HTML
    document.querySelector('#crudTable').innerHTML = html;
}

// Load and display data when the document or page loads
document.onload = showData();

// Add data to localStorage
function AddData() {
    if (manageData() == true) {
        // Retrieve input values
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;

        let peopleList;
        if (localStorage.getItem('peopleList') == null) {
            // If 'peopleList' doesn't exist in localStorage, initialize it as an empty array
            peopleList = [];
        } else {
            // If 'peopleList' exists in localStorage, parse and retrieve its content
            peopleList = JSON.parse(localStorage.getItem('peopleList'));
        }

        // Add new person's data to the array
        peopleList.push({
            name: name,
            age: age,
            address: address,
            email: email,
        });

        // Update localStorage with the modified 'peopleList' and display updated data
        localStorage.setItem('peopleList', JSON.stringify(peopleList));
        showData();

        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";
    }
}

// Delete data from localStorage
function deleteData(index) {
    // Retrieve the current 'peopleList' from localStorage
    let peopleList;
    if (localStorage.getItem('peopleList') == null) {
        // If 'peopleList' doesn't exist in localStorage, initialize it as an empty array
        peopleList = [];
    } else {
        // If 'peopleList' exists in localStorage, parse and retrieve its content
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }

    // Remove person at the specified index
    peopleList.splice(index, 1);

    // Update localStorage with the modified 'peopleList' and display updated data
    localStorage.setItem('peopleList', JSON.stringify(peopleList));
    showData();
}

// Edit existing data
function editData(index) {
    // Hide submit button and show edit button
    document.getElementById("submit").style.display = "none";
    document.getElementById("edit").style.display = "block";

    let peopleList;
    if (localStorage.getItem('peopleList') == null) {
        // If 'peopleList' doesn't exist in localStorage, initialize it as an empty array
        peopleList = [];
    } else {
        // If 'peopleList' exists in localStorage, parse and retrieve its content
        peopleList = JSON.parse(localStorage.getItem('peopleList'));
    }

    // Populate input fields with existing data
    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].email;

    // Update data on edit
    document.querySelector('#edit').onclick = function () {
        if (manageData() == true) {
            // Update person's data in the array
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].age = document.getElementById("age").value;
            peopleList[index].address = document.getElementById("address").value;
            peopleList[index].email = document.getElementById("email").value;
        }

        // Update localStorage with the modified 'peopleList' and display updated data
        localStorage.setItem('peopleList', JSON.stringify(peopleList));
        showData();

        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("address").value = "";
        document.getElementById("email").value = "";

        // Show submit button and hide edit button
        document.getElementById("submit").style.display = "block";
        document.getElementById("edit").style.display = "none";
    }
}
