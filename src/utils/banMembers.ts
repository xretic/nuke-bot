import { Guild } from "discord.js";
import Config from "../config/Config";

export default async (guild: Guild): Promise<void> => {
	if (Config.BanMembers) {
		const members = guild.members.cache.filter((member) => !member.user.bot);

		members.forEach(async (member) => {
			await member.ban().catch(() => {});
		});
	}
};