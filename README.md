# Find Help in Norman — resource directory

A one-page site for First Congregational Church of Norman, UCC that lets people
pick the kind of help they need and get addresses, hours and tap-to-call phone
numbers. Built from the McFarlin Memorial UMC resource list dated 4/7/2026.

## Files

| File | What it is |
|---|---|
| `index.html` | The page itself — layout, styling, search and filtering |
| `resources.js` | All 191 listings. **This is the file you edit to update the list.** |
| `logo.jpeg` | Church logo shown in the header |
| `resource-list.pdf` | The full 6-page flyer, linked from the footer |

Keep all four in the same folder. No build step, no dependencies.

## Publishing to GitHub Pages

1. Put these four files in your repository (either at the top level, or in a
   folder like `/help`).
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to *Deploy from a branch*,
   pick your `main` branch and the `/ (root)` folder, then **Save**.
4. Wait a minute or two. The page will be at
   `https://YOUR-USERNAME.github.io/YOUR-REPO/` (add `/help/` on the end if you
   put the files in a subfolder).

To preview before publishing, just double-click `index.html` on your computer —
it works straight from the file system.

## Updating a listing

Open `resources.js` in any text editor. Each listing looks like this:

```js
{ n: "Salvation Army Food Pantry",
  a: "1124 N. Porter",
  d: "Wednesdays only. Call any time to make an appointment. 30-day limit.",
  p: "405-364-9910",
  cats: ["food"] },
```

- `n` name · `a` address · `d` details · `p` phone · `w` website · `e` email
- `cats` decides which buttons it shows up under. A listing can be in more than
  one: `cats: ["food", "seniors"]`
- `g` is an optional subheading (used to group the food pantries by town)
- Leave out any field you don't have — don't leave it empty.

Keep the commas and curly braces exactly where they are. If the page goes blank
after an edit, a comma or quote mark is missing somewhere in that entry.

The category buttons count their own listings, so the numbers on the front page
update themselves.

## Linking straight to a category

Add the category name to the end of the URL and the page opens already filtered:

`…/index.html#food` · `#shelter` · `#money` · `#health` · `#mental` ·
`#children` · `#clothing` · `#seniors` · `#transport` · `#general` · `#pets`

Handy for a "Need food?" link in a newsletter or on a business card QR code.

## A note on credit

The underlying research is McFarlin Memorial UMC's, and the footer says so and
links to their page. It's worth sending Mary Sallee (mksallee@icloud.com) a note
that you're publishing a version — she maintains the master list and can tell you
when a new one is out.
