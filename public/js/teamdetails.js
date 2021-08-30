console.log("Player Details Script Loaded"); 


let teamId = window.location.search.split('=')[1];
console.log("Team Id --> " + teamId);

const teamNames = ["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"]; 
let selectedTeam = teamNames[teamId-1];

const teamInfo = [
    {   
        id: 1,
        key: 'CSK',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Chennai-Super-Kings-logo-design-IPL-300x300.jpg", 
        title: "Chennai Super Kings", 
        topBatsman: "Suresh Raina",
        topBowler: "Dwayne Bravo",
        championCount : 3
 
    }, 

    {   
        id: 2,
        key: 'RCB',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/RCB-logo-design-IPL-300x300.jpg", 
        title: "Royal Challengers Bangalore",
        topBatsman: "Virat Kohli",
        topBowler: "Harshal Patel",
        championCount : 0

    }, 

    {   
        id: 3,
        key: 'MI',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Mumbai-Indians-logo-design-IPL-300x300.jpg", 
        title: "Mumbai Indians",
        topBatsman: "Rohit Sharma",
        topBowler: "Jasprit Bumrah",
        championCount : 5

    }, 

    {   
        id: 4,
        key: 'RR',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Rajasthan-Royals-logo-design-IPL-300x300.jpg", 
        title: "Rajastan Royals",
        topBatsman: "Sanju Samson",
        topBowler: "Jayadev Unadkat",
        championCount : 1

    }, 

    {   
        id: 5,
        key: 'KKR',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/KKR-logo-design-IPL-300x300.jpg", 
        title: "Kolkata Knight Riders",
        topBatsman: "Andre Russel",
        topBowler: "Sunil Narine",
        championCount : 2

    }, 

    {   
        id: 6,
        key: 'SRH',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/SunRisers-Hyderabad-logo-design-IPL-300x300.jpg", 
        title: "Sun Risers Hyderabad",
        topBatsman: "David Warner",
        topBowler: "Bhuvaneshwar Kumar",
        championCount : 1

    }, 

    {   
        id: 7,
        key: 'PK',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Punjab-Kings-logo-design-IPL-300x300.jpg", 
        title: "Punjab Kings",
        topBatsman: "KL Rahul",
        topBowler: "Mohammad Shami",
        championCount : 0

    }, 

    {   
        id: 8,
        key: 'DC',
        logoURL: "https://whiteandblack.in/wp-content/uploads/2021/04/Delhi-Capitals-logo-design-IPL-300x300.jpg", 
        title: "Delhi Capitals",
        topBatsman: "Shikar Dhawan",
        topBowler: "Avesh Khan",
        championCount : 0

    }, 


]


// function to save players in localStorage 
function saveToLocal(data) {
    localStorage.setItem("player-list", JSON.stringify(data));
}

//=================  function to create teams details 
// Structure is as follows 
{/* <div>
        <div class="image-part">
            <img>
        </div>  
        <div class="details-part">
            <h1>Team Title</h1>

            <h4>No of Players: 4</h4>
            <h3>Top Batsman</h3>
            <h3>Top Bowler</h3>
            <h3>Championship Won: 3</h3> 
        </div>
    </div>   
 */}


 function createTeamDetails(obj, len) {
    // var len = playerListLocal[selectedTeam].length;
    var detailsContainer = document.createElement('div'); 

    var imagePart = document.createElement('div'); 
    imagePart.classList.add('image-part');
     
    var teamLogo = document.createElement('img');
    teamLogo.src = obj.logoURL;
    teamLogo.classList.add('t-image');
    imagePart.appendChild(teamLogo);

    detailsContainer.appendChild(imagePart); 

    
    var detailsPart = document.createElement('div'); 
    detailsPart.classList.add('details-part');

   
    var teamName = document.createElement('h1');
    teamName.classList.add('t-title');
    teamName.innerHTML = obj.title;
    detailsPart.appendChild(teamName);
    

    var playerCount = document.createElement('h4');
    playerCount.innerHTML = "No of Players : <span>"+ len + "</span>"; 
    detailsPart.appendChild(playerCount);

    var topBatsman = document.createElement('h3');
    topBatsman.innerHTML = "Top Batsman : <span>" + obj.topBatsman + "</span>";
    detailsPart.appendChild(topBatsman);

    var topBowler = document.createElement('h3');
    topBowler.innerHTML = "Top Bowler : <span>" + obj.topBowler + "</span>";
    detailsPart.appendChild(topBowler)

    var champCount = document.createElement('h3'); 
    champCount.innerHTML = "Championship Won : <span> " + obj.championCount + "</span>"; 
    detailsPart.appendChild(champCount);

    detailsContainer.appendChild(detailsPart);

    // console.log(detailsContainer);
    var teamDetails = document.getElementById('team-details');
    // return detailsContainer;
    teamDetails.appendChild(detailsContainer)

}


// Selecting team-details 

// var teamDetails = document.getElementById('team-details');
// var item = createTeamDetails(teamInfo[teamId-1]); 
// teamDetails.appendChild(item);




//========== create Players cards 


//function to create Player Cards 
// Structure of the card is 
{/* <div class="player-card">
        <a class="player-link">
       
            <img class="player-image"> 
            <h2>Player Name</h2>
            <h3>Team Name</h3>
            <h4>Role</h4>
            <h4>Price</h4>
            <h4>Playing status</h4>
        
        </a>
</div>  */}

