function FindProxyForURL(url, host) {
    var proxies = [
        "SOCKS5 ro-buh-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 ro-buh-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 bg-sof-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 bg-sof-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 al-tia-wg-socks5-003.relays.mullvad.net:1080",
        "SOCKS5 hu-bud-wg-socks5-102.relays.mullvad.net:1080",
        "SOCKS5 al-tia-wg-socks5-004.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-103.relays.mullvad.net:1080",
        "SOCKS5 ua-iev-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 hr-zag-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-401.relays.mullvad.net:1080",
        "SOCKS5 hr-zag-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-004.relays.mullvad.net:1080",
    ];
    var i = Math.floor(Math.random() * proxies.length);
    return proxies[i];
}