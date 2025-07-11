function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    PlayerOverlayConfigElement.style.display='block';
    backdropElement.style.display='block';
}

function closePlayerConfig(){
    PlayerOverlayConfigElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent='';
    formElement.firstElementChild.lastElementChild.value=''
}

function savePlayerConfig(event){
    event.preventDefault();
    const formdata= new FormData(event.target);
    const Enterdplayername= formdata.get('playername').trim();//'    '=>''

    if(!Enterdplayername){
        event.target.firstElementChild.classList.add('error');
        errorOutputElement.textContent='Enter valid name!!!';
        return;
    }

    const updatedPlayerData=document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerData.children[1].textContent=Enterdplayername;

    players[editedPlayer - 1].name=Enterdplayername;

    closePlayerConfig();
}