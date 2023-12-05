import { Container } from '@/components/Container';
import { Metadata } from 'next';
import { getAllArticles } from './loader';
import { Article } from './Article';

export const metadata: Metadata = {
  title: 'Writing,',
  description:
    'I record my thoughts about the experience. Mainly my thoughts and feelings about what I learned and the impressive content.',
};

export default async function Page() {
  const articles = await getAllArticles();

  return (
    <main>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {metadata.title as String}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {metadata.description as String}
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="flex max-w-3xl flex-col space-y-16">
              {articles.map((article) => (
                <Article key={article.date} article={article} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
