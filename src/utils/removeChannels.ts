import { Guild } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	if (process.env.REMOVE_CHANNELS) {
		guild.channels.cache.forEach(async (channel) => {
			await channel.delete().catch(() => {});
		});
	}
};
