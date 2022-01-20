import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";
import {Button} from "semantic-ui-react";

export default function Admin(){
    const router = useRouter();

    const [isLogin, setIsLogin] = useState(false);

    const checkLogin = ()=>{
        axios.get("/api/isLogin").then( (res) => {
            if(res.status === 200 && res.data.name){
                //로그인
                setIsLogin(true);
            }else{
                //로그인안됨
                router.push("/login", "/login");
            }
        })
    }

    const logout = ()=>{
        axios.get("/api/logout").then((res)=>{
            if(res.status === 200){
                router.push("/","/")
            }
        })
    }

    useEffect(()=>{
        checkLogin();
    },[]);
    return (
        <div>
            admin
            {isLogin && <Button onClick={logout}>Logout</Button>}
        </div>
    );
}