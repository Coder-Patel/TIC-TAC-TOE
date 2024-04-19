var database = firebase.database();
// Showing and Hiding Forms
function showJoinForm() {
  var navigatorS = document.getElementById("slectorScreen");
  var joinForm = document.getElementById("joinScreen");

  if (joinForm.style.display === "none") {
    joinForm.style.display = "block";
    navigatorS.style.display = "none";
  } else {
    joinForm.style.display = "none";
    navigatorS.style.display = "block";
  }
}

function showCreateForm() {
  var navigatorS = document.getElementById("slectorScreen");
  var createForm = document.getElementById("createScreen");

  //show or hide form
  if (createForm.style.display === "none") {
    createForm.style.display = "block";
    navigatorS.style.display = "none";
  } else {
    createForm.style.display = "none";
    navigatorS.style.display = "block";
  }
}

function generateRandomNonRepeatingNumber() {
  var generatedNumbers = [];
  var h2Tag = document.getElementById("roomGenerator");

  while (true) {
    var randomNumber =
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    if (!generatedNumbers.includes(randomNumber)) {
      generatedNumbers.push(randomNumber);
      h2Tag.innerHTML = randomNumber;
      break;
    }
  }
}

function submitForm1() {
  var randomRoomKey = document.getElementById("roomGenerator").textContent;
  var name1 = document.getElementById("player-name1").value;
  var sign1 = "X";
  var turn1 = "1";

  var gameJson = {
    [randomRoomKey]: {
      Game: {
        Count: 0,
        State: 0,
        Winner: "null",
        board: {
          BL: "",
          BM: "",
          BR: "",
          ML: "",
          MM: "",
          MR: "",
          TL: "",
          TM: "",
          TR: "",
        },
      },
      Players: {
        player1: {
          name: "",
          sign: "",
          turn: "",
        },
        player2: {
          name: "",
          sign: "",
          turn: "",
        },
      },
    },
  };

  gameJson[randomRoomKey].Players.player1.name = name1;
  gameJson[randomRoomKey].Players.player1.sign = sign1;
  gameJson[randomRoomKey].Players.player1.turn = turn1;

  database.ref(playerIndex).set(gameJson);
  console.log(gameJson);
  //window.location.href = "./Game/Game.html";
}

function submitForm2() {}
