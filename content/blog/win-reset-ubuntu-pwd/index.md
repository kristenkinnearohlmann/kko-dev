---
title: Reset Ubuntu Password on Windows
date: "2022-04-10T20:46:33.284Z"
description: "How to reset your password on a Windows instal of Ubuntu"
---

This week, I wanted to check a Docker command within Docker itself. I have been working with the `dockerd` engine on my Windows WSL 2 installation. Although I had been working through the terminal in VS Code, I wanted to try using the Ubuntu shell.

I found I had 2 versions of Ubuntu installed, each with its own password, and later realized I needed to log into the WSL shell. I researched and located a helpful solution on Stack Exchange that I summarized for use again in the future.

## Password Change Process

- Using the Ubuntu shell, note the following:
  - The version of Ubuntu you are using (I had a previous install as well as Ubuntu 18.04 in WSL)
  - Your username
- Close the Ubuntu shell
- Open PowerShell as **Admin** and reset the Ubuntu config to log in as `root`
  - Ubuntu:
  ```bash
  ubuntu config --default-user root
  ```
  - Ubuntu 18.04:
  ```bash
  ubuntu1804 config --default-user root
  ```
- Re-open the Ubuntu shell - you will be logged in as `root`
- Execute the `passwd` command and follow the prompts; ensure you secure your new password in a password safe! Do not include angle brackets.

```bash
   passwd <username>
```

- Close the Ubuntu shell
- Open PowerShell as **Admin** and reset the Ubuntu config to log in as your username. Do not include angle brackets.
  - Ubuntu:
  ```bash
  ubuntu config --default-user <username>
  ```
  - Ubuntu 18.04:
  ```bash
  ubuntu1804 config --default-user <username>
  ```
- Log into Ubuntu and confirm the new password

I followed these steps for both versions of Ubuntu, and I was able to reset both passwords. Once I opened the WSL shell, I was able to use my Ubuntu 18.04 credentials to start `dockerd` and check the commands I needed.

## Resources

[Reset the password in Ubuntu/Linux Bash in Windows](https://askubuntu.com/questions/772050/reset-the-password-in-ubuntu-linux-bash-in-windows)
