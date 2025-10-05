import logger from '../logger.js';

export default function(client, GUILD_ID) {
	// Event listener for when the client is ready
	client.once('clientReady', async () => {
		try {
			// Load guild
			const partialGuild = await client.guilds.fetch(GUILD_ID);
			const guild = await partialGuild.fetch();

			// Check if guild is available
			if (!guild) {
				logger.error('Guild not found');
				process.exit(1);
			}

			logger.info(`Connected to guild: ${guild.name} [${guild.id}]`);
		} catch (error) {
			logger.error('Error during client ready event: ', error);
		}
	});
}
