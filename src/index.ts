import { run } from "./libs/discord";

const startApp = async (): Promise<void> => {
	await run();
};

startApp()
	.then(() => console.log("App started!"))
	.catch((error) => console.log("Error: ", error));
