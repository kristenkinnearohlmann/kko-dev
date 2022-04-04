---
title: Add a Field to a Prisma Model
date: "2022-04-03T18:30:33.284Z"
description: "Steps to add a field to a Prisma model and add to a project"
---

My [Breeze Lakes Point](https://breeze-lakes-point-2.vercel.app/profile) project is in a good working state with my initial User model for logging in and displaying the data from the table. As I was implementing the model, I realized I wanted to capture Middle Name or whether a user didn't have a middle name as part of the sign up process.

When I was building the User model, I ran into trouble with TypeScript recognizing that my model had changed. My new fields were flagged as errors and the data didn't display. I resolved the issue at the time but couldn't recall exactly all the steps I took. Adding Middle Name was my opportunity to define that process.

In my project, I am using the `npx` package runner to work with [Prisma](https://www.prisma.io/). For more information, see the [article on nodejs.dev](https://nodejs.dev/learn/the-npx-nodejs-package-runner)

I started by adding `middleName` and `noMiddleName` to my User model. `noMiddleName` is a boolean to allow a user to indicate that they truly don't have a middle name, without the need to add inaccurate data to the `middleName` field.

```Javascript
model User {
  id           String   @id @default(uuid())
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  username     String   @unique
  password     String
  email        String?
  firstName    String
  middleName   String?
  lastName     String
  noMiddleName Boolean  @default(false)
  role         Role     @default(User)
}
```

You can choose to run `npx prisma db push` to review the changes or `npx prisma migrate dev` to create a migration and apply the data. I ran the latter command since I knew the fields were what I wanted in the model. I also ran `npx prisma generate` to ensure I had a new client to work with.

I recalled that around this step previously, my Javascript code was not able to see the changes. There were some TypeScript complaints and some other vague errors; I was not able to update my seed file to incorporate the new fields. During the earlier issue, I had deleted all my terminals but ultimately it seemed the issue was resolved once I closed and re-opened my project in a new VS Code window. This time, I took those actions immediately, as well as re-running `npx prisma generate`, and was able to go ahead and start adding the new fields to my seed file. Success!

I modeled both a `noMiddleName` and `middleName` value in my seed file.

```Javascript
  const user2 = await prisma.user.upsert({
    where: { username: "user2" },
    update: {},
    create: {
      username: "user2",
      password: "<redacted>",
      firstName: "User",
      lastName: "2",
      role: "<redacted>",
      noMiddleName: true,
    },
  });
  const user4 = await prisma.user.upsert({
    where: { username: "user4@user.com" },
    update: {},
    create: {
      username: "user4@user.com",
      password: "<redacted>",
      email: "user4@user.com",
      firstName: "User",
      lastName: "4",
      middleName: "S",
    },
  });
```

With my seed file updated, I ran the following commands to truncate the current database on Heroku and re-seed the data.

```Javascript
npx prisma migrate reset
npx prisma db seed
```

Finally, I opened the model on the database to visualize the changes.

```Javascript
npx prisma studio
```

Identifying the best process and procedure for adding to existing models, adding new models, and ensuring the changes are available to the main project code has helped speed up my development process. I can now start to build the additional models I need to begin adding features to the base project.
