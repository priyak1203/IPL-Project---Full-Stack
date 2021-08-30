console.log('Player Page Script Loaded!!!');

let players = JSON.parse(localStorage.getItem("player-list"));
console.log("Player List ============", players); 

let playerId = window.location.search.split('=')[1];
console.log("Player Id --> " + playerId);
console.log(typeof playerId)

let playerData = players.filter((item) =>  item._id=== playerId );
console.log("Player Data", playerData)



// Function to create player details 
// structure is : 
{/* <div class="image">
        <img class="player-picture"> 
    </div>
    <div class="description">
    <div class="meta"> 
        <h2>Player Name</h2>
        <h3>Team Name</h3>
        <h4>Role</h4>
        <h4>Price</h4>
        <h4>Playing status</h4>
    </div>
</div> */}



function createPlayerDetails(obj) {
    
    var playerInfo = document.getElementById("player-info"); 

    var imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image');
    
    var playerPic = document.createElement('img');
    playerPic.src = obj.photoURL;
    imageWrapper.appendChild(playerPic);

    playerInfo.appendChild(imageWrapper);

    var detailsWrapper = document.createElement('div');
    detailsWrapper.classList.add('description'); 

    // var metadetails = document.createElement('div');
    // metadetails.classList.add("meta");

    var plName = document.createElement('h2');
    plName.innerHTML = obj.name;
    detailsWrapper.appendChild(plName)
    
    var tName = document.createElement('h3');
    tName.innerHTML ="Team: <span>" + obj.team + "</span>";
    detailsWrapper.appendChild(tName);

    var plRole = document.createElement('h4');
    plRole.innerHTML = "Role: <span>" + obj.description +  "</span>" ;
    detailsWrapper.appendChild(plRole);
    
    var plPrice = document.createElement('h4');
    plPrice.innerHTML = "Price : <span> " + obj.price +  "</span>";
    detailsWrapper.appendChild(plPrice);

    var plStatus = document.createElement('h4');
    var check;
    if (obj.isPlaying ===  true) {
        check = "Playing";
    } else {
        check = "On-Bench";
    }

    plStatus.innerHTML ="Status : <span>"+ check +  "</span>";
    detailsWrapper.appendChild(plStatus);

    playerInfo.appendChild(detailsWrapper);
    // console.log(playerInfo)
    
}

createPlayerDetails(playerData[0]);
