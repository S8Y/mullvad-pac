# Mullvad PAC

This repository provides an always up-to-date **Proxy Auto-Config (PAC)** file built from Mullvad VPN servers. The PAC file automatically updates every **5 hours** with the most stable and responsive servers, ensuring reliable proxy routing without manual maintenance.

## Overview

- ⚡ **Automatically refreshed every 5 hours** via scheduled job.  
- 🌍 **Uses live Mullvad server data** to generate routes dynamically.  
- 🧠 **Pre-tested for stability** — only healthy servers appear in the PAC logic.  
- 🔒 **No client install required** — just use the raw PAC URL directly in your browser or OS.

## Usage

To use the auto-updating PAC file, plug this raw GitHub URL into your browser or system proxy settings:
 
`https://raw.githubusercontent.com/S8Y/mullvad-pac/refs/heads/main/mullvad.pac`



