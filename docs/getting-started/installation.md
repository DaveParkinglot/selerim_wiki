---
title: "Installation"
aliases:
  - "setting up your GitHub repository"
---

First, make sure you have Quartz [[index#🪴 Get Started|cloned and setup locally]].

<<<<<<< HEAD
Then, create a new repository on GitHub.com. Do **not** initialize the new repository with `README`, license, or `gitignore` files.
=======
## 1. Clone Quartz

```bash
git clone https://github.com/jackyzha0/quartz.git
cd quartz
```

## 2. Install Dependencies

> [!important]
> Quartz requires **Node.js 22** or later. Check your version with `node -v` and upgrade at [nodejs.org](https://nodejs.org/) if needed.

```bash
npm i
```

> [!note]
> On subsequent clones of your own repository (e.g. on a new machine), use `npm ci` instead for a faster, reproducible install from the lockfile.

## 3. Initialize Your Site

Run the interactive setup wizard:

```bash
npx quartz create
```

This will prompt you for:

- A **template** (`default`, `obsidian`, `ttrpg`, `blog`) — pick the one that matches your use case. See [[create#Templates]] for details on each.
- A **content strategy** — choose how to populate the `content/` folder:
  - **new**: Start with an empty folder
  - **copy**: Copy files from an existing folder (e.g. your Obsidian vault)
  - **symlink**: Link to an existing folder so changes sync automatically
- A **base URL** — the URL where your site will be deployed (e.g. `mysite.github.io/quartz`). Don't include `https://`.
- A **link resolution** strategy — how to resolve internal links (`shortest`, `absolute`, or `relative`). Skipped for Obsidian and TTRPG templates.

For non-interactive usage and more details, see the [[create|`quartz create` CLI reference]].

## 4. Install Plugins

The template you chose references community plugins that need to be installed:

```bash
npx quartz plugin install --from-config
```

This downloads and builds all plugins listed in `quartz.config.yaml` into `.quartz/plugins/`.

> [!tip]
> If some plugins fail to build, try refreshing them to their latest versions:
>
> ```bash
> npx quartz plugin install --latest
> ```
>
> See [[troubleshooting#Plugins fail to build on a fresh clone]] for more details.

## 5. Preview Your Site

```bash
npx quartz build --serve
```

Your site is now running at `http://localhost:8080`. The dev server watches for file changes and reloads automatically.

At this point you can [[authoring-content|start writing content]] in the `content/` folder. When you're ready to publish, continue below to push your site to GitHub and [[hosting|deploy it]].

---

## Setting Up Your GitHub Repository

To publish your site, you'll need your own GitHub repository.

### Create the Repository

Create a new repository on [GitHub.com](https://github.com/new). Do **not** initialize it with a README, license, or `.gitignore` — the Quartz clone already has these.
>>>>>>> 9737bce7095f93c9fb41700449505d963a6b2bb8

![[github-init-repo-options.png]]

At the top of your repository on GitHub.com's Quick Setup page, click the clipboard to copy the remote repository URL.

![[github-quick-setup.png]]

In your terminal of choice, navigate to the root of your Quartz folder. Then, run the following commands, replacing `REMOTE-URL` with the URL you just copied from the previous step.

```bash
# list all the repositories that are tracked
git remote -v

# if the origin doesn't match your own repository, set your repository as the origin
git remote set-url origin REMOTE-URL

# if you don't have upstream as a remote, add it so updates work
git remote add upstream https://github.com/jackyzha0/quartz.git
```

Then, you can sync the content to upload it to your repository. This is a helper command that will do the initial push of your content to your repository.

```bash
npx quartz sync --no-pull
```

> [!warning]- `fatal: --[no-]autostash option is only valid with --rebase`
> You may have an outdated version of `git`. Updating `git` should fix this issue.

> [!warning]- `fatal: The remote end hung up unexpectedly`
> It might be due to Git's default buffer size. You can fix it by increasing the buffer with this command:
>
> ```bash
> git config http.postBuffer 524288000
> ```

In future updates, you can simply run `npx quartz sync` every time you want to push updates to your repository.

> [!tip] First-time plugin install on a fresh clone
> The Quartz template ships with a `quartz.lock.json` that pins community plugins to specific commits. On a brand-new clone those pins may be older than the plugins' current dependency versions, which can cause a handful of plugins to fail to build on first install. If you hit build errors during initial setup, run:
>
> ```bash
> npx quartz plugin install --latest
> ```
>
> This refreshes every plugin to the latest commit on its default branch and rewrites `quartz.lock.json`. See [[troubleshooting#Plugins fail to build on a fresh clone]] for details.

> [!hint] Flags and options
> For full help options, you can run `npx quartz sync --help`.
>
> Most of these have sensible defaults but you can override them if you have a custom setup:
>
> - `-d` or `--directory`: the content folder. This is normally just `content`
> - `-v` or `--verbose`: print out extra logging information
> - `--commit` or `--no-commit`: whether to make a `git` commit for your changes
> - `--push` or `--no-push`: whether to push updates to your GitHub fork of Quartz
> - `--pull` or `--no-pull`: whether to try and pull in any updates from your GitHub fork (i.e. from other devices) before pushing
