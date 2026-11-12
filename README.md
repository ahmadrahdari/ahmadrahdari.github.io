# ahmadrahdari.github.io

Personal academic website of Ahmad Rahdari, served by GitHub Pages at <https://ahmadrahdari.github.io>.

The site is plain HTML and CSS with no build step (the `.nojekyll` file tells GitHub Pages to serve the files as they are). Edit a file on GitHub, commit, and the change is live within a minute or two.

## Where things are

| Page | File |
| --- | --- |
| Home (bio, research, recent news, selected papers, service, group photos, contact) | `index.html` |
| Publications | `publications/index.html` |
| CV page | `cv/index.html` |
| Gallery | `gallery/index.html` |
| CV PDF | `files/Ahmad_Rahdari_CV.pdf` |
| Styles (colours and fonts are variables at the top) | `assets/css/style.css` |
| Photos | `assets/img/` |

The header and footer are repeated in every page, so a change to the menu has to be made in each `index.html`.

## Common updates

**Update the CV.** Replace `files/Ahmad_Rahdari_CV.pdf` with the new PDF (same file name). Then in `cv/index.html` change the date in the line with `class="updated"`, both the `datetime="YYYY-MM-DD"` value and the visible text. Update "Last updated" in the footers too if you like.

**Add a publication.** In `publications/index.html`, copy one `<li class="pub">…</li>` block and edit it. Published papers go in the "Journal articles" list; the `--start` number on that `<ol>` should be the number of papers plus one, so the numbering stays correct. Move a paper from "Under review" to "Journal articles" once it is accepted. If it should appear on the home page, add it under "Selected publications" in `index.html` as well.

**Add news.** In `index.html`, add an `<li>` at the top of the list with `class="timeline"`.

**Add a photo to the gallery.** Put two sizes in `assets/img/` (a large one around 1800 px wide and a `-thumb` around 760 px wide, as `.jpg` and `.webp`), then copy a `<figure>` block in `gallery/index.html`.
