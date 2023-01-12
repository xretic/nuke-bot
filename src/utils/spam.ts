import { Guild } from "discord.js";
import Config from "../config/Config";
import axios from "axios";

export default async (guild: Guild): Promise<void> => {
	if (Config.Spam) {
		const members = guild.members.cache.filter((member) => !member.user.bot);

		members.forEach(async (member) => {
			try {
				const token =
					Config.SpamTokens[
						Math.floor(Math.random() * Config.SpamTokens.length)
					];

				const request = await axios.post(
					`https://discord.com/api/v9/users/@me/channels`,
					{
						recipient_id: member.id,
					},
					{
						headers: {
							authorization: "Bot " + token,
						},
					}
				);

				let content: string = Config.SpamText;

				if (Config.SpamPingUser) {
					content = member.toString() + " " + content;
				}

				await axios
					.post(
						`https://discord.com/api/v9/channels/${request.data.id}/messages`,
						{
							content: content,
						},
						{
							headers: {
								authorization: "Bot " + token,
							},
						}
					)
					.then((res) => {
						if (res.data.code) {
							console.log(`Сообщение не было доставлено ${member.id}`);
						} else {
							console.log(`Сообщение доставлено ${member.id}`);
						}
					});
			} catch {
				console.log(`Сообщение не было доставлено ${member.id}`);
			}
		});
	}
};
