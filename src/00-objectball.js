function gameObject(){
    return {home :{
            teamName:"Brooklyn Nets",
            colors:["Black","White"],
            players:{
              "Alan Anderson":{
                number:0,
                shoe:16,
                points:22,
                rebounds:12,
                assists:12,
                steals:3,
                blocks:1,
                slamdunks:1
              },
              "Reggie Evans":{
                number:30,
                shoe:14,
                points:12,
                rebounds:12,
                assists:12,
                steals:12,
                blocks:12,
                slamdunks:7
              },
              "Brook Lopez":{
                number:11,
                shoe:17,
                points:17,
                rebounds:19,
                assists:10,
                steals:3,
                blocks:1,
                slamdunks:15
              },
              "Mason Plumlee":{
                number:1,
                shoe:19,
                points:26,
                rebounds:12,
                assists:6,
                steals:3,
                blocks:8,
                slamdunks:5
              },
              "Jason Terry":{
                number:31,
                shoe:15,
                points:19,
                rebounds:2,
                assists:2,
                steals:4,
                blocks:11,
                slamdunks:1}
            }
          },
          
        away:{
          teamName:"Charlotte Hornets",
          colors:["Turquoise","Purple"],
          players:{
            "Jeff Adrien":{
                number:4,
                shoe:18,
                points:10,
                rebounds:1,
                assists:1,
                steals:2,
                blocks:7,
                slamdunks:2
            },
            "Bismak Biyombo":{
                number:0,
                shoe:16,
                points:12,
                rebounds:4,
                assists:0,
                steals:7,
                blocks:15,
                slamdunks:10
            },
            "DeSagna Diop":{
                number:2,
                shoe:14,
                points:24,
                rebounds:12,
                assists:12,
                steals:4,
                blocks:5,
                slamdunks:5
            },
            "Ben Gordon":{
                number:8,
                shoe:15,
                points:33,
                rebounds:3,
                assists:2,
                steals:1,
                blocks:1,
                slamdunks:0
            },
            "Brendan Haywood":{
                number:33,
                shoe:15,
                points:6,
                rebounds:12,
                assists:12,
                steals:22,
                blocks:5,
                slamdunks:12
            },
          },
          
        }
      
    }
}

function numPointsScored(playerName){
  let matchData = gameObject();
  // Access the upper keys,the home and away dictionaries using the for ... in loop
  for (let upperKey in matchData){
    console.log(upperKey)
    // Access the values stored insde the home and away dictionaries,remember the 2 are keys and the values and dictionaies 
    let upperValues = matchData[upperKey];
    console.log(upperValues);

    // Access the players since the player data contains teamName,colors and players
    let playerData = upperValues.players;
    // use an if else loop to check if the player name exists in the players data 
    if (playerData[playerName]){
      console.log(playerData[playerName].points);
    }else {
      console.log(`${playerName} not found in the dataset!!!`)
    }
    
  }
}

// Creaete a function shoeSize that takes in a playerName and returns the shoeSize of the player 

function shoeSize(playerName){
  let matchData = gameObject();

  for (let upperKey in matchData){
    console.log(upperKey);
    // Access the values inside the keys of home and away
    let upperValues = matchData[upperKey];

    // Access the playerData properties 
    let playerData = upperValues.players;

    if (playerData[playerName]){
      console.log(playerData[playerName].shoe)
    }else {
      console.log("Player name not found in the players dataset")
    }

  }
}

// Create a function team colors that takes in an argument of the team name and returns the team colors

function teamColors(nameOfTeam){
  let matchData = gameObject();

  for (let upperKey in matchData){
    console.log(upperKey);
    // Access the values inside the home and away!!Remember the values are dictionaries by themselves 
    let upperValues = upperKey[matchData];

    // Access the teamNames 
    if (upperValues.teamName === nameOfTeam){
      console.log(upperValues.colors)
    }
  }
}

