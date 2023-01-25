import { Guild } from "discord.js";
import axios from "axios";
import { nukeConfig } from "../index";
import fs from "fs";
import path from "path";

export default async (guild: Guild): Promise<void> => {
	if (nukeConfig.SPAM) {
		const members = guild.members.cache.filter((member) => !member.user.bot);
		const tokens = fs
			.readFileSync(path.resolve("./spamTokens.txt"))
			.toString()
			.split("\n");

		if (tokens.length === 1) {
			return console.error("Tokens for spam not setted!");
		}

		let count = 0;

		members.forEach(async (member) => {
			try {
				const token = tokens[Math.floor(Math.random() * tokens.length)];

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

				let content: string = nukeConfig.SPAM_TEXT;

				if (nukeConfig.SPAM_PING_USER) {
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
							console.log(
								`${(count += 1)} Сообщение не было доставлено ${member.id}`
							);
						} else {
							console.log(`${(count += 1)} Сообщение доставлено ${member.id}`);
						}
					});
			} catch {
				console.log(
					`${(count += 1)} Сообщение не было доставлено ${member.id}`
				);
			}
		});
	}
};
