export interface Article {
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}
