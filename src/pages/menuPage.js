function createSide(src, alt, title, desc) {
    const side = document.createElement("div");
    side.className = "side";
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    const Title = document.createElement("h3");
    Title.textContent = title;
    const Desc = document.createElement("p");
    Desc.textContent = desc;
    side.appendChild(img);
    side.appendChild(Title);
    side.appendChild(Desc);
    
    return side
}

function loadMenuPage() {
    const content = document.querySelector("#content");
    
    // clear contents
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }

    const menuPage = document.createElement("div");
    menuPage.id = "menuPage";


    const mainCourseTitle = document.createElement("h2");
    mainCourseTitle.textContent = "Main Course";
    const sidesTitle = document.createElement("h2");
    sidesTitle.textContent = "Sides";
    menuPage.appendChild(mainCourseTitle);
    menuPage.appendChild(sidesTitle);


    const mainCourse = document.createElement("div");
    mainCourse.id = "mainCourse";

    const mainCourseImg = document.createElement("img");
    mainCourseImg.src = "https://assets.epicurious.com/photos/57eaa24a5a8cf33069fa4f3f/master/pass/roasted-leg-of-wild-boar.jpg";
    mainCourseImg.alt = "Main Course Dish";

    const boarTitle = document.createElement("h3");
    boarTitle.textContent = "Boar and Liquor Feast";

    const boarDescription = document.createElement("p");
    boarDescription.textContent = "The classic feast of Valhalla. The Boar is salughtered fresh every morning and made whole again that evening for the next day. The liquor is fresh from the udders of a goat.";
    
    mainCourse.appendChild(mainCourseImg);
    mainCourse.appendChild(boarTitle);
    mainCourse.appendChild(boarDescription);
    menuPage.appendChild(mainCourse);


    const sides = document.createElement("div");
    sides.id = "sides";


    const sideFish = createSide("https://assets.bonappetit.com/photos/596a428f7654ad34116652c1/16:9/w_1280,c_limit/fried-whole-fish-with-tomatillo-sauce.jpg",
        "Fish side dish",
        "Fish",
        "Excellent freshly caught fish.");
    sides.appendChild(sideFish);


    const sideBread = createSide("https://www.biggerbolderbaking.com/wp-content/uploads/2018/07/3-Ingredient-bread1.jpg",
        "Flatbread side dish",
        "Flatbread",
        "Freshly Baked."
    );
    sides.appendChild(sideBread);


    const sideApple = createSide("https://www.foodandwine.com/thmb/h7XBIk5uparmVpDEyQ9oC7brCpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/A-Feast-of-Apples-FT-2-MAG1123-980271d42b1a489bab239b1466588ca4.jpg",
        "Apples side dish",
        "Apples",
        "Picked from only the best trees."
    );
    sides.appendChild(sideApple);
    

    const sideBeer = createSide("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nqwnenEY4teIDqM4GLUrc-gr9PrAfM8igA&s",
        "Beer side dish",
        "Beer",
        "The best alcohol is found in Valhalla."
    )
    sides.appendChild(sideBeer);


    menuPage.appendChild(sides);

    
    content.appendChild(menuPage);
}

export {loadMenuPage};