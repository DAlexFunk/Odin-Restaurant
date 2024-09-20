import "./styles.css";
import { loadHomePage } from "./pages/homePage";

loadHomePage();

const homeButton = document.querySelector("button#home");
homeButton.addEventListener("click", loadHomePage);