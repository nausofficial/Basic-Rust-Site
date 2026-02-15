const CONFIG = {
    // ---------------------------------------------------------------
    // 1. ÇOKLU SUNUCU LİSTESİ (MULTI-SERVER LIST)
    // ---------------------------------------------------------------
    // Buraya istediğin kadar sunucu ekleyebilirsin.
    servers: [
        {
            id: '30290667',      // BattleMetrics ID (Main Server)
            ip: '127.0.0.1',     // IP
            port: '28015',       // Port
            wipeInterval: 7      // Kaç günde bir wipe?
        },
        {
            id: '30290665',      // BattleMetrics ID (Örn: 2x Server)
            ip: '127.0.0.1',     
            port: '28015',       
            wipeInterval: 5      // Bu sunucu 3 günde bir wipe yiyor olsun
        },        
        {
            id: '30290660',      // BattleMetrics ID (Main Server)
            ip: '127.0.0.1',     // IP
            port: '28015',       // Port
            wipeInterval: 7      // Kaç günde bir wipe?
        }
        // Virgül koyarak alta 3. sunucuyu da ekleyebilirsin...
    ],

// ---------------------------------------------------------------
    // 2. DUYURU BANDI (YENİ!) - NEWS TICKER
    // ---------------------------------------------------------------
    // Buraya yazdığın mesajlar sitenin en üstünde kayan yazı olarak çıkar.
    newsMessages: [
        "📢 MAP WIPED JUST NOW! JOIN FAST!",
        "🔥 Double Sulfur Weekend Event is LIVE.",
        "🎁 Join our Discord for VIP Giveaways.",
        "⚠️ Server restart at 4:00 AM EST."
    ],

    // ---------------------------------------------------------------
    // 3. GÖRSEL AYARLAR
    // ---------------------------------------------------------------
    backgroundImage: 'https://files.facepunch.com/paddy/20240905/rust_202409_ttk_heroimage.jpg', 
    rulesBackgroundImage: 'https://images.squarespace-cdn.com/content/v1/627cb6fa4355783e5e375440/8331b066-8ae3-4ab5-ae34-b7f1f2c219b7/rust_04_outpost.jpg',
    favicon: 'https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg', 

    // ---------------------------------------------------------------
    // 4. LİNKLER
    // ---------------------------------------------------------------
    discordLink: 'https://discord.gg/seninlinkin',
    storeLink: 'https://store.tebex.io',

    // ---------------------------------------------------------------
    // 5. KURALLAR
    // ---------------------------------------------------------------
    rules: [
        "No Cheating, Scripting, or Exploiting glitches.",
        "Max Team Limit: 3 (No Alliances allowed).",
        "No Racism, Homophobia, or Excessive Toxicity in chat.",
        "Griefing is allowed only during active raids.",
        "English only in global chat please.",
        "Respect staff decisions at all times."
    ]
};
