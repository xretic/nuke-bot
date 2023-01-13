import { Guild } from "discord.js";

export default async (guild: Guild): Promise<void> => {
	if (process.env.REMOVE_ROLES) {
		guild.roles.cache.forEach(async (role) => {
			await role.delete().catch(() => {});
		});
	}
};
