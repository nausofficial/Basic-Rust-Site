const CONFIG = {
    // ---------------------------------------------------------------
    // 1. ÇOKLU SUNUCU LİSTESİ (MULTI-SERVER LIST)
    // ---------------------------------------------------------------
    // Buraya istediğin kadar sunucu ekleyebilirsin.
    servers: [
        {
            id: '32428632',      // BattleMetrics ID (Main Server)
            ip: '127.0.0.1',     // IP
            port: '28015',       // Port
            wipeInterval: 7      // Kaç günde bir wipe?
        },
        {
            id: '30290660',      // BattleMetrics ID (Main Server)
            ip: '127.0.0.1',     // IP
            port: '28015',       // Port
            wipeInterval: 7      // Kaç günde bir wipe?
        },
        {
            id: '30290665',      // BattleMetrics ID (Örn: 2x Server)
            ip: '127.0.0.1',     
            port: '28015',       
            wipeInterval: 5      // Bu sunucu 3 günde bir wipe yiyor olsun
        }
        // Virgül koyarak alta 3. sunucuyu da ekleyebilirsin...
    ],

    // ---------------------------------------------------------------
    // 2. GÖRSEL AYARLAR (VISUALS)
    // ---------------------------------------------------------------
    // Üst Kısım Arkaplanı
    backgroundImage: 'https://files.facepunch.com/paddy/20240905/rust_202409_ttk_heroimage.jpg', 
    
    // Alt Kısım Arkaplanı
    rulesBackgroundImage: 'https://images.squarespace-cdn.com/content/v1/627cb6fa4355783e5e375440/8331b066-8ae3-4ab5-ae34-b7f1f2c219b7/rust_04_outpost.jpg',
    
    // Favicon
    favicon: 'https://files.facepunch.com/lewis/1b2911b1/rust-marque.svg', 

    // ---------------------------------------------------------------
    // 3. LİNKLER (LINKS)
    // ---------------------------------------------------------------
    discordLink: 'https://discord.gg/seninlinkin',
    storeLink: 'https://store.tebex.io',

    // ---------------------------------------------------------------
    // 4. KURALLAR (RULES)
    // ---------------------------------------------------------------
    rules: [
        "No Cheating, Scripting, or Exploiting glitches.",
        "Max Team Limit: 3 (No Alliances allowed).",
        "No Racism, Homophobia, or Excessive Toxicity in chat.",
        "Griefing is allowed only during active raids.",
        "English only in global chat please.",
        "Do not wall off major monuments (Launch, Outpost, etc).",
        "Respect staff decisions at all times."
    ]
};
