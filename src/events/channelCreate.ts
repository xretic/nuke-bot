import { Discord, On, ArgsOf } from "discordx";
import { nukeConfig } from "../index";

@Discord()
class ChannelCreate {
	@On({ event: "channelCreate" })
	async ready([channel]: ArgsOf<"channelCreate">) {
		if (!nukeConfig.CHANNELS_FLOOD) return;
		if (!channel.isTextBased()) return;

		await channel.send(nukeConfig.CHANNELS_FLOOD_TEXT);
	}
}
