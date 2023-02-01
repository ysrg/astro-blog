import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Amdaris',
    secondaryName: 'Amdaris Engineering',
    blogName: 'Engineering',
    title: 'Amdaris blog',
    description: 'Sharing challenges and experiences. ',
    homeUrl: 'https://amdaris.com',
    url: 'https://amdaris.com',
    githubUrl: 'https://github.com/ysrg/astro-blog',
    listDrafts: true,
    image: 'https://raw.githubusercontent.com/ysrg/astro-blog/main/public/astro-banner.png',
    // YT video channel Id (used in media.astro)
    ytChannelId: '',
    // Optional, user/author settings (example)
    // Author: name
    author: '', // Example: Sergiu Moraru
    // Author: Twitter handler
    authorTwitter: '', // Example: smoraru
    // Author: Image external source
    authorImage: '', // Example: https://pbs.twimg.com/profile_images/1272979116529221632/sxvbncugt_400x400.jpg
}


export const PAGE_SIZE = 8
export const USE_POST_IMG_OVERLAY = false
