# Setup

This document is explaining the steps I took to set up my environment:

## Operating System Information:
```
$ cat /etc/os-release 
NAME="Ubuntu"
VERSION="20.04.3 LTS (Focal Fossa)"
ID=ubuntu
ID_LIKE=debian
PRETTY_NAME="Ubuntu 20.04.3 LTS"
VERSION_ID="20.04"
HOME_URL="https://www.ubuntu.com/"
SUPPORT_URL="https://help.ubuntu.com/"
BUG_REPORT_URL="https://bugs.launchpad.net/ubuntu/"
PRIVACY_POLICY_URL="https://www.ubuntu.com/legal/terms-and-policies/privacy-policy"
VERSION_CODENAME=focal
UBUNTU_CODENAME=focal
```

```
>wsl --list -v
  NAME      STATE           VERSION
* Ubuntu    Running         2
```

## Environment Setup

1. Update Ubuntu
```
$ sudo apt update
$ sudo apt upgrade
```

2. Install `nvm` fpr version managing `node.js`

[Microsoft Docs - Install nvm, node.js, and npm](https://docs.microsoft.com/en-gb/windows/dev-environment/javascript/nodejs-on-wsl#install-nvm-nodejs-and-npm)

3. Install LTS version of node.js
```
$ nvm install --lts
$ nvm use --lts
Now using node v16.13.1 (npm v8.1.2)
```