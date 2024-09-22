import "./styles.css";
import { loadHomePage } from "./pages/homePage";
import { loadMenuPage } from "./pages/menuPage";
import { loadAboutPage } from "./pages/aboutPage";

loadHomePage();

const homeButton = document.querySelector("button#home");
homeButton.addEventListener("click", loadHomePage);

const menuButton = document.querySelector("button#menu");
menuButton.addEventListener("click", loadMenuPage);

const aboutButton = document.querySelector("button#about");
aboutButton.addEventListener("click", loadAboutPage);