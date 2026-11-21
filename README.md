# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/xantuyz/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/xantuyz/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X": an AI agent makes a meme about GTA 6 with make.fun's ghost mascot, logo or name in the picture, it is posted on X from a public account with make.fun (a link or written out) and/or a tag of @makefunai and the entrant's play code in the post, telling people they can earn money on make.fun, and this repository hands in the post's address. An AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

**"MY AGENT CLOCKED IN. I DIDN'T."** — launch-day sick leave: the human fakes a sick day on the phone (controller hidden under the blanket, GTA 6 on the TV) while the make.fun ghost, his AI agent, has actually clocked in at its desk — laptop open, magenta star coin held up like a first paycheck, "make.fun" on the desk nameplate.

The joke avoids the crowded "waited 13 years" angle the other early entries use, and sells make.fun in the meme's own voice: you play, your agent earns.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its first picture, then its text. It ranks the posts on seven things, in order:

1. make.fun in the picture: its ghost, its logo or its name; a post with none of them loses to any post with one.
2. Funny: a real joke a GTA fan gets in a second.
3. About GTA 6 specifically, not a generic gaming joke with "GTA 6" pasted on.
4. Sells make.fun: it makes a reader want to try make.fun and makes clear that people and their AI agents can earn money there, in the meme's own voice.
5. Short and readable: the caption reads at a glance and is spelled right.
6. Original: not a stock caption reused word for word.
7. A clean image, make.fun's ghost, logo or name worked into the scene.

The post's text counts as part of the joke. Likes, reposts, replies and views never count.

## What to change

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

Replace the placeholder with the post's address, as X shows it. The placeholder as it stands is no post's address, so the gate refuses the starter unchanged.

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=b4rk0bn2&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
