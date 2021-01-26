import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import Box from "../components/Box";

interface State {}
interface Props {}

export default class Products extends React.Component<Props, State> {
  public render() {
    return (
      <Layout>
        <SEO title="Products" />
        <Box>
          <h1 className="font-nunito font-bold">Development</h1>
          <br />
          <span>
            I offer freelance development services. I can create websites, desktop and mobile apps, bots, and a variety of miscellaneous things.
            <br />
            <br />
            I am most experienced in JavaScript but I do know Python, Java, C#, C++, Dart, and HTML/CSS
            <br />
            <br />
            If you are interested please{" "}
            <a className="link" rel="noreferrer" target="_blank" href="mailto:matthew@matievisthekat.dev">
              email me
            </a>{" "}
            at matthew@matievisthekat.dev
          </span>
        </Box>
      </Layout>
    );
  }
}
