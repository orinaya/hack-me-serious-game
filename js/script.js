var cardsData = [
  {
    id: 1,
    name: "Strong Password",
    img: "image-1",
    alt: "Strong password card: You add one password card to your password. Maximum 5 cards in front of you.",
    backside_title: "Strong Password Details",
    backside_description:
      "This card adds one extra password card to your deck. Use it wisely to strengthen your defenses.",
  },
  {
    id: 2,
    name: "VPN",
    img: "image-2",
    alt: "VPN card: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "VPN Details",
    backside_description:
      "Protect yourself against penalties for one round. A must-have for secure gameplay.",
  },
  {
    id: 3,
    name: "Firewall",
    img: "image-3",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
  },
  {
    id: 4,
    name: "Antivirus",
    img: "image-4",
    alt: "Antivirus card: You are protected from attack and penalty cards for two rounds.",
    backside_title: "Antivirus Details",
    backside_description: "Gain immunity from attacks and penalties for the next two rounds.",
  },
  {
    id: 1,
    name: "Strong Password",
    img: "image-1",
    alt: "Strong password card: You add one password card to your password. Maximum 5 cards in front of you.",
    backside_title: "Strong Password Details",
    backside_description:
      "This card adds one extra password card to your deck. Use it wisely to strengthen your defenses.",
  },
  {
    id: 2,
    name: "VPN",
    img: "image-2",
    alt: "VPN card: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "VPN Details",
    backside_description:
      "Protect yourself against penalties for one round. A must-have for secure gameplay.",
  },
  {
    id: 3,
    name: "Firewall",
    img: "image-3",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
  },
  {
    id: 4,
    name: "Antivirus",
    img: "image-4",
    alt: "Antivirus card: You are protected from attack and penalty cards for two rounds.",
    backside_title: "Antivirus Details",
    backside_description: "Gain immunity from attacks and penalties for the next two rounds.",
  },
  {
    id: 3,
    name: "Firewall",
    img: "image-3",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
  },
  {
    id: 4,
    name: "Antivirus",
    img: "image-4",
    alt: "Antivirus card: You are protected from attack and penalty cards for two rounds.",
    backside_title: "Antivirus Details",
    backside_description: "Gain immunity from attacks and penalties for the next two rounds.",
  },
];

function flipCard(element) {
  element.classList.toggle("flipped");
}

var cardContainer = document.getElementById("card-container");

for (var i = 0; i < cardsData.length; i++) {
  var flipBox = document.createElement("div");
  flipBox.classList.add("flip-box");
  flipBox.setAttribute("onclick", "flipCard(this)");

  flipBox.innerHTML = `
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <img src="/assets/images/${cardsData[i].img}.png" alt="${cardsData[i].alt}" />
    </div>
    <div class="flip-box-back">
      <h2>${cardsData[i].backside_title}</h2>
      <p>${cardsData[i].backside_description}</p>
    </div>
  </div>
`;

  cardContainer.appendChild(flipBox);
}
