#!/usr/bin/env node
const { XMLHttpRequest } = require("xmlhttprequest");
const jsonfile = require('jsonfile');

const latestRequest = new XMLHttpRequest();
const cardsRequest = new XMLHttpRequest();

let patchNumber = '';

const updateCardsJsonFile = () => {
    const cardsArray = JSON.parse(cardsRequest.responseText);
    
    // Filter for only BG minions
    const bgCardsArray = []
    cardsArray.forEach((card) => {
        if(card["battlegroundsPremiumDbfId"]) {
            bgCardsArray.push({ id: card["id"], name: card["name"] })
        }
    });

    jsonfile.writeFile(
        "./src/assets/cards.json",
        bgCardsArray,
        { spaces: 2 },
        (err) => err ? console.log(err) : console.log("The cards.json has been updated. 🙌 🎉 🙌 🎉")
    );  
}

latestRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Grab the latest patch number from response content.
        patchNumber = this.responseText.match(/v1\/(\d+)/g)[0].substring(3);

        // Send another request to get the cards json.
        const url = `https://api.hearthstonejson.com/v1/${patchNumber}/enUS/cards.json`;

        cardsRequest.open("GET", url, true);
        cardsRequest.send();
    }
};

cardsRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        updateCardsJsonFile();
    }
};

// First hit v1/latest to get most recent patch number.
latestRequest.open("GET", "https://api.hearthstonejson.com/v1/latest/", true);
latestRequest.send();
