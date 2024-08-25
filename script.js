const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");


const generateWord = (length) => {
  let word = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < length; ++i) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    word += letters[randomIndex];
  }

  return word;
};


const generatePara = () => {
  const numOfWords = Number(input.value);

  if (numOfWords <= 0 || isNaN(numOfWords)) {
    alert("Please enter a valid number of words.");
    return;
  }

  const para = document.createElement("p");

  let data = "";

  for (let i = 0; i < numOfWords; ++i) {
    const wordLength = Math.floor(Math.random() * 10) + 3; 
    data += generateWord(wordLength) + " ";
  }

  para.innerText = data.trim(); 

  para.setAttribute("class", "paras");

  container.appendChild(para); 
};
