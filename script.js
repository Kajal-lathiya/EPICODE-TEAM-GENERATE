const userInputNode = document.getElementById('userInput');
const AddButton = document.getElementById('add-button');
const AddTEAMButton = document.querySelector('.team-button');
const teamInputNode = document.querySelector('.team-input')
const UserListNode = document.getElementById('user-list');
const teamContainer = document.querySelector('.team-container');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const teamNumber = document.getElementById('teamNumber');
const resetButton = document.querySelector('.reset-button')
let userList = [];
let teamNo = 1;
AddButton.addEventListener('click', () => {
    if (userInputNode.value !== "") {
        userList.push(userInputNode.value);
        let p = document.createElement('p');
        p.innerText = userInputNode.value;
        UserListNode.appendChild(p);
    } else {
        alert('Enter User name')
    }
    userInputNode.value = "";
})
plusButton.addEventListener('click', () => {
    teamNo++;
    teamNumber.innerText = teamNo;
})
minusButton.addEventListener('click', () => {
    if (teamNo > 1) {
        teamNo--;
    }
    teamNumber.innerText = teamNo;
})
resetButton.addEventListener('click', () => {
    userList = []
})
AddTEAMButton.addEventListener('click', () => {
    let newarray = (shuffleArray(userList));
    let teamArray = splitTeams(newarray, teamNo);
    let div;
    teamArray.map((obj, i) => {
        div = document.createElement('div');
        div.className = 'team-list';
        let h3 = document.createElement('h3');
        h3.innerText = `Team ${i + 1}`;
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
    teamNumber.innerText = teamNo;

}