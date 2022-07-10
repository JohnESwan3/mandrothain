import Image from "next/image";
import { GetStaticProps } from "next";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import PortableText from "react-portable-text";

interface Props {
  post: Post;
}

function Guides({ post }: Props) {
  return (
    <main className="">
      <section className="section-template">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="rounded-div glow-main">Image</div>
          <div className="rounded-div glow-main-press col-span-2"></div>
        </div>
      </section>
      <article className="section-template">
        <div className="">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => <h1 className="" {...props} />,
              h2: (props: any) => <h2 className="" {...props} />,
              normal: (props: any) => <p className="" {...props} />,
              li: ({ children }: any) => <li className="">{children}</li>,
              link: ({ href, children }: any) => (
                <a href={href} target="_blank" className="">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
    </main>
  );
}

export default Guides;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug] [0] {
    _id,
    createdAt,
    title,
    mainImage,
    slug,
    body,
    description,
    author-> {
      name,
      image
    }
  }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};
