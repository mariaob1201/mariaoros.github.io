# mariaoros.github.io

Personal website of **Maria Oros Barron** — Data Scientist at the [Data Science Institute](https://datascience.wisc.edu/), University of Wisconsin–Madison.

**Live:** <https://mariaob1201.github.io/mariaoros.github.io/>

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) theme.

## Repository layout

| Path | What lives there |
| --- | --- |
| [_pages/about.md](_pages/about.md) | Homepage bio |
| [_data/cv.yml](_data/cv.yml) | CV content (education, experience, skills) — also feeds the auto-generated PDF |
| [_data/socials.yml](_data/socials.yml) | Email, ORCID, Google Scholar, GitHub, LinkedIn, YouTube |
| [_bibliography/papers.bib](_bibliography/papers.bib) | Publications, in BibTeX. Add `selected={true}` to feature on the homepage |
| [_projects/](_projects/) | One Markdown file per project |
| [_news/](_news/) | Inline announcements shown on the homepage |
| [_config.yml](_config.yml) | Site-wide settings |
| [assets/img/prof_pic.jpg](assets/img/) | Profile photo |
| [assets/rendercv/rendercv_output/](assets/rendercv/) | Auto-generated CV PDF |

## Deploy

`main` → CI builds and pushes the site to the `gh-pages` branch, which GitHub Pages serves.

Two workflows run on every push to `main`:

- [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) — builds Jekyll and publishes to `gh-pages`
- [`.github/workflows/render-cv.yml`](.github/workflows/render-cv.yml) — regenerates the CV PDF from [_data/cv.yml](_data/cv.yml) and commits it back

## Local development

Requires Ruby 3.x (the macOS system Ruby 2.6 is too old).

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/mariaoros.github.io/>.

## License

Site content © Maria Oros. Theme released under the [MIT License](LICENSE) by the al-folio maintainers.
