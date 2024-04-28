import { getWritingPosts } from 'app/writing/utils';

export const baseUrl = 'https://bat.run';

export default async function sitemap() {
  let writings = getWritingPosts().map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/writing'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...writings];
}
