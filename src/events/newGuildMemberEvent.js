import logger from '../logger.js';
import { assignMemberRole } from '../services/roleService.js';

export default function(client) {
  client.on('guildMemberAdd', async (member) => {
    logger.info(`New member joined: ${member.user.tag}`);
    try {
      await assignMemberRole(member);
      logger.info(`Member role assigned to ${member.user.tag}`);
    } catch (error) {
      logger.error(`Failed to assign member role to ${member.user.tag}:`, error);
    }
  });
}
