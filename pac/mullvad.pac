function FindProxyForURL(url, host) {
    var proxies = [
        "SOCKS5 ch-zrh-wg-socks5-502.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-005.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-003.relays.mullvad.net:1080",
        "SOCKS5 it-mil-wg-socks5-002.relays.mullvad.net:1080",
        "SOCKS5 ch-zrh-wg-socks5-201.relays.mullvad.net:1080",
        "SOCKS5 be-bru-wg-socks5-103.relays.mullvad.net:1080",
        "SOCKS5 nl-ams-wg-socks5-001.relays.mullvad.net:1080",
        "SOCKS5 de-ber-wg-socks5-008.relays.mullvad.net:1080",
        "SOCKS5 be-bru-wg-socks5-102.relays.mullvad.net:1080",
    ];
    var i = Math.floor(Math.random() * proxies.length);
    return proxies[i];
}