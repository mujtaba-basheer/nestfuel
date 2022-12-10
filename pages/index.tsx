import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import Hero from "../components/Home/Hero";

const Layout = styled.main``;

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>NestFuel</title>
        </Head>
        <Hero />
      </Layout>
    </>
  );
};

export default IndexPage;
