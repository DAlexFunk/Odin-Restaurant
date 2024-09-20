import "./styles.css";
import { loadHomePage } from "./pages/homePage";
import { loadMenuPage } from "./pages/menuPage";

loadHomePage();

const homeButton = document.querySelector("button#home");
homeButton.addEventListener("click", loadHomePage);

const menuButton = document.querySelector("button#menu");
menuButton.addEventListener("click", loadMenuPage);