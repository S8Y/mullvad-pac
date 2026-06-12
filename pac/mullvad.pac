function FindProxyForURL(url, host) {
    var proxies = [
        "SOCKS5 ch-zrh-wg-socks5-005.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-003.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-004.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-006.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-503.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-502.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-202.relays.mullvad.net:1080",
    ];
    var i = Math.floor(Math.random() * proxies.length);
    return proxies[i];
}