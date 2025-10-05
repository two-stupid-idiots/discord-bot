# Discord bot

Configuration of our discord bot.

## Content

- [Requirements](#requirements)
- [Pre-Installation](#pre-installation)
- [Installation](#installation)

## Requirements

- Configured Discord bot (see [create bot](#create-bot))

- **Option 1: [`node.js`](#option-1-nodejs)**
  - `Node.js` (version 22.13.0)
  - `npm` (version 11.0.0)

- **Option 2: [`Docker`](#option-2-docker)**
  - `Docker` and `Docker Compose` (Official [Docker Engine](https://docs.docker.com/engine/install/ubuntu/))


## Pre-Installation

### Create bot

To create a Application and configure a Bot in **Discord Developer Portal**, follow these steps:

1. Visit the [Discord Developer Portal](https://discord.com/developers)
2. Create new Application
3. Configure Bot Settings:
    - Go to **Settings** -> **Bot** -> **Privilaged Gateway Intents**
    - Toggle `presence intent`, `server members intent` `message content intent`
4. Generate OAuth2 URL
    - Go to **Settings** -> **OAuth2** -> **URL Generator**
    - `scope` = `bot`
    - `bot permissions` = `administrator`
5. Copy Token
    - Go to **Settings** -> **Bot** -> **Token**
    - Token can only be viewed once when created.
    - Copy this token and save it.

## Installation

### 1 Download

Clone this repo to your device.

### 2 Create Environment Variable File

  #### 2.1 Copy example file

  ```sh
  cp .env.example .env
  ```

  #### 2.2 Fill in the required information

  | Option | Value |
  | --- | --- |
  | `DISCORD_TOKEN` | Your Discord Bot Token |
  | `GUILD_ID` | Your Guild/Server ID |
  | `JOIN_TO_CREATE_CATEGORY_NAME` | Category name for join-to-create channels |
  | `JOIN_TO_CREATE_CHANNEL_NAME` | Channel name for join-to-create functionality |
  | `USER_CHANNEL_ICON` | Icon for user channels |
  | `USER_CHANNEL_NAME` | Name template for user channels |
  | `MEMBER_ROLE_NAME` | Name of the member role |

## Option 1: `Node.js`

  ### 1.1 Install packages

  ```sh
  npm install
  ```

  ### 1.2 Start Bot

  ```sh
  npm start
  ```

## Option 2: `Docker`

  ### 2.1 Start Docker Container

  ```sh
  docker compose up -d -build
  ```
