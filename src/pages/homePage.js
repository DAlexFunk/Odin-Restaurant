function loadHomePage() {
    const content = document.querySelector("#content");
    
    // clear contents
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    const homepage = document.createElement("div");
    homepage.id = "homePage";

    const textBox = document.createElement("div");
    textBox.id = "text";

    const welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = "Welcome to Valhalla!";
    const quote = document.createElement("p");
    quote.textContent = '"Here in the Hall of the Slain, we only serve the finest boars and wine. If you made it here, you\'re special; I chose YOU. Come celebrate with your fellow brothers and sisters and prepare for Ragnarök."'
    textBox.appendChild(welcomeMessage);
    textBox.appendChild(quote);

    homepage.appendChild(textBox);

    const odinImg = document.createElement("img");
    odinImg.src = "https://i.redd.it/pb80zhvapicc1.jpeg";
    odinImg.alt = "Picture of the Allfather, Odin";
    homepage.appendChild(odinImg);

    content.appendChild(homepage);
}

export {loadHomePage};