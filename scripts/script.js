import { startApp } from "./startApp.js";
import axios from "../node_modules/axios";

const getAxios = async () => {
	const data = await axios.get("https://reqres.in/api/users");
	console.log(data);
};

document.querySelector("body > header > nav > a:nth-child(2)").addEventListener("click", () => {
	getAxios();
});

document.querySelector('#city-name').addEventListener('keyup', (event) => {
	(event.code === "Enter") ? startApp() : null;
});
document.querySelector('#submit-search').addEventListener('click', startApp);
