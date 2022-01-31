---
title: Coding the Signout API for Breeze Lakes Point Next Project
date: "2022-01-30T20:08:33.284Z"
description: "Technique to sign out a user from a Next project"
---

[Breeze Lakes Point](https://breeze-lakes-point-2.vercel.app/) is a demo I have been working on as a personal project. The goal for the site is to allow users to register information and admins to manage that information. The original setup for this project was a React front-end with a Rails API backend. After taking the Frontend Masters workshop [Build Full-Stack Apps from Scratch](https://frontendmasters.com/workshops/fullstack-apps/) taught by Scott Moss, I pivoted to start a new version using [Next.js](https://nextjs.org/) for the full solution.

I started the current project version from the Next.js `create-next-app` api and used the sample app from the workshop as reference. I was looking forward to leveraging the page routing and APIs that Next.js provides as part of its framework.

While the workshop covered how to log in an existing user and create a new user for the sample app, we did not cover signing out; the token we issued simply expired within 8 hours. For the purposes of my demo app, however, I wanted to demonstrate that a user could expect to log out explicitly at the end of a session by including an API for siging out.

I knew that the solution would involve adjusting the existing cookie to expire the token created by the app. I considered there must be a way to change the expiration date within the token. I did some Google searches for such a technique but did not find any leads.

Ultimately, the answer was very straightforward - write a blank `jwt` back to the cookie. This effectively removes the authorization for the user. The resulting API for `signout` was very basic, updating the `BREEZE_LAKES_POINT_ACCESS_TOKEN`:

```Javascript
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("BREEZE_LAKES_POINT_ACCESS_TOKEN", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    })
  );
  res.status(200).json({ msg: "Logout complete" });
};
```

In my navigation component, I ensured `next/router` was imported and added the `signout` route as a form with a single button so action could be taken on submit; once sign out is completed by the API, the user is sent back to the sign in page:

```JavaScript
import { useRouter } from "next/router";
...
const LeftNav = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await signout("signout");
    router.push("/signin");
  };

  return (
...
```

I was able to verify this solution worked both locally and on my app deployed to [Vercel](https://vercel.com/). There is still more testing to be done but the initial implementation of the sign out feature was an excellent addition to the [Breeze Lakes Point](https://breeze-lakes-point-2.vercel.app/) demo project.
