import { WritingPosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Website</h1>
      <p className="mb-4">{`I doodle and write about things. Bat is our lovely dog.`}</p>
      <div className="my-8">
        <WritingPosts />
      </div>
    </section>
  );
}
