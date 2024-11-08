document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

   
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === "aman" && password === "aman") {
       
        document.querySelector(".login-container").style.display = "none";
        document.querySelector(".user-list-container").style.display = "block";

       
        populateUserList();
    } else {
        alert("Invalid username or password!");
    }
});

function populateUserList() {
    const userList = [
        "ankit singh",
        "ansh verma",
        "vaishnavi",
        "salil singh",
        "aditya singh",
        "shalini singh",
        "Nana patekar",
        "salman khan ",
        "ramu kaka",
        "tehmaze"
    ];

    const ul = document.getElementById("user-list");
    ul.innerHTML = ""; 

    userList.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        ul.appendChild(li);
    });
}


document.getElementById("sort-btn").addEventListener("click", function() {
    const ul = document.getElementById("user-list");
    const items = Array.from(ul.getElementsByTagName("li"));

   
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));

    
    ul.innerHTML = "";

   
    items.forEach(item => ul.appendChild(item));
});
