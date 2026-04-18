const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`✅ Bot đã online: ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  try {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'send') {
      const message = interaction.options.getString('noidung');

      console.log("Nhận lệnh:", message);

      await interaction.channel.send(message);

      await interaction.reply({
  content: '✅ Đã gửi ẩn danh!',
  ephemeral: true
});
    }
  } catch (err) {
    console.error("Lỗi:", err);
  }
});

client.login('MTQ5NDkzNTU4MjYyMTcwMDEyNg.GW1SgL.UYCOtXbPmJ-fm0m93PsMOVduOOB0SNUef9oP0Q');