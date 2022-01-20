import Head from 'next/head'
import Axios from "axios";
import ItemList from "../src/component/ItemList";
import {Divider, Header} from "semantic-ui-react";

export default function Home({ list }) {

    return (
        <div>
            <Head>
                <title>HOME | SBT</title>
                <meta name="description" content="sbt 홈피입니다."></meta>
            </Head>
                <>
                <Header as={"h3"} style={{paddingTop:40}}>베스트 상품</Header>
                <Divider/>
                <ItemList list={list.slice(0,9)}></ItemList>
                <Header as={"h3"} style={{paddingTop:40}}>신 상품</Header>
                <Divider/>
                <ItemList list={list.slice(10)}></ItemList>
                </>
        </div>
    )
}

export async function getStaticProps() {
    const apiUrl = process.env.apiUrl;
    const res = await Axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            list: data,
            name: process.env.name,
        },
    };
}