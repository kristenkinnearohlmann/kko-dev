---
title: Basic Find Query with Prisma
date: "2022-03-20T21:10:33.284Z"
description: "A basic find query using Prisma"
---

For my [Breeze Lakes Point project](https://breeze-lakes-point-2.vercel.app/signin), I am using [Prisma](https://www.prisma.io/) as the [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) to handle data in my PostgreSQL database. This is the ORM that we used with the sample app from the Frontend Masters workshop I attended, and I found it straightforward with great documentation.

I am working on a feature to find a specific user in the database and return the data for display in a registration form for editing. The basic `findUnique` syntax is quite compact:

```Javascript
const data = await prisma.<model>.findUnique({
    where: {
        <lookupField>: <lookupValue>,
    },
    select: {
        returnField1: true,
        returnField2: true
    },
});
```

Since I am still expanding my `user` model, I implemented a simple return object:

```Javascript
const qry = <GUID value>

const data = await prisma.user.findUnique({
    where: {
        id: qry,
    },
    select: {
        id: true,
        username: true,
        email: true,
        firstName: true,
        lastName: true
    },
});
```

For the final returned object, I spread the data object to include a message to confirm the data returned to my route, since this is currently the same data that the session contains:

```Javascript
return { ...data, msg: "Found" };
```

With the basic framework in place to look up and return data via Prisma, I can work to expand both my `user` model and the models planned to hold related data.
