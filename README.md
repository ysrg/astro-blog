
## Features
- __Minimal, Crisp, Markdown-Blog Ready__
- __Uses `astro 1.1.5`__ - It uses Astro's latest `1.1.5` release under the hood
- __Svelte Ready__ - In its effort to remain light-weight, performant, and more approachable from Astro's POV, Svelte is used for interactive components like the theme switcher
- __Modular__ - The structure is highly modular, with components doing just one job, and one job well.
- __Collection + Dynamic Pages__ - It's ready with Next.js like dynamic pages, to support a tag-based classification system with paginated results, all configurable
- __Dark Mode & Color Codes__ - It supports dark mode, and __6+__ color modes that's selected using `tailwind.config.js`. You can pass `THEME_KEY` with the `dev` or `build` script/commands ex: `THEME_KEY=purpleheart astro build/dev` to change the color theme being used. All the available themes can be found in [tailwind.theme.config.js](./tailwind.theme.config.js). To customize the blog section, add any of the Tailwind Typography's `prose-{color}` classes as referred [here](./src/components/Prose.astro)
- __Netlify CMS__ - Add/Edit/Update all the posts in the `/blog` directory by visiting `your-site.netlify.com/admin` ex: [astro-blog.netlify.app/admin](https://astro-blog.netlify.app/admin) with your Netlify credentials. It needs Netlify Identity(https://app.netlify.com/sites/your-site/settings/identity#registration
) and Git Gateway(https://app.netlify.com/sites/your-site/settings/identity#services) enabled.
- __Future Posts__(with Github Actions) - Create posts in the `/src/drafts` directory with a future `date` in the `YYYY-MM-DD` format, and let a specially crafted [Github Action](https://github.com/marketplace/actions/ssg-publish-drafts) take care of auto-publishing it on your specified date. You can configure the check interval in [Github Action](https://github.com/ysrg/astro-blog/blob/main/.github/workflows/main.yml).
- __Client-Side Search__ - Allow your users get to your blog posts quickly with client-side search feat. Lunr.js
