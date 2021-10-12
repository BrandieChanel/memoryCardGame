//Morning Challenge: Make a 10 card memory game -users must be able to select two cards

/*

create an array (0-9)

use Math.random

conditional statements that has an incremental timer
if 1st click happens waits for timer



*/
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

const getData = () => [
  { imgSrc: "./images/comp.jpg", name: "comp" },
  { imgSrc: "./images/folder.jpg", name: "folder" },
  { imgSrc: "./images/note.jpg", name: "note" },
  { imgSrc: "./images/trash.jpg", name: "trash" },
  { imgSrc: "./images/comp.jpg", name: "comp" },
  { imgSrc: "./images/folder.jpg", name: "folder" },
  { imgSrc: "./images/note.jpg", name: "note" },
  { imgSrc: "./images/trash.jpg", name: "trash" },
  { imgSrc: "./images/comp.jpg", name: "comp" },
  { imgSrc: "./images/folder.jpg", name: "folder" },
  { imgSrc: "./images/note.jpg", name: "note" },
  { imgSrc: "./images/trash.jpg", name: "trash" },
  { imgSrc: "./images/comp.jpg", name: "comp" },
  { imgSrc: "./images/folder.jpg", name: "folder" },
  { imgSrc: "./images/note.jpg", name: "note" },
  { imgSrc: "./images/trash.jpg", name: "trash" },
];

//Randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// card generator function
const cardGenerator = () => {
  const cardData = randomize();
   //Generate the HTML
  cardData.forEach(item => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
   
    //Attach image to the cards
    face.src = item.imgSrc;
  
    //Attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard')
    })
  });
};
cardGenerator();


