import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "./Navbar";

type Props = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  date?: string;
  children?: ReactNode;
};

const Container = (props: Props) => {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Mikalai Paliakou | Developer, musician, dreamer",
    description: `Front-end developer, musician, dreamer.`,
    image:
      "https://portfolio-lazzzaroni.vercel.app/static/images/preview-banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://portfolio-lazzzaroni.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://portfolio-lazzzaroni.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="lazzzaroni" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lazzzaroni" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-3">
        <Navbar />
      </div>
      <main
        id="skip"
        className="flex flex-col justify-center px-6 bg-zinc-50 dark:bg-zinc-900"
      >
        {children}
      </main>
    </>
  );
};

export default Container;
