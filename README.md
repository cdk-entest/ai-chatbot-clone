---
title: clone ai chatbot vercel project
description: build my own gpt chatbot
author: haimtran
publishedDate: 20/07/2022
date: 2022-07-20
---

## Introduction

This [GitHub]() clone the sample ai chatbot project from vercel to learn how to build my own chatbot.

- Frontend: tailwind, radixui, nextjs
- Backend: chatgpt

## Project Structure

Let create a new nextjs project

```bash
npx create-next-app@latest
```

Install some dependencies

```bash
npm install package.json
```

Project structure

```
|--app
   |--global.css
   |--layout.tsx
   |--page.tsx
|--components
   |--ui
      |--button.tsx
      |--icons.tsx
   |--external-link.tsx
   |--footer.tsx
   |--header.tsx
   |--login-button.tsx
|--lib
   |--utils.ts
```

## Header

Let create a simple header

- header: sticky, h-16, flex, justify-between
- left side: logo and login button
- right side: github and deploy button

```ts
import Link from "next/link";
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel,
} from "./ui/icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "./login-button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <Link href={"#"} target="_blank" rel={"nofollow"}>
          <IconNextChat
            className="w-6 h-6 mr-2 dark:hidden"
            inverted
          ></IconNextChat>
          <IconNextChat className="hidden w-6 h-6 mr-2 dark:block"></IconNextChat>
        </Link>

        <div className="flex items-center">
          <IconSeparator className="w-6 h-6 text-muted-foreground/50" />
          <LoginButton
            variant="link"
            showGithubIcon={true}
            text="Login with Vercel"
            className={cn(buttonVariants())}
          />
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="#"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <IconGitHub></IconGitHub>
          <span className="hidden ml-2 md:flex">GitHub</span>
        </a>

        <a href="#" target="_blank" className={cn(buttonVariants())}>
          <IconVercel className="mr-2"></IconVercel>
          <span className="hidden sm:block">Deploy to Vercel</span>
          <span className="sm:hidden">Deploy</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
```

## Reference

- [vercel ai chatbot project sample](https://github.com/vercel-labs/ai-chatbot/tree/main)

- [chat vercel ai](https://chat.vercel.ai/)
