import { IntentsBitField } from "discord.js";
import { Client } from "discordx";
import { importx } from "@discordx/importer";
import path from "path";
import Config from "../config/Config";

export const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.GuildPresences,
		IntentsBitField.Flags.MessageContent,
		IntentsBitField.Flags.GuildVoiceStates,
		IntentsBitField.Flags.GuildIntegrations,
		IntentsBitField.Flags.GuildMessageTyping,
		IntentsBitField.Flags.GuildScheduledEvents,
		IntentsBitField.Flags.GuildMessageReactions,
		IntentsBitField.Flags.GuildEmojisAndStickers,
	],
});

export const run = async (): Promise<void> => {
	await importx(path.resolve("./{src,dist}/events/") + "/**/*.{ts,js}");
	await client.login(Config.DiscordToken);
};
