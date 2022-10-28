const userInputNode = document.getElementById('userInput');
const AddButton = document.getElementById('add-button');
const AddTEAMButton = document.querySelector('.team-button');
const teamInputNode = document.querySelector('.team-input')
const UserListNode = document.getElementById('user-list');
const teamContainer = document.querySelector('.team-container');
let userList = [];
AddButton.addEventListener('click', () => {
    if (userInputNode.value !== "") {
        userList.push({ name: userInputNode.value });
        showUserList();
    } else {
        alert('Enter User name')
    }
    userInputNode.value = "";
})

const showUserList = () => {
    UserListNode.style.border = '1px solid black';
    userList.map((obj, i) => {
        let p = document.createElement('p');
        p.innerText = obj.name;
        UserListNode.appendChild(p);
    })
}

AddTEAMButton.addEventListener('click', () => {
    console.log('call-->', teamInputNode.value);
    let number = teamInputNode.value;
    for (let i = 0; i < number; i++) {
        let div = document.createElement('div');
        div.className = 'team-list';
        let h3 = document.createElement('h3');
        h3.innerText = i + 1;
        div.appendChild(h3);
        teamContainer.appendChild(div)
    }
})

window.onload = () => {
}