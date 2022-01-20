import {Menu} from "semantic-ui-react";
import {useRouter} from "next/router";

export default function Gnb() {
    let activeItem = "home"
    const router = useRouter();

    if (router.pathname === "/") {
        activeItem = "home"
    } else if (router.pathname === "/about"){
        activeItem = "about"
    } else if (router.pathname === "/admin"){
        activeItem = "admin"
    }
    const goLink = (e,data)=>{
        if(data.name === 'home'){
            router.push("/", "/")
        } else if(data.name === 'about'){
            router.push("/about","/about")
        } else if(data.name === 'admin'){
            router.push("/admin","/admin")
        }
    }

    return (
        <Menu inverted>
            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={goLink}
            />
            <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={goLink}
            />
            <Menu.Item
                name='Contact Us'
                active={activeItem === 'contact'}
                onClick={()=>{
                    router.push("/contact", "/contact")
                }}
            />
            <Menu.Item
                name='admin'
                active={activeItem === 'admin'}
                onClick={goLink}
            />
        </Menu>
    )
}