import { run } from "./libs/discord";
import { config } from "dotenv";
import settings from "../settings.json";

config({
	path: "./.env",
});

export const nukeConfig = settings;

const startApp = async (): Promise<void> => {
	await run();
};

startApp()
	.then(() => console.log("App started!"))
	.catch((error) => console.log("Error: ", error));
