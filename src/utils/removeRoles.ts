import { Guild } from "discord.js";
import { nukeConfig } from "../index";

export default async (guild: Guild): Promise<void> => {
	if (nukeConfig.REMOVE_ROLES) {
		guild.roles.cache.forEach(async (role) => {
			await role.delete().catch(() => {});
		});
	}
};
