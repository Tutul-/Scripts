include(["Engines", "Wine", "QuickScript", "SteamScript"]);

new SteamScript()
    .name("Consortium: The Tower (Demo)")
    .editor("Interdimensional Games Inc")
    .author("Plata")
    .appId(726310)
    .wineVersion(LATEST_STAGING_VERSION)
    .wineDistribution("staging")
    .wineArchitecture("amd64")
    .go();
