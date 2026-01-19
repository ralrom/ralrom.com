---
title: "Holiday Dev Blues: From Vibe Coding to Coding With Intention"
draft: false
summary: 'After hitting a wall with burnout and "vibe coding", I decided to strip my dev environment down and start over. From ditching high-cost infrastructure to learning Elixir and Neovim, here is how I''m trying to find my spark again by choosing intention over convenience.'
---

I've spent most of my professional life working with Next.js, Node.js and React. For my long-running side project [SafariCode](https://safaricode.com), I use Laravel with Inertia. I originally liked Inertia, but my latest feature really pushes the limits of what Inertia was designed to do; now, I feel caged by my tech stack.

Over the holidays, I hit a wall. I was pouring endless hours into SafariCode, obsessing with adding features to drive traffic and fighting to decrease my infrastructure costs. I migrated away from Laravel Vapor because it was just too expensive for my needs, only to find out that Laravel Cloud wasn't as cheap as I'd hoped. I feel like I moved from the most expensive building in town to the second most expensive one to save on rent.

All these hours spent with little to show for it pushed me to burnout. I also had been "vibe-coding" a lot to ship quickly on SafariCode but I became disheartened with the project and with coding in general. I felt like I was stagnating as a developer and I wanted to try something new; I needed to reignite the flame.

While browsing X, I found [this video of a developer coding a machine learning library from scratch because he was bored](https://www.youtube.com/watch?v=hL_n_GljC0I). It was really impressive to see how fast he types and how quickly he jumps through the code using vim. He also coded everything without using AI or any external references. This was a wake up call for me, I knew I had to learn vim after watching him; and I knew AI was keeping me lazy.

I had to rebuild my dev environment back from the ground up.

## Rebuilding the Stack

If I wanted to escape stagnation, I needed tools that forced me to think differently. This led me to two big shifts: the language and the tool.

### The Language: Elixir & Phoenix

I've been eyeing Elixir for years. I kept hearing good things about it, it ranked highly in dev surveys, and the language always intrigued me. I also had heard of the Phoenix/LiveView framework and it seems to be a nicer alternative to Inertia. It uses WebSockets to push updates to the frontend, meaning each operation sends only the tiniest amount of data for the frontend to reflect the state. I really like this implementation and I feel like I would enjoy coding that way more than Inertia. Finally, it scales easily, and for me that meant really low infra costs.

### The Tool: Ghostty + Neovim

I wanted to improve my terminal experience: I searched for the best terminal emulators to use on Mac and I decided to go with Ghostty. I was immediately impressed by how fast everything I typed appeared on the screen; it was _blazingly_ fast. It also seemed like a more modern option compared to iTerm2 and I liked that it used GPU rendering.

Next, I installed Neovim. I found out about LazyVim and decided to use it instead of spending hours configuring my Neovim setup; I really didn't want to spend too much time configuring it to get started, I already had to learn a new language and a new tool.

Jumping straight into Neovim was definitely a challenge. I essentially only knew the basic h,j,k,l and maybe 3-5 other keybindings. Everything was a struggle, and I remember going back to VS Code many times when I felt lost. But I always came back to Neovim shortly after; I didn't want to allow myself to flee from the discomfort. I've been learning how to navigate it better, I also installed the lazy.git plugin which was a feature I really missed from VS Code. Now I still have a lot to learn but I at least feel like I can be productive in it.

I've also added [vimhero](https://www.vim-hero.com/) into my learning path, it's a fun way to learn the keybindings.

It's been about a week or two since I've started learning Elixir and Neovim at the same time, I try to spend 1-2 hours each day on it and I'm happy with my learning progress so far. I've also created my first Phoenix project to start poking around in it but it's definitely a bit early; I still have many more Elixir basics to master.

What's clear is that I really enjoy learning the Vim keybindings, even if I'm not comfortable with them yet, I know I'll get faster soon and I enjoy the focus I get when working in Neovim. I can't explain why, but it feels much easier to stay focused in it compared to VS Code but maybe it's just the excitement of learning something new. I'm still a novice in this new world, but for the first time in months, I'm not just shipping, I'm growing. If you've been feeling the "vibe coding" stagnation lately, maybe it's time you changed your environment, too.
