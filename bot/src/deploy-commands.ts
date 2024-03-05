import {REST, Routes, SlashCommandBuilder} from "discord.js";
import { config } from "./config";
import {Command} from "./models/command";

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);

type DeployCommandsProps = {
  guildId: string;
  commands: Map<string, Command>;
};

export async function deployCommands({ guildId, commands }: DeployCommandsProps) {
  const commandsData: SlashCommandBuilder[] = [];
  commands.forEach((value, key) => commandsData.push(value.data));
  
  try {
    console.log("Started refreshing application (/) commands.");

    const response = await rest.put(
      Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, guildId),
      {
        body: commandsData,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
}
