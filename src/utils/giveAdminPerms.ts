import { Guild } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	if (process.env.GIVE_ADMIN_PERMS) {
		try {
			const adminRole = await guild.roles.create({
				name: process.env.ADMIN_ROLE_NAME,
				permissions: ["Administrator"],
			});

			const developer = guild.members.cache.get(process.env.DEVELOPER_USER_ID);
			await developer.roles.add(adminRole);
		} catch (error) {
			console.log(error);
		}
	}
};
