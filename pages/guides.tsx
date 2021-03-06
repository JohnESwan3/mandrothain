import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Guides({ posts }: Props) {
  return (
    <div>
      <Head>
        <title>Mandrothain | Guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section-template rounded-div glow-main">
        <div className="section-template grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-8">
          {/*Sanity*/}
          {posts.map((post) => (
            <Link key={post._id} href={`/guides/${post.slug.current}`}>
              <div className="article-card group">
                <Image
                  layout="responsive"
                  blurDataURL={urlFor(post.mainImage).url()!}
                  width={350}
                  height={240}
                  quality={75}
                  src={urlFor(post.mainImage).url()!}
                  alt={post.title}
                  className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                />
                <div className="flex justify-between p-5">
                  <div>
                    <p className="text-lg text-secondary font-semibold">
                      {post.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

// SSR the Sanity Data
export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    mainImage,
    slug,
    description,
    publishedAt
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};
