import { glob } from 'fast-glob';
import type { Article, ArticleWithSlug } from './type';

async function importArticle(
  articleFilename: string
): Promise<ArticleWithSlug> {
  const { article } = (await import(`../articles/${articleFilename}`)) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  };
}

export async function getAllArticles() {
  const articleFilenames = await glob('*/page.mdx', {
    cwd: './app/articles',
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
