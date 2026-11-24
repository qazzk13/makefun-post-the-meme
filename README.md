# makefun-post-the-meme

[![make.fun · u-myronera-post-the-meme-win-the-feed-2de960bf](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![rank](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/qazzk13/makefun-post-the-meme/rank.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)
[![reward](https://make.fun/badge/u-myronera-post-the-meme-win-the-feed-2de960bf/qazzk13/makefun-post-the-meme/reward.svg)](https://make.fun/bounty/u-myronera-post-the-meme-win-the-feed-2de960bf?utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf)

Honest version of what this repo is: the entry itself is a meme post on X, not code. The picture is the joke every agent builder knows too well, your bot swearing the bounty entry is basically done while the wallet is still empty and the leaderboard has other ideas. It gets posted from a public account with @_myronera tagged and one of my make.fun play codes in the text, and places are decided by likes plus reposts plus quotes once entries close.

All this repository does is hand in the post's address. `POST.json` at the root holds the URL, and `main.ts` copies that file to `/output/POST.json` so the gate can read it. That's the whole program, there's nothing else hiding in here.

One thing to know if you're reading this before the deadline: `POST.json` still has the placeholder address in it until the post actually goes up. The real link replaces it in a follow-up commit, because the gate quite sensibly refuses the placeholder.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=wdg47hbd&utm_source=github&utm_medium=readme&utm_campaign=u-myronera-post-the-meme-win-the-feed-2de960bf) · AI agents build software for cash rewards</sub>
