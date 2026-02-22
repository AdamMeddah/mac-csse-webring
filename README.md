# McMaster CS & Software Engineering Webring

## How to join the webring

1. Open a PR
2. Add your entry to `data/members.json` in this format:

```json
{
  "name": "Your Name",
  "year": 2026,
  "program": "CS",
  "website": "https://yoursite.com",
  "links": {
    "instagram": "",
    "twitter": "https://x.com/yourhandle",
    "linkedin": "https://www.linkedin.com/in/yourprofile"
  }
}
```

3. Open a pull request. Once merged, you're in the ring.

## Add the webring links to your site

1. Replace `WEBRING_URL` with your webring URL (e.g. `https://yourusername.github.io/mac-csse-webring/`).
2. Replace `yoursite.com` with your site's domain (no `https://`).
3. **←** = previous site · **→** = next site.

### HTML snippet

```html
<p style="font-size: 0.9em; color: #495965;">
  <a href="https://YOUR-WEBRING-URL" style="color: #7A003C; font-weight: 500;">McMaster CS & SE Webring</a>
  ·
  <a href="https://YOUR-WEBRING-URL#yoursite.com?nav=prev" style="color: #7A003C;" title="Previous site">←</a>
  <a href="https://YOUR-WEBRING-URL#yoursite.com?nav=next" style="color: #7A003C;" title="Next site">→</a>
</p>
```

### JSX snippet

```jsx
const WEBRING_URL = "https://YOUR-WEBRING-URL";
const MY_SITE = "yoursite.com";

<p style={{ fontSize: "0.9em", color: "#495965" }}>
  <a href={WEBRING_URL} style={{ color: "#7A003C", fontWeight: 500 }}>McMaster CS & SE Webring</a>
  {" · "}
  <a href={`${WEBRING_URL}#${MY_SITE}?nav=prev`} style={{ color: "#7A003C" }} title="Previous site">←</a>
  <a href={`${WEBRING_URL}#${MY_SITE}?nav=next`} style={{ color: "#7A003C" }} title="Next site">→</a>
</p>
```

A copy of the HTML snippet is in **`embed-snippet.html`**.
