var cardsData = [
  {
    id: 3,
    name: "Antivirus",
    img: "antivirus",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "bonus",
  },
  {
    id: 3,
    name: "Attached Files",
    img: "attached-files",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "attack",
  },
  {
    id: 2,
    name: "Bad Password",
    img: "bad-password",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Bankruptcy",
    img: "bankruptcy",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Data Stealer",
    img: "data-stealer",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Deepfake",
    img: "deepfake",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Disfigurement",
    img: "disfigurement",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 4,
    name: "Error 404",
    img: "error-404",
    alt: "Antivirus card: You are protected from attack and penalty cards for two rounds.",
    backside_title: "Antivirus Details",
    backside_description: "Gain immunity from attacks and penalties for the next two rounds.",
    type: "attack",
  },
  {
    id: 3,
    name: ".exe",
    img: "exe",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "attack",
  },
  {
    id: 3,
    name: "Firewall",
    img: "firewall",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "bonus",
  },

  {
    id: 2,
    name: "Phishing Emails",
    img: "phishing-emails",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Public-wifi",
    img: "public-wifi",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Ransom",
    img: "ransom",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Software Update",
    img: "software-update",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "bonus",
  },

  {
    id: 2,
    name: "Strong Password",
    img: "strong-password",
    alt: "Firewall card: For this round, nobody can attack your password.",
    backside_title: "Firewall Details",
    backside_description: "Shield your passwords from attacks during the current round.",
    type: "bonus",
  },

  {
    id: 2,
    name: "TCU",
    img: "tcu",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "Be careful when using a usb key",
    backside_description: "This can be dangerous if the key contains malicious software.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Traitor",
    img: "traitor",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "Be careful when using a usb key",
    backside_description: "This can be dangerous if the key contains malicious software.",
    type: "bonus",
  },
  {
    id: 4,
    name: "Trojan Horse",
    img: "trojan-horse",
    alt: "Antivirus card: You are protected from attack and penalty cards for two rounds.",
    backside_title: "Antivirus Details",
    backside_description: "Gain immunity from attacks and penalties for the next two rounds.",
    type: "penalty",
  },
  {
    id: 2,
    name: "Two-Factor Authentification",
    img: "two-factor-authentification",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "Be careful when using a usb key",
    backside_description: "This can be dangerous if the key contains malicious software.",
    type: "bonus",
  },
  {
    id: 2,
    name: "USB key",
    img: "usb-key",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "Be careful when using a usb key",
    backside_description: "This can be dangerous if the key contains malicious software.",
    type: "atatck",
  },
  {
    id: 2,
    name: "VPN",
    img: "vpn",
    alt: "USB key: The next time a player uses a penalty card against you, the card will have no effect.",
    backside_title: "Be careful when using a usb key",
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
