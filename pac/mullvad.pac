function FindProxyForURL(url, host) {
    var proxies = [
        "SOCKS5 ch-zrh-wg-socks5-201.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-202.relays.mullvad.net:1080",
        "SOCKS5 it-mil-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-403.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-006.relays.mullvad.net:1080",
    ];
    var i = Math.floor(Math.random() * proxies.length);
    return proxies[i];
}