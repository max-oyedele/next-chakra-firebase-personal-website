
# live

My personal portfolio website hosted at [https://next-chakra-firebase-personal-website.vercel.app/](https://next-chakra-firebase-personal-website.vercel.app/)

## Overview
This site implemented modern architect of Next.js / ChakraUI.

This has my writing, projects, gear, tutorials, experience, and much more.

## Running Locally

To run locally you must

1. Create a .env file and enter your secret keys (if you skip this step the site will still run but some data won't be fetched)

```bash
touch .env
```

Inside ```.env```:

```
YOUTUBE_KEY=

GITHUB_KEY=

BUTTONDOWN__KEY=

FIREBASE_CLIENT_EMAIL=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=

STRAVA_CLIENT_ID=
STRAVA_SECRET=
STRAVA_REFRESH_TOKEN=
```

2. Install dependencies

```bash
yarn
```

3. Run locally!

```bash
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000).

## Technologies

- JS Framework: [Next.js](https://nextjs.org/)
- CSS Framework: [Chakra](https://chakra-ui.com/)
- Blog Code Syntax: [Prism.js](https://prismjs.com/)
- Blog: [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- Deployment: [Vercel](https://vercel.com/)
