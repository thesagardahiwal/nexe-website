export default function BlogPost({ params }: { params: { slug: string } }) {
    return <main><h1>Blog Post: {params.slug}</h1></main>;
  }
  