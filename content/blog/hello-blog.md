# Welcome to My Blog

*June 11, 2026*

This is a placeholder post. Replace or delete this file and add your own articles.

## How to add a new post

1. Create a Markdown file in `content/blog/`, e.g. `content/blog/my-article.md`
2. Open `content/blog/index.json` and add an entry to the `posts` array:

```json
{
  "slug": "my-article",
  "title": "My Article Title",
  "date": "2026-07-01",
  "description": "One sentence shown in the post list."
}
```

3. Save both files — the new post will appear in the Blog listing automatically.

Posts are sorted by the order they appear in `index.json`, so put newer entries at the top.
