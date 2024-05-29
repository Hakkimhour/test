var id = 1;
var selected_name = "";
var selected_phone = "";
var selected_email = "";
//Date Block
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
var minutes = date.getMinutes();

function save_btn(){
    if(document.getElementById("save_btn").textContent === "Update"){
        var update_name  = document.querySelector(`td[data-name="${selected_name}"`);
        var update_phone = document.querySelector(`td[data-phone="${selected_phone}"`);
        var update_email = document.querySelector(`td[data-email="${selected_email}"`);
        
        update_name.textContent = document.getElementById("name").value;
        update_phone.textContent = document.getElementById("phone-number").value;
        update_email.textContent = document.getElementById("email").value;

        document.getElementById("save_btn").textContent = "Save";

        //Clear data
        document.getElementById("name").value = "";
        document.getElementById("phone-number").value = "";
        document.getElementById("email").value = "";
    }else{
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone-number").value;
        var email = document.getElementById("email").value;

        if(name === "" || phone === "" || email === ""){
            alert("You're not Input the Fill");
        }else{
            var tr = document.createElement('tr');

            //Table document block
            var th = document.createElement('th');
            var td_name = document.createElement('td');
            var td_phone = document.createElement('td');
            var td_email = document.createElement('td');
            var td_date = document.createElement('td');
            var td_button = document.createElement('td');

            //Button Block
            var td_update = document.createElement('td');
            var td_delete = document.createElement('td');

            tr.appendChild(th);
            tr.appendChild(td_name);
            tr.appendChild(td_phone);
            tr.appendChild(td_email);
            tr.appendChild(td_date);
            tr.appendChild(td_button);
            td_button.appendChild(td_update);
            td_button.appendChild(td_delete);

            th.textContent = id;
            td_name.textContent = name;
            td_phone.textContent = phone;
            td_email.textContent = email;
            td_date.textContent = day+"/"+month+"/"+year+" "+hour+":"+minutes;
            td_update.innerHTML = '<Button class="btn-update" onclick="update(this)">Update</Button>';
            td_delete.innerHTML = '<Button class="btn-delete" onclick="deletes(this)">Delete</Button>';

            document.getElementById("tbody").appendChild(tr);
            console.log(document.getElementById("tbody").appendChild(tr));
            id++;

            //Data value
            td_name.dataset.name = name;
            td_phone.dataset.phone = phone;
            td_email.dataset.email = email;

            //Clear data
            document.getElementById("name").value = "";
            document.getElementById("phone-number").value = "";
            document.getElementById("email").value = "";
        }
    }
}

function deletes(object){
    object.parentElement.parentElement.parentElement.remove();
    if(document.getElementById("save_btn").textContent === "Update"){
        document.getElementById("save_btn").textContent = "Save";
    }

    //Clear data
    document.getElementById("name").value = "";
    document.getElementById("phone-number").value = "";
    document.getElementById("email").value = "";
}

function update(object){
    var update_btn = document.getElementById("save_btn"); 
    update_btn.textContent = "Update";

    var td_name  = object.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    var td_phone = object.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
    var td_email = object.parentElement.parentElement.previousElementSibling.previousElementSibling;

    var name  = td_name.getAttribute("data-name");
    var phone = td_phone.getAttribute("data-phone");
    var email = td_email.getAttribute("data-email");

    //Change the Selected Name
    selected_name = name;
    selected_phone = phone;
    selected_email = email;

    //Set new data
    var setName  = document.querySelector(`td[data-name="${selected_name}"`).textContent;
    var setPhone = document.querySelector(`td[data-phone="${selected_phone}"`).textContent;
    var setEmail = document.querySelector(`td[data-email="${selected_email}"`).textContent;

    //Set data into Input
    document.getElementById("name").value = setName;
    document.getElementById("phone-number").value = setPhone;
    document.getElementById("email").value = setEmail;
}