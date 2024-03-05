import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import {deployCommands} from "../deploy-commands";
import {commands} from "./index";

const data = new SlashCommandBuilder()
  .setName("deploy")
  .setDescription("Deploys the bot's commands");

async function execute(interaction: CommandInteraction) {
  try {
    if (interaction.guildId) {
      await deployCommands({ guildId: interaction.guildId, commands });
      return interaction.reply("Commands redeployed");
    }

    console.error("Guild ID is not defined");
  } catch (e) {
    console.error(e);
  }
}

export default {
  data,
  execute
};
