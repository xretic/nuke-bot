import { Guild } from "discord.js";
import Config from "../config/Config";

export default async (guild: Guild): Promise<void> => {
	if (Config.RemoveRoles) {
		guild.roles.cache.forEach(async (role) => {
			await role.delete().catch(() => {});
		});
	}
};
