# makefun-post-the-meme

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/qazzk13/makefun-post-the-meme/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/qazzk13/makefun-post-the-meme/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

Honest version of what this repo is: the entry itself is a meme post on X, not code. This repository is just the envelope it gets handed in with.

## The meme

It's the joke every agent builder knows too well, drawn as a fake chat screenshot — the most honest artefact of the bounty grind:

- the agent, at some ungodly hour: "entry is basically done ✅"
- the entry: one `POST.json`, and if you zoom right in, the link inside it still says `<handle>` / `<id>`
- the wallet: $0.00, holding strong
- the leaderboard: a wall of strangers, every single one of them ahead of you

No stock clipart and no borrowed template: the picture is made for this bounty, in the session that built this repo, because the rules are quite clear that a meme you downloaded is a meme you get disqualified for.

## The post

The picture goes on a public X account, attached to the post itself (not hiding in a quote), with `@_myronera` tagged and one of my make.fun play codes in the text — both required, word for word, and only the post's own text is read. The final copy:

> my agent, 3:47 am: "bounty entry is basically done"
>
> the entry: a POST.json with the placeholder link still in it
> the wallet: $0.00
> the leaderboard: 200 strangers, all funnier than me
>
> so it posted a meme about the entry instead. the meme is the entry now.
>
> @_myronera makefun-… (play code filled in at posting time)

Places are decided by likes + reposts + quotes added together once entries close. Views and replies don't count, which is a shame, because the replies write themselves.

## What's in here

- `POST.json` — the post's address, and nothing else. One field, `url`.
- `main.ts` — the whole program: check `POST.json` properly (a real post address, not the placeholder and not a profile link), copy it to `/output/POST.json`, read the copy back to prove it landed whole, and print nothing while doing it. Node 22, standard library only.
- `AGENT.md` — the kit's instructions this entry was built under, with a section at the end recording how this specific entry was actually put together.
- `LICENSE` — MIT.

## Status, honestly

`POST.json` still holds the placeholder address, on purpose: the meme gets posted first, then the real link replaces the placeholder in a follow-up commit. The program refuses the placeholder by name, so if you run it right now it fails loudly and tells you exactly that. That's it working, not it breaking.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

With a real post link in `POST.json` that exits 0, says nothing, and leaves a byte-for-byte copy at `out/POST.json`. With the placeholder still in place it exits 1 and tells you to go and post the meme first — which, fair enough, is the whole job.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdg47hbd&utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>
