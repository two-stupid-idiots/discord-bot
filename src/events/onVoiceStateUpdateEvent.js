import logger from '../logger.js';
import { moveMemberToNewChannel } from '../services/channelService.js';

export default function(client) {
	client.on('voiceStateUpdate', async (oldState, newState) => {
		if (oldState.channelId !== newState.channelId) {
			const targetChannelName = process.env.JOIN_TO_CREATE_CHANNEL_NAME;
			const joinToCreateCategoryName = process.env.JOIN_TO_CREATE_CATEGORY_NAME;
			const joinToCreateCategory = newState.guild.channels.cache.find(c => c.name === joinToCreateCategoryName && c.type === 4);
			if (newState.channel && newState.channel.name === targetChannelName) {
				logger.info(`Member ${newState.member.user.tag} joined channel ${newState.channel.name}`);
				try {
					await moveMemberToNewChannel(newState.guild, newState.member);
				}
				catch (error) {
					logger.error(`Failed to create new Channel for Member:`, error);
				}
			}
			if (oldState.channel && oldState.channel.parent === joinToCreateCategory && oldState.channel.members.size === 0 && oldState.channel.name !== targetChannelName) {
				logger.info(`Channel ${oldState.channel.name} is empty and will be deleted`);
				try {
					await oldState.channel.delete();
				}
				catch (error) {
					logger.error(`Failed to delete Channel:`, error);
				}
			}
		}
	});
}
