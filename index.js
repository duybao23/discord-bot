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

client.login('process.env.MTQ5NDkzNTU4MjYyMTcwMDEyNg.GHLQvk.UhdU81gub_MTjci5zViaVDeJr6Ui1-fdOj3_LU');
