function FindProxyForURL(url, host) {
    var proxies = [
        "SOCKS5 ch-zrh-wg-socks5-006.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-402.relays.mullvad.net:1080",
        "SOCKS5 it-mil-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-006.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-403.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-004.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-003.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-402.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-008.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-301.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-303.relays.mullvad.net:1080",
        "SOCKS5 de-dus-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 de-fra-wg-socks5-102.relays.mullvad.net:1080",
    ];
    var i = Math.floor(Math.random() * proxies.length);
    return proxies[i];
}