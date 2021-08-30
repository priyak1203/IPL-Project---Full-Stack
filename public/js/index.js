console.log('Script Loaded!!!')

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

//================== Function to create homepage team logo cards 

// structure of the card 
{/* <div class="team-card">
        <a class="logo-link" href="./teamdetails.html">
            <img class="team-logo" src="https://cricnerds.com/wp-content/uploads/2020/02/rcb-new.jpg">
            <h3 class="team-title">Royal Challengers Bangalore</h3>
        </a> 
    </div>
*/}

function createLogoCard(obj) {
    var logoCard = document.createElement('div');
    logoCard.classList.add("team-card");

    var logoLink = document.createElement('a');
    logoLink.classList.add("logo-link");
    logoLink.href="./teamdetails.html?t="+obj.id;
    // logoLink.href="./teamdetails/"+obj.id;
    logoCard.appendChild(logoLink);

    var logoImage = document.createElement('img');
    logoImage.classList.add('team-logo');
    logoImage.src = obj.logoURL;
    logoLink.appendChild(logoImage);

    var logoTitle = document.createElement('h3');
    logoTitle.classList.add("team-title"); 
    var titleText = document.createTextNode(obj.title);
    logoTitle.appendChild(titleText); 
    logoLink.appendChild(logoTitle); 

    // console.log(logoCard); 

    return logoCard;
}



// select teams - grid 
var teamGrid = document.getElementById('teams-container')

for (var i=0; i<teamInfo.length; i++) {
    var card = createLogoCard(teamInfo[i]);
    teamGrid.appendChild(card); 
}

// console.log(teamInfo)




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


// ======= Function to display search results
function displaySearchResult(list) {
    let sResult = document.getElementById('search-result');
    let pGrid = document.getElementById('player-grid');

    if (!list.length) {
        alert('No players found!');
        sResult.style.display = "none";
    } else {
        location.assign("./index.html#search-result");
        pGrid.innerHTML = ''; 
        sResult.style.display = "block";

        for(let i=0; i<list.length; i++) {
            let item = createPlayerCard(list[i]);
            pGrid.appendChild(item)
        }
    }
}

// function to save players in localStorage 
function saveToLocal(data) {
    localStorage.setItem("player-list", JSON.stringify(data));
}



// ================ Implementing the search Feature ============ /
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    let text = e.target.elements.teamkey.value;
    let searchKey = text.toUpperCase().trim();
    console.log(searchKey);

    let teams =["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"]; 

    if (teams.includes(searchKey)) {
        let value = teams.indexOf(searchKey);
      
        console.log(value); 

        let http = new XMLHttpRequest();
        let url = 'http://localhost:3000/teamdetails/'+(value+1);
        http.open("GET", url, true);
        http.onreadystatechange = function() {
            if (this.readyState === 4) {
                let result = JSON.parse(this.responseText);
                console.log(result);
                saveToLocal(result);
                // createPlayerCards(result)
                displaySearchResult(result)
            }
        }
        http.send()

    } else {
        alert('Invalid Input!')
    }
    
    e.target.elements.teamkey.value = '';

})
