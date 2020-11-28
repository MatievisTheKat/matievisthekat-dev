import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/layout/SEO";
import Box from "../components/Box";

interface State {}
interface Props {
  path: string;
}

export default class CDNFile extends React.Component<Props, State> {
  public render() {
    if (typeof window === "undefined") return null;
    const path = this.props.path;
    window.location.href = `${process.env.API}${path}`;

    return (
      <Layout>
        <SEO title="Content Delivery Network" />
        <Box>
          <h1>Redirecting. Please wait...</h1>
        </Box>
      </Layout>
    );
  }
}
