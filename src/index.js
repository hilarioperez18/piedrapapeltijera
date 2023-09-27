const options = [
  {
    name: "rock", emoji: "🗿", loseTo: ["paper"],
  },

  {
    name: "paper", emoji: "📄", loseTo: ["scissors"],
  },
  {
    name: "scissors", emoji: "✂", loseTo: ["rock"],
  },
];
const getNumberRandom = (number) => {
  const RandomNumber = Math.floor(Math.random() * number);
  return RandomNumber;
};

let cpuChoice = null;
let playerChoice = null;

const buttonsDiv = [...document.querySelectorAll(".btn")];

const determineWinner = (playerChoice, cpuChoice) => {
  if (playerChoice === cpuChoice) {
    return "Has empatado";
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "scissors" && cpuChoice === "paper") ||
    (playerChoice === "paper" && cpuChoice === "rock")
  ) {
    return "Has ganado";
  } else {
    return "Has perdido";
  }
};

const setResultText = (text) => {
  const resultDiv = document.querySelector(".result");

  resultDiv.textContent = `Player: ${playerChoice} - CPU: ${cpuChoice} ${text}`;
};

const setPlayerChoice = (option) => {
  const type = option.classList.item(1);
  playerChoice = type;

  // const getNumberRandom = (number) => Math.floor(Math.random() * number);
  const cpuChoiceIndex = getNumberRandom(options.length); // 0,1,2
  cpuChoice = options[cpuChoiceIndex].name; // Devuelve nombre
  console.log(playerChoice);
  const text = determineWinner(playerChoice, cpuChoice);
  setResultText(text);
};

buttonsDiv.forEach(button => {
  button.addEventListener("click", () => setPlayerChoice(button));
});
