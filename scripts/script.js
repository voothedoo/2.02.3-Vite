import { startApp } from "./startApp.js";

//testing Axios with some random API, then it's the regular code for the weather app.
import axios from "../node_modules/axios";
const getAxios = async () => {
	const data = await axios.get("https://reqres.in/api/users");
	console.log(data);
};

//script.js code below
document.querySelector("body > header > nav > a:nth-child(2)").addEventListener("click", () => {
	getAxios();
});

document.querySelector('#city-name').addEventListener('keyup', (event) => {
	(event.code === "Enter") ? startApp() : null;
});
document.querySelector('#submit-search').addEventListener('click', startApp);
