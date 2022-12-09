import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Layout = styled.main``;

const StyledContainer = styled.div``;

const IndexPage: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Nestfuel</title>
        </Head>
        <StyledContainer>Nestfuel</StyledContainer>
      </Layout>
    </>
  );
};

export default IndexPage;
