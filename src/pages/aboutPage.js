function createArea(headingText, target) {
    const heading = document.createElement("h2");
    heading.textContent = headingText;
    
    target.appendChild(heading);

    for (let i = 2; i < arguments.length; i++) {
        const para = document.createElement("p");
        para.textContent = arguments[i];
        target.appendChild(para);
    }
}

function loadAboutPage() {
    const content = document.querySelector("#content");
    
    // clear contents
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    const aboutPage = document.createElement("div");
    aboutPage.id = "aboutPage";
    
    const info = document.createElement("div");
    info.id = "info";

    createArea("Address", info, "1234 Bifrost Way Asgard");
    info.appendChild(document.createElement("hr"));

    createArea("Contact", info, "Phone: (666)-344-4661", "Email: allfather.Odin@asgard.gov");
    info.appendChild(document.createElement("hr"));

    createArea("Hours", info, "Always (so long as you have been selected to get in).");

    aboutPage.appendChild(info);
    content.appendChild(aboutPage);
}

export {loadAboutPage};