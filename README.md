# 🌲 Rust Server Website Template

![Site Preview](https://github.com/nausofficial/Basic-Rust-Site/blob/main/Site.png)

A free, modern, and automatic website for your Rust server. It updates player counts, wipe dates, and map info automatically using BattleMetrics.

**No coding required.** Just edit `config.js`.

## ✨ Features
* **Auto-Update:** Player count & Status (Online/Offline).
* **Auto-Wipe:** Calculates Next Wipe date automatically (+Days).
* **Auto-Map:** Shows the current map seed & size.
* **Mobile Ready:** Looks great on phones.

## 🛠️ How to Use

1. **Download** `index.html` and `config.js` from this repository.
2. **Open** `config.js` with a text editor (Notepad, VS Code).
3. **Edit** the settings (Server ID, IP, Links).
4. **Upload** the files to your GitHub repository or Host.

## ⚙️ Configuration (`config.js`)

You only need to change this file.

```javascript
const CONFIG = {
    serverID: 'YOUR_BATTLEMETRICS_ID', // Get from URL: [battlemetrics.com/servers/rust/123456](https://battlemetrics.com/servers/rust/123456)
    ip: '127.0.0.1',                   // Server IP
    port: '28015',                     // Server Port
    wipeIntervalDays: 7,               // How many days between wipes?
    
    // Visuals
    backgroundImage: 'YOUR_IMAGE_LINK', 
    favicon: 'YOUR_LOGO_LINK',
    serverName: 'MY RUST SERVER',      // Your server name

    // Links
    discordLink: '[https://discord.gg/yourserver](https://discord.gg/yourserver)',
    storeLink: '[https://yourstore.tebex.io](https://yourstore.tebex.io)'
};
```

## 🚀 Roadmap & Planned Features

We are constantly working to improve the player experience. Here are the features planned for the next updates:

### 1. 🏆 Live Leaderboard
**Description:** A section displaying the top players based on kills, deaths, and playtime.
* **Why:** To spark competition among players and encourage them to play more to reach the top 10.
* **Status: In Research (BattleMetrics API integration)**

### 2. 📜 Rules Modal
**Description:** A dedicated pop-up window listing all server rules (Group limits, Griefing policies, Chat rules).
* **Why:** Players often forget rules. Having them accessible on the site without needing to join Discord reduces admin workload.
* **Status: ✅**

### 3. 📦 Kit & VIP Previews
**Description:** Visual cards showing what's inside the "Starter", "VIP", and "Raider" kits.
* **Why:** Visuals sell better. Players are more likely to buy a VIP package if they can see the exact loot they will get on the website.
* **Status: Planned**

### 4. 🗳️ Vote & Reward Section**Description:** Direct links to server voting sites (like Rust-Servers.net) with a guide on how to claim in-game loot.
* **Why:** Voting boosts the server's rank globally, bringing in more fresh players. A clear "Vote for Loot" section increases participation.
* **Status: Planned**

### 5. 📢 Recent News Ticker
**Description:** A small scrolling text bar showing the latest updates (e.g., "Map Wiped!", "Event at 8 PM", "New Kit Added").
* **Why:** Keeps the website dynamic and informs visitors about immediate happenings without checking Discord.
* **Status: Planned**

### 6. 🌍 Multi-Server Support
**Description:** A feature to list and monitor multiple game servers (e.g., Main, 2x, 10x) on a single website tab.
* **Why:** Communities often host multiple servers. This allows players to see the status and population of all servers at a glance without switching pages.
* **Status: Planned**
