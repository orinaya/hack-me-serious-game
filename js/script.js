var cardsData = [
  {
    id: 3,
    img: "antivirus",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Antivirus",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "bonus",
  },
  {
    id: 3,
    img: "attached-files",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Attached Files",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "attack",
  },
  {
    id: 2,
    img: "bad-password",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Bad Password",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    img: "bankruptcy",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Bankruptcy",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    img: "data-stealer",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Data Stealer",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    img: "deepfake",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Deepfake",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    img: "disfigurement",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Disfigurement",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 4,
    img: "error-404",
    alt: "Antivirus card: You are protected from attack and penalty cards for two rounds.",
    backside_title: "Error 404",
    backside_description: "Gain immunity from attacks and penalties for the next two rounds.",
    type: "attack",
  },
  {
    id: 3,
    img: "exe",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: ".exe",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "attack",
  },
  {
    id: 3,
    img: "firewall",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "bonus",
  },

  {
    id: 2,
    img: "phishing-emails",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Phishing Emails",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    img: "public-wifi",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Public-wifi",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    img: "ransom",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Ransom",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    img: "software-update",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Software Update",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "bonus",
  },

  {
    id: 2,
    img: "strong-password",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Strong Password",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "bonus",
  },

  {
    id: 2,
    img: "tcu",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "TCU",
    backside_description: "This can be dangerous if the key contains malicious software.",
    type: "penalty",
  },
  {
    id: 2,
    img: "traitor",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "Traitor",
    backside_description: "This can be dangerous if the key contains malicious software.",
    type: "bonus",
  },
  {
    id: 4,
    img: "trojan-horse",
    alt: "Antivirus card: You are protected from attack and penalty cards for two rounds.",
    backside_title: "Trojan Horse",
    backside_description: "Gain immunity from attacks and penalties for the next two rounds.",
    type: "penalty",
  },
  {
    id: 2,
    img: "two-factor-authentification",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "Two-Factor Authentification",
    backside_description: "This can be dangerous if the key contains malicious software.",
    type: "bonus",
  },
  {
    id: 2,
    img: "usb-key",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "USB key",
    backside_description:
      "Be careful when using a usb key. This can be dangerous if the key contains malicious software.",
    type: "atatck",
  },
  {
    id: 2,
    img: "vpn",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "VPN",
    backside_description: "This can be dangerous if the key contains malicious software.",
    type: "bonus",
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
      <h2 class="flip-box-back_title">${cardsData[i].backside_title}</h2>
      <p>${cardsData[i].backside_description}</p>
    </div>
  </div>
`;

  cardContainer.appendChild(flipBox);
}

//filter
