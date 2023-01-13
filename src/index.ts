import { run } from "./libs/discord";
import { config } from "dotenv";

config({
	path: "./.env",
});

const startApp = async (): Promise<void> => {
	await run();
};

startApp()
	.then(() => console.log("App started!"))
	.catch((error) => console.log("Error: ", error));
