const userInputNode = document.getElementById('userInput');
const AddButton = document.getElementById('add-button');
const AddTEAMButton = document.querySelector('.team-button');
const teamInputNode = document.querySelector('.team-input')
const UserListNode = document.getElementById('user-list');
const teamContainer = document.querySelector('.team-container');
let userList = [];
let teamCount = teamInputNode.value;
AddButton.addEventListener('click', () => {
    if (userInputNode.value !== "") {
        userList.push(userInputNode.value);
        UserListNode.style.border = '1px solid black';
        let p = document.createElement('p');
        p.innerText = userInputNode.value;
        UserListNode.appendChild(p);
    } else {
        alert('Enter User name')
    }
    userInputNode.value = "";
})

AddTEAMButton.addEventListener('click', () => {
    let newarray = (shuffleArray(userList));
    let teamArray = splitTeams(newarray, teamInputNode.value);
    let div;
    teamArray.map((obj, i) => {
        div = document.createElement('div');
        div.className = 'team-list';
        let h3 = document.createElement('h3');
        h3.innerText = `TEAM ${i + 1}`;
        div.appendChild(h3);
        teamContainer.appendChild(div)
        obj.map((d) => {
            let p = document.createElement('p');
            p.innerText = d;
            div.appendChild(p);
        })
    })
})
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
function splitTeams(names, teams_count) {
    let teams = [];
    while (teams_count > 0) {
        teams.push(names.splice(0, Math.floor(names.length / teams_count)))
        teams_count--;
    }
    return teams
}
window.onload = () => {

}