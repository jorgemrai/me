export type Post = {
  title: string;
  link: string;
  date?: string;
  excerpt?: string;
};

interface Props {
  post: Post;
  readMoreLabel: string;
}

export default function PostCard({ post, readMoreLabel }: Props) {
  return (
    <article className="card p-6 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-xl font-semibold text-heading leading-tight">{post.title}</h3>
        {post.date && <span className="text-sm text-gray-600 whitespace-nowrap">{post.date}</span>}
      </div>
      {post.excerpt && <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>}
      <a
        className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1"
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {readMoreLabel}
        <span aria-hidden>→</span>
      </a>
    </article>
  );
}