// Create a function that returns an array of the team names 
function arrayOfTeamNames(){
  let matchData = gameObject();
  let arrayOfTeams = []

  for (let upperKey in matchData){
    // console.log(upperKey)
    let upperValue = matchData[upperKey];
    arrayOfTeams.push(upperValue.teamName)

  }
  console.log(arrayOfTeams)
}

arrayOfTeamNames()

// Build a function jerseyNumbers that takes in a teams name and returns an array of the jersey numbers in that team

function jerseyNumberss(teamsName){
  let matchData = gameObject();
  let teamJerseyNumbers =[]
  
  for (upperKey in matchData){
    let upperValue = matchData[upperKey];
    if (upperValue.teamName === teamsName){
      let teamStatistic = upperValue.players;
      // console.log(teamStatistic)
      for (let teamStat in teamStatistic){
        let individualStat = teamStatistic[teamStat]
        teamJerseyNumbers.push(individualStat.number)
      }
    }
  }
  console.log(teamJerseyNumbers)
}


// Write a function players stats that takes in an argument of a plaer name and returns the player statistics 

function playerStats(playerName){
  let matchData = gameObject();

  for (let upperKey in matchData){
    console.log(upperKey)

    // Access the values stored inside the upperkeys values which are dictionaries by themselves 
    let upperValue = matchData[upperKey]
    let playerData = upperValue.players;

    if(playerData[playerName]){
      console.log(playerData[playerName])
    }else {
      console.log(`${playerName} not found in the players Dataset`)
    }


  }
}
playerStats();


// Build a function mostPointsScored which returns the player that has the highest points 
function mostPointsScored(){
  let matchData = gameObject();
  let playerPoints = []
  let playersOfTeams = []

  for (let upperKey in matchData){
    let upperValue = matchData[upperKey]
    let teamData = upperValue.players;
    for (let nameOfPlayers in teamData){
      playersOfTeams.push(nameOfPlayers)
      playerPoints.push(teamData[nameOfPlayers].points)
    }
  }
  console.log(playerPoints)
  let maxElement =Math.max(...playerPoints)
  let playerIndex = playerPoints.indexOf(maxElement)
  console.log(playersOfTeams[playerIndex])
}


// Build a function winning team that returns the team with the highest poinst 


function winningTeam(){
  let matchData = gameObject();
  let homeStats = [];
  let awayStats = [];

  for (let upperKey in matchData){
    let upperValue = matchData[upperKey];
    
    // Access the team names 
    let derbyNames = upperValue.teamName;
    
    if (upperValue.teamName === "Brooklyn Nets" ){
      let homeTeam = upperValue.players
      console.log(upperValue.teamName)
      for (let homePlayers in homeTeam){
        homeStats.push(homeTeam[homePlayers].points)
      }
    }else if(upperValue.teamName === "Charlotte Hornets"){
      let awayTeam = upperValue.players;
      for (let awayPlayers in awayTeam){
        awayStats.push(awayTeam[awayPlayers].points)
      }
    }
  }
  let totalHomePoints = homeStats.reduce((accumulator,currentValue)=>accumulator + currentValue,0)
  let totalAwayPoints = awayStats.reduce((accumulator,currentValue)=>accumulator + currentValue,0)
  if(totalHomePoints > totalAwayPoints){
    console.log("The home team won!!")
    console.log("The Away team will have to do better next time")
  }else if(totalAwayPoints > totalHomePoints){
    console.log("The away team won")
    
  }else {
    console.log("There is no winner today!!")
  }
}


// Create a function playerWith Longest name that returns the player name with the longest name

function playerWithLongestName(){
  let matchData = gameObject();
  let lengthOfPlayerNames = [];
  let individualNames = []
  
  for (let upperKey in matchData){
    let upperValue = matchData[upperKey]
    
    let playerData = upperValue.players;
    for (let teamPlayers in playerData){
      lengthOfPlayerNames.push(teamPlayers.length);
      individualNames.push(teamPlayers);
    }
  }
  let playerCopy = Math.max(...lengthOfPlayerNames);
  
  console.log(individualNames[lengthOfPlayerNames.indexOf(playerCopy)])
  
}
