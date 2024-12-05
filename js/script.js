var cardsData = [
  {
    id: 1,
    img: "antivirus",
    alt: "Antivirus card: Protect your passwords from attacks during the current round.",
    backside_title: "Antivirus",
    backside_description:
      "Antivirus software is essential for defending against malware that can compromise your personal information. Regularly update your antivirus to protect your system from new threats.",
    type: "bonus",
  },
  {
    id: 2,
    img: "attached-files",
    alt: "Be cautious with email attachments.",
    backside_title: "Attached Files",
    backside_description:
      "Be very careful when opening email attachments, especially from unknown senders. These files can contain viruses, malware, or phishing attempts designed to steal your data.",
    type: "attack",
  },
  {
    id: 3,
    img: "bad-password",
    alt: "Avoid weak passwords to prevent unauthorized access.",
    backside_title: "Bad Password",
    backside_description:
      "Weak passwords are an easy target for hackers. Always use a combination of uppercase and lowercase letters, numbers, and special characters. Never reuse passwords across different accounts.",
    type: "penalty",
  },
  {
    id: 4,
    img: "bankruptcy",
    alt: "Be cautious about sharing sensitive financial data.",
    backside_title: "Bankruptcy",
    backside_description:
      "Bankruptcy can lead to the loss of access to your assets. Make sure your financial data is securely stored and only share sensitive information with trusted entities.",
    type: "penalty",
  },
  {
    id: 5,
    img: "data-stealer",
    alt: "Data theft can lead to serious consequences.",
    backside_title: "Data Stealer",
    backside_description:
      "Data thieves can steal your personal information, leading to identity theft and fraud. Use encryption and strong passwords to protect sensitive data from unauthorized access.",
    type: "bonus",
  },
  {
    id: 6,
    img: "deepfake",
    alt: "Deepfakes are becoming a growing threat to personal and professional security.",
    backside_title: "Deepfake",
    backside_description:
      "Deepfake technology allows attackers to create convincing fake videos or audios of you. Be cautious when sharing personal media online, and verify the source of any media you receive.",
    type: "penalty",
  },
  {
    id: 7,
    img: "disfigurement",
    alt: "Malicious actions can harm your online reputation.",
    backside_title: "Disfigurement",
    backside_description:
      "Cybercriminals can damage your reputation by altering your online content or impersonating you. Always monitor your digital presence and secure your accounts with strong protections.",
    type: "penalty",
  },
  {
    id: 8,
    img: "error-404",
    alt: "Gain temporary immunity from attacks and penalties.",
    backside_title: "Error 404",
    backside_description:
      "Just like a '404 error' in the digital world, this card gives you temporary immunity. Use it wisely when you anticipate a serious attack on your passwords or accounts.",
    type: "attack",
  },
  {
    id: 9,
    img: "exe",
    alt: "Be cautious with executable files.",
    backside_title: ".exe",
    backside_description:
      "Executable files (.exe) can contain harmful software that may damage your system or steal your data. Always verify the source before opening any executable file, especially if it’s from an unknown sender.",
    type: "attack",
  },
  {
    id: 10,
    img: "firewall",
    alt: "A firewall protects your device from external threats.",
    backside_title: "Firewall",
    backside_description:
      "A firewall acts as a barrier between your device and the internet. Make sure your firewall is activated to prevent unauthorized access to your network and personal data.",
    type: "bonus",
  },
  {
    id: 11,
    img: "phishing-emails",
    alt: "Phishing emails are designed to steal your information.",
    backside_title: "Phishing Emails",
    backside_description:
      "Phishing emails often look legitimate but are designed to steal your personal information, such as passwords or credit card numbers. Always verify the sender and never click on suspicious links.",
    type: "penalty",
  },
  {
    id: 12,
    img: "public-wifi",
    alt: "Public Wi-Fi networks can be risky.",
    backside_title: "Public-wifi",
    backside_description:
      "Public Wi-Fi is convenient but insecure. Avoid accessing sensitive accounts or banking information when connected to public networks. Use a VPN for added security.",
    type: "penalty",
  },
  {
    id: 13,
    img: "ransom",
    alt: "Ransomware can lock you out of your own files.",
    backside_title: "Ransom",
    backside_description:
      "Ransomware encrypts your files and demands a ransom for their release. Protect your data with regular backups and up-to-date security software to minimize the risk.",
    type: "penalty",
  },
  {
    id: 14,
    img: "software-update",
    alt: "Keep your software up to date to avoid vulnerabilities.",
    backside_title: "Software Update",
    backside_description:
      "Regular software updates patch security holes that could be exploited by hackers. Always install updates for your operating system and applications to maintain your system's security.",
    type: "bonus",
  },
  {
    id: 15,
    img: "strong-password",
    alt: "Strong passwords protect your online accounts.",
    backside_title: "Strong Password",
    backside_description:
      "A strong password is your first line of defense. Use a mix of characters and enable multi-factor authentication (MFA) to secure your accounts against unauthorized access.",
    type: "bonus",
  },
  {
    id: 16,
    img: "terms-and-conditions",
    alt: "Read terms and conditions carefully before accepting.",
    backside_title: "Terms & Conditions",
    backside_description:
      "Terms and conditions can contain hidden clauses that compromise your privacy. Always read them carefully before agreeing, and be mindful of any data you might be agreeing to share.",
    type: "penalty",
  },
  {
    id: 17,
    img: "traitor",
    alt: "Some devices might contain malicious software.",
    backside_title: "Traitor",
    backside_description:
      "If a device is compromised, it may betray you. Always ensure that your devices are secure and use trusted sources for software and hardware.",
    type: "bonus",
  },
  {
    id: 18,
    img: "trojan-horse",
    alt: "A Trojan horse hides malicious software.",
    backside_title: "Trojan Horse",
    backside_description:
      "A Trojan horse may look like a useful program, but it secretly harms your system. Always download software from official sources and verify the integrity of files before running them.",
    type: "attack",
  },
  {
    id: 19,
    img: "two-factor-authentification",
    alt: "Two-factor authentication adds an extra layer of security.",
    backside_title: "Two-Factor Authentication",
    backside_description:
      "Two-factor authentication (2FA) is one of the best ways to secure your accounts. Even if your password is compromised, the second factor will protect you from unauthorized access.",
    type: "bonus",
  },
  {
    id: 20,
    img: "usb-key",
    alt: "USB keys can be infected with malware.",
    backside_title: "USB Key",
    backside_description:
      "USB keys are convenient but can carry malware. Always scan them for threats before plugging them into your computer, especially if they were not from a trusted source.",
    type: "attack",
  },
  {
    id: 21,
    img: "vpn",
    alt: "VPNs encrypt your internet connection.",
    backside_title: "VPN",
    backside_description:
      "A VPN encrypts your internet connection and protects your privacy. Use a VPN when browsing or accessing sensitive information on public networks to keep your data secure.",
    type: "bonus",
  },
];

