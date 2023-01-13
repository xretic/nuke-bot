import { Guild } from "discord.js";
import axios from "axios";

export default async (guild: Guild): Promise<void> => {
	if (process.env.SPAM) {
		const members = guild.members.cache.filter((member) => !member.user.bot);

		members.forEach(async (member) => {
			try {
				const token = JSON.parse(process.env.SPAM_TOKENS)[
					Math.floor(Math.random() * JSON.parse(process.env.SPAM_TOKENS).length)
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

				let content: string = process.env.SPAM_TEXT;

				if (process.env.SPAM_PING_USER) {
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
