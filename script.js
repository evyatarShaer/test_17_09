window.onload = () =>{
    yellow()
}

const div = document.querySelector('#yellowButton')

const yellow = () => {
    const button = document.createElement('button');
    button.textContent = 'Yellow';
    button.id = 'Button';
    button.addEventListener('click', square);

    div.appendChild(button);
}


const square = () => {
    let bool = false;

    if (!bool)
    {     
        const square = document.createElement('div');
        square.id = 'Square';
        div.appendChild(square);
        console.log("if");
        bool = true;
    }
    else
    {
        const square = document.querySelector('#Square');
        div.removeChild(square);
        bool = false;
    }
}



  

const users = async () => {
    try{
        const respons = await fetch("https://randomuser.me/api/?results=4")
        const data = await respons.json();
        return data.results;
    }
    catch(error){
        console.error(error);
    } 
};


const renderUsers = async () => {
    const DIV = document.querySelector("#users");
    console.log('hi');
    
    DIV.textContent = "";
    
    const users = await users();
    
    users.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.id = "userDiv";
        
        const name = document.createElement("h1");
        name.textContent = user.name;
        
        const email = document.createElement("p");
        email.textContent = user.email;
        
        userDiv.appendChild(email);
        userDiv.appendChild(name);
        
    })
}


const button1 = document.createElement("random");
            
button1.addEventListener('click', renderUsers)