// variable
var cardsList = document.getElementById("card-container");
var selector = document.getElementById("sort");
var searchbar = document.getElementById("searchbar");
var categoryButtons = document.querySelectorAll(".category-button");
var modal = document.getElementById("card-modal");
var modalImg = document.getElementById("modal-img");
var modalTitle = document.getElementById("modal-title");
var modalDescription = document.getElementById("modal-description");
var closeModal = document.querySelector(".modal-close");

//searchbar
searchbar.addEventListener("keyup", function () {
  var dataFiltered = cardsData.filter((data) =>
    data.backside_title.toLowerCase().includes(searchbar.value.toLowerCase())
  );
  cardsList.innerHTML = "";
  createListCards(dataFiltered);
});

// sort alphabetic
function compareStrings(a, b) {
  return a.backside_title.localeCompare(b.backside_title);
}

// sort func
selector.addEventListener("change", function () {
  var sorteredList = cardsData;

  switch (selector.value) {
    case "name_asc":
      sorteredList = cardsData.sort(compareStrings);
      break;
    case "name_desc":
      sorteredList = cardsData.sort(compareStrings).reverse();
      break;
  }
  cardsList.innerHTML = "";
  createListCards(sorteredList);
});

// filter by category
function filterByCategory(category) {
  var filteredData = cardsData;
  if (category !== "all") {
    filteredData = cardsData.filter((card) => card.type === category);
  }
  createListCards(filteredData);
}

// filter cat
categoryButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    categoryButtons.forEach((btn) => btn.classList.remove("active-category"));
    event.target.classList.add("active-category");
    filterByCategory(event.target.getAttribute("data-category"));
  });
});

// mobile device modal
function showModal(card) {
  var modalShake = document.getElementById("modal-shake");

  modalShake.classList.add("tilt-shake");
  setTimeout(function () {
    modal.style.display = "block";
    modalImg.src = `/assets/images/${card.img}.png`;
    modalImg.alt = card.alt;
    modalTitle.textContent = card.backside_title;
    modalDescription.textContent = card.backside_description;

    modalShake.classList.remove("tilt-shake");
  }, 500);
}

// loop func cards
function createListCards(cards) {
  cardsList.innerHTML = "";
  document.getElementById("resultNumber").textContent = cards.length;

  cards.forEach(function (card) {
    let flipBox = document.createElement("div");
    flipBox.classList.add("flip-card");

    flipBox.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img src="/assets/images/${card.img}.png" alt="${card.alt}" />
        </div>
        <div class="flip-card-back">
          <h2 class="flip-card-back_title">${card.backside_title}</h2>
          <p>${card.backside_description}</p>
        </div>
      </div>
    `;

    flipBox.addEventListener("click", function () {
      showModal(card);
    });

    cardsList.appendChild(flipBox);
  });
}

closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

createListCards(cardsData);
