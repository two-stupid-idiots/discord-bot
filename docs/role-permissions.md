# Role Permissions

This section is adapted from the [Discord API Types Documentation](https://discord-api-types.dev/api/discord-api-types-v10#PermissionFlagsBits) for your convenience.

1. [List in Discord's order](#1-list-of-all-permissions-in-discords-order)
2. [List in alphabetic order](#2-list-of-all-permissions-in-alphabetic-order)

## 1. List of all permissions in Discord's order

### General

- ViewChannel: bigint
- ManageChannels: bigint
- ManageRoles: bigint
- CreateGuildExpressions: bigint
- ManageGuildExpressions: bigint
- ViewAuditLog: bigint
- ManageWebhooks: bigint
- ManageGuild: bigint

### Members

- CreateInstantInvite: bigint
- ChangeNickname: bigint
- ManageNicknames: bigint
- KickMembers: bigint
- BanMembers: bigint
- ModerateMembers: bigint

### Textchannels

- SendMessages: bigint
- SendMessagesInThreads: bigint
- CreatePublicThreads: bigint
- CreatePrivateThreads: bigint
- EmbedLinks: bigint
- AttachFiles: bigint
- AddReactions: bigint
- UseExternalEmojis: bigint
- UseExternalStickers: bigint
- MentionEveryone: bigint
- ManageMessages: bigint
- ManageThreads: bigint
- ReadMessageHistory: bigint
- SendTTSMessages: bigint
- SendVoiceMessages: bigint
- SendPolls: bigint

### Voice Channels

- Connect: bigint
- Speak: bigint
- Stream: bigint
- UseSoundboard: bigint
- UseExternalSounds: bigint
- UseVAD: bigint
- PrioritySpeaker: bigint
- MuteMembers: bigint
- DeafenMembers: bigint
- MoveMembers: bigint
- **MISSING PERMISSION** `Status`

### Application

- UseApplicationCommands: bigint
- UseEmbeddedActivities: bigint
- UseExternalApps: bigint

### Events

- CreateEvents: bigint
- ManageEvents: bigint

### Admin

- Administrator: bigint

## 2. List of all permissions in alphabetic order

- AddReactions: bigint
- Administrator: bigint
- AttachFiles: bigint
- BanMembers: bigint
- ChangeNickname: bigint
- Connect: bigint
- CreateEvents: bigint
- CreateGuildExpressions: bigint
- CreateInstantInvite: bigint
- CreatePrivateThreads: bigint
- CreatePublicThreads: bigint
- DeafenMembers: bigint
- EmbedLinks: bigint
- KickMembers: bigint
- ManageChannels: bigint
- ManageEmojisAndStickers: bigint
    - ```Allows management and editing of emojis, stickers, and soundboard sounds```
- ManageEvents: bigint
- ManageGuild: bigint
- ManageGuildExpressions: bigint
- ManageMessages: bigint
- ManageNicknames: bigint
- ManageRoles: bigint
- ManageThreads: bigint
- ManageWebhooks: bigint
- MentionEveryone: bigint
- ModerateMembers: bigint
- MoveMembers: bigint
- MuteMembers: bigint
- PrioritySpeaker: bigint
- ReadMessageHistory: bigint
- RequestToSpeak: bigint
- SendMessages: bigint
- SendMessagesInThreads: bigint
- SendPolls: bigint
- SendTTSMessages: bigint
- SendVoiceMessages: bigint
- Speak: bigint
- Stream: bigint
- UseApplicationCommands: bigint
- UseEmbeddedActivities: bigint
- UseExternalApps: bigint
- UseExternalEmojis: bigint
- UseExternalSounds: bigint
- UseExternalStickers: bigint
- UseSoundboard: bigint
- RequestToSpeak: bigint
- ViewAuditLog: bigint
- ViewChannel: bigint
- ViewCreatorMonetizationAnalytics: bigint
    - ```Allows for viewing role subscription insights```
- ViewGuildInsights: bigint
    - ```Allows for viewing guild insights```