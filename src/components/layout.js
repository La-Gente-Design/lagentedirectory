import React from "react";
import { Helmet } from "react-helmet";
import "../styles/index.scss";

const Layout = ({ children }) => (
  <>
    <Helmet
      title="LA GENTE: The Latinx/e Theatre Production Network"
      meta={[
        {
          property: "description",
          content: "LA GENTE: The Latinx/e Theatre Production Network",
        },
        // { property: "og:title", content: "LA GENTE: The Latinx/e Theatre Production Network" },
        // {
        //   property: "og:description",
        //   content:
        //     "A Twitter directory of accomplished women in the design industry.",
        // },

        // {
        //   property: "og:image",
        //   content: "https://womenwho.design/opengraph.png",
        // },
        // {
        //   property: "og:url",
        //   content: "https://womenwho.design",
        // },
        // { property: "og:type", content: "website" },
        // { property: "og:site_name", content: "Women Who Design" },
        // { property: "twitter:site", content: "@womenwhodesign" },
        // { property: "twitter:creator", content: "@julesforrest" },
        // { property: "twitter:card", content: "summary_large_image" },
        // {
        //   property: "twitter:image",
        //   content: "https://womenwho.design/opengraph.png",
        // },
      ]}
    />
    {children}
  </>
);

export default Layout;
