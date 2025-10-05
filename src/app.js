import dotenv from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';
import logger from './logger.js';
import handleOnReady from './events/onReadyEvent.js';
import handleNewGuildMember from './events/newGuildMemberEvent.js';
import handleOnVoiceStateUpdate from './events/onVoiceStateUpdateEvent.js';

dotenv.config({ quiet: true });

// Load environment variables
const DISCORD_API_TOKEN = process.env.DISCORD_API_TOKEN;
const GUILD_ID = process.env.GUILD_ID;
const JOIN_TO_CREATE_CATEGORY_NAME = process.env.JOIN_TO_CREATE_CATEGORY_NAME;
const JOIN_TO_CREATE_CHANNEL_NAME = process.env.JOIN_TO_CREATE_CHANNEL_NAME;
const USER_CHANNEL_ICON = process.env.USER_CHANNEL_ICON;
const USER_CHANNEL_NAME = process.env.USER_CHANNEL_NAME;
const MEMBER_ROLE_NAME = process.env.MEMBER_ROLE_NAME;

// Log all environment variables
logger.info('Environment variables loaded:');
logger.info(`DISCORD_API_TOKEN: ${DISCORD_API_TOKEN ? '[SET]' : '[NOT SET]'}`);
logger.info(`GUILD_ID: ${GUILD_ID || '[NOT SET]'}`);
logger.info(`JOIN_TO_CREATE_CATEGORY_NAME: ${JOIN_TO_CREATE_CATEGORY_NAME || '[NOT SET]'}`);
logger.info(`JOIN_TO_CREATE_CHANNEL_NAME: ${JOIN_TO_CREATE_CHANNEL_NAME || '[NOT SET]'}`);
logger.info(`USER_CHANNEL_ICON: ${USER_CHANNEL_ICON || '[NOT SET]'}`);
logger.info(`USER_CHANNEL_NAME: ${USER_CHANNEL_NAME || '[NOT SET]'}`);
logger.info(`MEMBER_ROLE_NAME: ${MEMBER_ROLE_NAME || '[NOT SET]'}`);

// Create a new Discord client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildVoiceStates
	]
});

// Setup event handlers
handleNewGuildMember(client);
handleOnVoiceStateUpdate(client);
handleOnReady(client, GUILD_ID);

// Login to Discord API
client.login(DISCORD_API_TOKEN)
	.then(() => logger.info('Logged in successfully'))
	.catch(error => logger.error('Login failed: ', error));
