import logger from '../logger.js';

export const moveMemberToNewChannel = async (guild, member) => {
  const categoryName = process.env.JOIN_TO_CREATE_CATEGORY_NAME;
  const channelName = `${process.env.USER_CHANNEL_ICON} ${member.user.username}'s ${process.env.USER_CHANNEL_NAME}`;
  try {
    const category = guild.channels.cache.find(c => c.name === categoryName && c.type === 4);
    if (!category) {
      throw new Error(`Category ${categoryName} not found`);
    }
    const channel = await guild.channels.create({
      name: channelName,
      type: 2,
      parent: category.id
    });
    logger.info(`Channel ${channel.name} created under category ${category.name}`);
    await member.voice.setChannel(channel);
    logger.info(`Member ${member.user.tag} moved to channel ${channel.name}`);
  } catch (error) {
    logger.error('Error create channel for member: ', error);
  }
}
