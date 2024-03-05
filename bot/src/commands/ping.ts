import { CommandInteraction, SlashCommandBuilder } from "discord.js";

const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Paing Pong!");

async function execute(interaction: CommandInteraction) {
  return interaction.reply("Paing Pong!");
}

export default {
  data,
  execute
};
