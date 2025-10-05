import logger from '../logger.js';

export const assignMemberRole = async (member) => {
  try {
    const memberRole = member.guild.roles.cache.find(role => role.name === process.env.MEMBER_ROLE_NAME);
    if (memberRole) {
      await member.roles.add(memberRole);
    }
  } catch (error) {
    logger.error('Assign member role: ', error);
  }
}