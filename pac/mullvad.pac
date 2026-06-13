function FindProxyForURL(url, host) {
    var proxies = [
        "SOCKS5 ch-zrh-wg-socks5-004.relays.mullvad.net:1080",
        "SOCKS5 gb-lon-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 al-tia-wg-socks5-003.relays.mullvad.net:1080",
        "SOCKS5 gb-lon-wg-socks5-304.relays.mullvad.net:1080",
        "SOCKS5 it-pmo-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 at-vie-wg-socks5-102.relays.mullvad.net:1080",
        "SOCKS5 hu-bud-wg-socks5-101.relays.mullvad.net:1080",
        "SOCKS5 al-tia-wg-socks5-004.relays.mullvad.net:1080",
        "SOCKS5 hu-bud-wg-socks5-102.relays.mullvad.net:1080",
        "SOCKS5 gb-lon-wg-socks5-204.relays.mullvad.net:1080",
        "SOCKS5 sk-bts-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 de-dus-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 se-sto-wg-socks5-010.relays.mullvad.net:1080",
        "SOCKS5 es-bcn-wg-socks5-102.relays.mullvad.net:1080",
        "SOCKS5 pl-waw-wg-socks5-101.relays.mullvad.net:1080",
        "SOCKS5 gb-mnc-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 es-bcn-wg-socks5-101.relays.mullvad.net:1080",
        "SOCKS5 no-osl-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 hr-zag-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 gb-mnc-wg-socks5-201.relays.mullvad.net:1080",
        "SOCKS5 es-mad-wg-socks5-201.relays.mullvad.net:1080",
        "SOCKS5 se-mma-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 se-sto-wg-socks5-007.relays.mullvad.net:1080",
        "SOCKS5 gb-glw-wg-socks5-002.relays.mullvad.net:1080",
    ];
    var i = Math.floor(Math.random() * proxies.length);
    return proxies[i];
}