function createPlayerCard(obj) {
    var playerCard = document.createElement('div');
    playerCard.classList.add('player-card');
    
    var playerLink = document.createElement('a');
    playerLink.classList.add("player-link");
    playerLink.href = "./playerdetails.html?p="+obj._id;
    playerCard.appendChild(playerLink); 

    var playerImage = document.createElement('img');
    playerImage.classList.add('player-image');
    playerImage.src = obj.photoURL;
    playerLink.appendChild(playerImage);

    var playerName = document.createElement('h2');
    playerName.innerHTML = obj.name;
    playerLink.appendChild(playerName);

    // var teamName = document.createElement('h3');
    // teamName.innerHTML = obj.team;
    // playerLink.appendChild(teamName);

    var playerRole = document.createElement('h4');
    playerRole.innerHTML = "Role: <span>" + obj.description + "</span>";
    playerLink.appendChild(playerRole);
    
    var playerPrice = document.createElement('h4');
    playerPrice.innerHTML = "Price : <span>" + obj.price + "</span>";
    playerLink.appendChild(playerPrice);

    var playerStatus = document.createElement('h4');
    var check;
    if (obj.isPlaying ===  true) {
        check = "Playing";
    } else {
        check = "On-Bench";
    }

    playerStatus.innerHTML = "Status: <span>" + check + "</span>";
    playerLink.appendChild(playerStatus);
    
    // console.log(playerLink);
    return playerCard;
}


function displayPlayerCards(pList) {
    // Selecting the player Grid 
    let playerGrid = document.getElementById('player-grid'); 
    for (let i=0; i<pList.length; i++) {
        let playerItem = createPlayerCard(pList[i]);
        playerGrid.appendChild(playerItem)
    }

}


// Fetching the data for Backend for Product Details 
let http = new XMLHttpRequest();
let url = 'http://localhost:3000/teamdetails/'+teamId;
http.open("GET", url, true);
http.onreadystatechange = function() {
    if (this.readyState === 4) {
        let result = JSON.parse(this.responseText) ;
        console.log(result)
        let count = result.length;
        createTeamDetails(teamInfo[teamId-1], count); 
        displayPlayerCards(result);
        saveToLocal(result)
    }
}
http.send();


// Function to display error 
function displayError(data) {
    alert('Player Not Registered! Data Format Invalid')
    for (let i=0; i<data.length; i++) {
        let str = data[i].message;
        if (str.includes('"name"')) {
            alert('Name cannot contain special characters')
        }
        if (str.includes('"from"')) {
            alert('Team initials must be one of [CSK, RCB, MI, RR, KKR, SRH, PK, DC]')
        }
        if (str.includes('"photoURL"')) {
            alert('Photo must be of format .png')
        } 
        if (str.includes('"price"')) {
            alert('Price must be in Cr')
        } 
        if (str.includes('"isPlaying"')) {
            alert('Status should be either true or false')
        }
        if (str.includes('"description"')) {
            alert('Role must be one of [Batsman, Bowler, All-Rounder, Wicket-Keeper]')
        }
    }
 }


// ========================== Adding Players =======================// 
var btnAddPlayer = document.getElementById("btn-add-player");
var playerFormWrapper = document.getElementById("player-form-wrapper");

btnAddPlayer.onclick = function() {
      playerFormWrapper.style.display = "block";
      location.assign('#player-form-wrapper')
}


// Selecting the form 
var registerForm = document.getElementById('register-form');

// preventing the default behaviour 
registerForm.onsubmit = function(e) {
    e.preventDefault();
    
    var logincode = document.getElementById('logincode');

    var fullName = document.getElementById('fullName');
    var photoURL = document.getElementById('photoURL');
    var key = document.getElementById('key');
    var price = document.getElementById('price');
    var isPlaying = document.getElementById('status');
    var role = document.getElementById('role'); 
    
    var teamKey = key.value;
    teamKey = teamKey.toUpperCase().trim();
    

    var playerData = {
        name : fullName.value.trim(),
        from: teamKey,
        photoURL: photoURL.value.trim(),
        price: price.value.trim(),
        isPlaying: isPlaying.value.trim(),
        description: role.value.trim()
    }

    var userData = {
        code : logincode.value
    }

    var inputObject = {
        userData : userData,
        playerData : playerData
    }
   
    console.log(inputObject); 
     
    let http = new XMLHttpRequest();
    http.open("POST", "http://localhost:3000/addPlayer", true);
    http.setRequestHeader("Content-Type", "application/json");
    http.onreadystatechange = function() {
        if (this.readyState === 4) { 
            if (this.status === 403) {
                alert (this.responseText);
            }
            if (this.status === 400) {
                let result =  JSON.parse(this.responseText)
                console.log("Error ===",result);
                displayError(result)
            }
            if (this.status === 200) {
                let result = JSON.parse(this.responseText);
                console.log("Data added --->", result); 
                alert('Player Registered Successfully!');
                // location.reload();
                location.assign('./index.html');
                playerFormWrapper.style.display = "none";
            }      
        }
    }
    http.send(JSON.stringify(inputObject))
    
    // alert('Player Registered Successfully!');
    // playerFormWrapper.style.display = "none";
    // location.assign('./index.html');
    
}