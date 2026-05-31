---
title: "Building This Portfolio"
date: "May 30, 2026"
description: "A deep dive into the design decisions, tech stack, and process behind building a developer portfolio that feels authentically me."
---

I've built a lot of things over the years — web apps, mobile apps, IoT dashboards, you name it. But when it came time to build a portfolio for myself, I froze. Nothing felt right. Every template I saw was either too flashy or too generic. I wanted something that actually felt like *me*.

So I scrapped everything and started from scratch.

## The Goal

I wanted a site that checked three boxes:

1. **Authentic** — it should feel like a developer's space, not a marketing brochure
2. **Functional** — live GitHub data, real content, no placeholder text
3. **Maintainable** — easy to add projects, blog posts, and updates without fighting the framework

Everything else was negotiable.

## Tech Stack

The stack choices were pretty deliberate:

- **Next.js 16** with the App Router — I wanted static generation for speed, server components for data fetching, and a simple deployment story
- **Tailwind CSS v4** — utility-first CSS that doesn't get in the way. The new `@theme` directive made custom colors trivial
- **TypeScript** — I don't write JavaScript without types anymore. It's not worth it

The full dependency list is refreshingly small:

```
gray-matter, next, react, react-dom, remark, remark-html
```

That's it for runtime deps. A markdown parser, a framework, and a UI library. I like keeping things lean.

## The VS Code Dark+ Aesthetic

If you spend eight hours a day looking at a code editor, that palette starts to feel like home. The color scheme is lifted straight from VS Code Dark+:

- Background: `#1e1e1e` (the classic editor chrome)
- Blue: `#569cd6` (keywords, links)
- Orange: `#ce9178` (strings)
- Purple: `#c586c0` (type annotations)
- Green: `#6a9955` (comments, muted text)

I mapped these into Tailwind's `@theme` system so they're consistent everywhere:

```css
@theme inline {
  --color-accent-blue: #569cd6;
  --color-accent-orange: #ce9178;
  --color-accent-purple: #c586c0;
  --color-accent-green: #6a9955;
  --color-bg-primary: #1e1e1e;
  --color-text-primary: #d4d4d4;
}
```

The whole site uses JetBrains Mono, because why would a developer portfolio use anything other than a monospace font?

## The Terminal Vibe

I leaned into the terminal theme pretty hard. The homepage has:

- A typing animation on the tagline (no JS — it's pure CSS with `steps()` and `overflow: hidden`)
- `❯` prompts before every section heading
- Box-drawing characters for decorative elements
- A subtle grid background that looks like an empty editor window
- Keyboard-style tech stack badges with color dots

It's not trying to be an actual terminal emulator — that would be impractical and gimmicky. It's more about capturing the *feel* of working in a terminal. The precision. The lack of clutter. The sense that you're interacting with something built by a developer.

## GitHub Integration

The projects and activity feed pull directly from the GitHub API at build time. No manual syncing, no CMS, no database:

- `lib/github.ts` fetches repos and filters out forks, sorted by stars
- `lib/github-stats.ts` aggregates repo stats (total stars, follower count)
- Activity events are fetched from the public timeline and rendered with emoji mappings

If I push a new repo or star something, the portfolio updates on the next build. That's the kind of automation I appreciate.

## The Blog System

I wanted a blog, but I didn't want to set up a CMS or a database. The solution is almost absurdly simple:

- Markdown files live in `content/blog/`
- `gray-matter` parses the YAML frontmatter (title, date, description)
- `remark` + `remark-html` renders the body to HTML
- The blog list page calls `getPosts()` which reads the directory and sorts by date
- Individual post pages use `generateStaticParams` (or just read the file directly)

Adding a new post is literally creating a `.md` file. No admin panel, no API, no build configuration. Just a file.

## Deployment

The site is built with `next build` and can be deployed anywhere Next.js runs. I'm keeping it straightforward — static export where possible, ISR for the GitHub data that can stay cached for an hour.

## What I Learned

A few things I'd tell myself if I were doing this again:

- **Start with content, not design.** I wasted a lot of time tweaking border radii before I had any actual content on the page. Get the words down first.
- **Constraints are liberating.** Limiting myself to a monospace font and a terminal palette forced creative decisions I wouldn't have made otherwise.
- **Less JavaScript.** The typing animation, fade-ins, and scroll effects are all CSS. The only client-side code is the mobile menu hamburger. Server components handle the rest.
- **Your portfolio is never done.** I'll probably redesign this thing in a year. That's fine. Ship it, learn from it, move on.

## Closing

This portfolio is open source (obviously). If you're reading this and building your own, I hope this post gave you some ideas. Use the tools that make you productive. Steal the color palette if you want. And for the love of everything, use a monospace font.

```
❯ echo "Thanks for reading"
Thanks for reading
```
