---
title: Changing bash $HOME on Windows
date: "2022-03-06T20:19:33.284Z"
description: "Procedure to change the $HOME directory for bash on Windows"
---

I recently spent time trying to debug an `npm install` process that could not resolve references for the packages listed in the repo. I had encountered the issue before, when I was less familiar with `npm` generally. Having had more experience since that initial issue, I realized the problem was that I needed to ensure I could authenticate to the registries listed when the install ran.

I opened my `.npmrc` file in my local machine user directory, added the credentials I generated, and retried my install; it failed. This was really perplexing, because I was pretty certain the new credentials were good. I worked on the problem with a colleague, regenerating and adding credentials with no resolution. We finally added the credentials to the local project `.npmrc` to ensure the credentials were valid, and the install completed.

This reminded me that the last time I tried to deal with the issue, the problem was that a different `.npmrc` file was being referenced than the one in my user directory on my local machine. I navigated to the remote file directory that was assigned by the organization and confirmed there was another `.npmrc` file located there with similar credentials to the ones on my local machine.

I researched the issue on Google and found a lead regarding the `$HOME` directory for `bash`. I took a look and found that my `bash $HOME` directory was set to the remote location:

```bash
$ $HOME
# bash: /<remote drive letter>/<remote folder name>: Is a directory
```

I know my organization intends to move us away from using this remote location, so although `npm` was using this directory, I wanted to be able to repoint to my local machine.

Some of my research indicated that this was not something a user should necessarily do but I found a number of methods...for Macs! As a Windows user primarily, I find I often need to dig deeper to find the method I need to resolve an issue.

In this case, I found a really [to-the-point article from ShellHacks](https://www.shellhacks.com/git-bash-change-home-directory/) that helped resolve the issue. By adding a user-level variable `%HOME%` to a machine's environment variables, a `bash` client can reference and resolve that variable. Once I made the change, I was able to confirm that `$HOME` now pointed to my local machine:

```bash
$ $HOME
# bash: /c/<local folder name>: Is a directory
```

My `npm` install could now reference the proper `.npmrc` file with my updated credentials. While this issue occurs infrequently, it's helpful to have reference articles that assist Windows users with this change.
