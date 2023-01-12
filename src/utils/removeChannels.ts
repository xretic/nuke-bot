import { Guild } from "discord.js";
import Config from "../config/Config";

export default async (guild: Guild): Promise<void> => {
	if (Config.RemoveChannels) {
		guild.channels.cache.forEach(async (channel) => {
			await channel.delete().catch(() => {});
		});
	}
};
