export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DISCORD_TOKEN: string;
			GUILD_ID: string;
			DEVELOPER_USER_ID: string;
		}
	}
}
