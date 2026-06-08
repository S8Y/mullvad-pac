function FindProxyForURL(url, host) {
    var proxies = [
        "SOCKS5 de-ber-wg-socks5-007.relays.mullvad.net:1080",
    ];
    var i = Math.floor(Math.random() * proxies.length);
    return proxies[i];
}