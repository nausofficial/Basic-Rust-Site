# 🌲 Rust Server Website Template

![Site Preview](https://raw.githubusercontent.com/nausofficial/Basic-Rust-Site/refs/heads/main/Site.png)

![Site Preview](https://github.com/nausofficial/Basic-Rust-Site/blob/main/Site2.png)

A free, modern, and automatic website for your Rust server. It updates player counts, wipe dates, and map info automatically using BattleMetrics.

**No backend coding required.** Everything is managed via `config.js` and `kits.js`.

## ✨ Features
* **🌍 Multi-Server Support:** List unlimited servers (Main, 2x, 10x) side-by-side.
* **🛍️ Premium Store UI:** Visual kit cards with glassmorphism & glow effects.
* **📢 Live News Ticker:** Scrolling announcement bar at the top.
* **🔄 Auto-Update:** Player count & Status (Online/Offline) from BattleMetrics.
* **📅 Auto-Wipe:** Calculates Next Wipe date automatically (+Days).
* **🗺️ Auto-Map:** Shows the current map seed & size.
* **📱 Mobile Ready:** Looks great on phones.

## 🛠️ How to Use

1.  **Download** or Clone this repository.
2.  **Edit** `config.js` for server settings.
3.  **Edit** `kits.js` for store packages.
4. **Upload** the files to your GitHub repository or Host.

## ⚙️ Configuration

### 1. Server & General Settings (`config.js`)
Manage your servers, links, and visuals here.

```javascript
const CONFIG = {
    // Add your servers here
    servers: [
        {
            id: '32428632',      // BattleMetrics ID
            ip: '127.0.0.1',     // Server IP
            port: '28015',       // Port
            wipeInterval: 7      // Days between wipes
        },
        {
            id: '12345678',      // Second Server
            ip: '127.0.0.1',     
            port: '28025',       
            wipeInterval: 3      
        }
    ],
    
    // Scrolling News Ticker
    newsMessages: [
        "📢 MAP WIPED JUST NOW!",
        "🔥 VIP Giveaways on Discord!",
        "⚠️ Server Restart at 04:00 AM."
    ],

    // Visuals & Links
    backgroundImage: 'YOUR_IMAGE_LINK', 
    discordLink: '[https://discord.gg/yourserver](https://discord.gg/yourserver)',
    storeLink: '[https://rustbasicsitestore.tebex.io](https://store.tebex.io)'
};
```
2. Store & Kits Settings (kits.js)
Manage the kits displayed in the "Store" modal. You can define custom colors for the Glow Effect.

```javascript
const KITS = [
    {
        id: 'vip',
        name: 'VIP KIT',
        price: '$10.00',
        image: '[https://link-to-image.png](https://link-to-image.png)',
        tebexPackageId: '[https://store.tebex.io/package/123456](https://store.tebex.io/package/123456)', 
        contents: [
            "1x AK-47",
            "Metal Gear Set",
            "Skip Queue"
        ],
        color: '#f1c40f' // Gold Glow Effect
    },
    {
        id: 'raider',
        name: 'RAIDER KIT',
        price: '$25.00',
        image: '[https://link-to-image.png](https://link-to-image.png)',
        tebexPackageId: '...', 
        contents: ["C4", "Rockets"],
        color: '#e74c3c' // Red Glow Effect
    }
];
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
* **Status: ✅**

### 4. 🗳️ Vote & Reward Section**Description:** Direct links to server voting sites (like Rust-Servers.net) with a guide on how to claim in-game loot.
* **Why:** Voting boosts the server's rank globally, bringing in more fresh players. A clear "Vote for Loot" section increases participation.
* **Status: Planned**

### 5. 📢 Recent News Ticker
**Description:** A small scrolling text bar showing the latest updates (e.g., "Map Wiped!", "Event at 8 PM", "New Kit Added").
* **Why:** Keeps the website dynamic and informs visitors about immediate happenings without checking Discord.
* **Status: ✅**

### 6. 🌍 Multi-Server Support
**Description:** A feature to list and monitor multiple game servers (e.g., Main, 2x, 10x) on a single website tab.
* **Why:** Communities often host multiple servers. This allows players to see the status and population of all servers at a glance without switching pages.
* **Status: ✅**
