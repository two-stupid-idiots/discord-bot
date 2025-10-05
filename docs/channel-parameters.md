# Channel Parameters

This section is adapted from the [Discord Developer Portal](https://discord.com/developers/docs/resources/channel#modify-channel-json-params-guild-channel) for your convenience.

1. [List in Discord Client order]()
2. [List in Discord Developer Portal order]()

## 1. List of all parameters in Discord Client order

### General

- type: integer ([Channel Types](https://discord.com/developers/docs/resources/channel#channel-object-channel-types))

### Overview

- name: string
- topic: ?string
- rate_limit_per_user: ?integer
- nsfw: ?boolean
- default_auto_archive_duration: ?integer

### Authorization

- permission_overwrites: ?array ([Objects](https://discord.com/developers/docs/resources/channel#overwrite-object))

### Invite

- **MISSING**

### Integration

## 2. List of all parameters in Discord Developer Portal order

- name: string
- type: integer ([Channel Types](https://discord.com/developers/docs/resources/channel#channel-object-channel-types))
- position: ?integer
- topic: ?string
- nsfw: ?boolean
- rate_limit_per_user: ?integer
- bitrate: ?integer
- user_limit: ?integer
- permission_overwrites: ?array ([Objects](https://discord.com/developers/docs/resources/channel#overwrite-object))
- parent_id: ?snowflake
- rtc_region: ?string
- video_quality_mode: ?integer
- default_auto_archive_duration: ?integer
- flags?: integer
- available_tags?: array ([Objects](https://discord.com/developers/docs/resources/channel#forum-tag-object))
- default_reaction_emoji?: ?default reaction object ([Objects](https://discord.com/developers/docs/resources/channel#default-reaction-object))
- default_thread_rate_limit_per_user?: integer
- default_sort_order?: ?integer
- default_forum_layout?: integer