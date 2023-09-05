const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const predictions = [
  `It is certain`,
  `Without a doubt`,
  `Yes definetely`,
  `Most likely`,
  `Yes`,
  `Signs point to yes`,
  `Ask again later`,
  `Better not tell you now`,
  `Concentrate and ask again`,
  `Don't count on it`,
  `Very doubtful`,
  `No`,
  `Outlook not so good`,
]

button.addEventListener("click", () => {
  let randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
  par.style.display = "block";
  par.textContent = randomPrediction;
})
