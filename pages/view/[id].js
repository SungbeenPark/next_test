import axios from "axios";
import Item from "../../src/component/Item";
import Head from "next/head";

const Post = ({item,name}) => {
    return (
        <>
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name="description" content={item.description}></meta>
                    </Head>
                    {name} 환경입니다.
                    <Item item={item}></Item>
                </>
            )}
        </>
    )
}

export default Post;

export async function getServerSideProps(context){//이건 node js 환경
    const id = context.params.id
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl)
    const data = res.data

    return {
        props:{
            item:data,
            name: process.env.name
        }
    }

}