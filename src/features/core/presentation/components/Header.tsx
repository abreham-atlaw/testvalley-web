import React from "react";
import Logo from "@/assets/images/logo.svg";
import EventImage from "@/assets/images/events.svg";
import { Link } from "react-router-dom";
import styles from '@/assets/css/core/components/Header.module.css';


interface HeaderState{
    dropVisible: boolean,
    categories: {
        icon: string, 
        name: string
    }[]
}

export default class Header extends React.Component<{}, HeaderState>{

    constructor(props: {}){
        super(props);
        this.state = {
            dropVisible: false,
            categories: [
                {
                    icon: "fa-brands fa-apple",
                    name: "애플",
                },
                {
                    icon: "fa-solid fa-magnifying-glass",
                    name: "애플",
                },
                {
                    icon: "fa-solid fa-magnifying-glass",
                    name: "애플",
                },
                {
                    icon: "fa-solid fa-magnifying-glass",
                    name: "애플",
                }
            ]
        }
    }

    toggleDropDown = () => {
        this.setState(prevState => ({
            ...prevState,
            dropVisible: !prevState.dropVisible
          }));
    }

    render(): React.ReactNode {
        return (<header className="w-screen relative md:fixed z-[101] h-[72px]">
        
        <nav className="p-5 border border-gray bg-light relative">
            <div className="w-full md:w-[960px] mx-auto flex my-auto relative">
                <div className="flex">
                    <Link className="my-auto" to="/"><img src={Logo} className="w-28"/></Link>
                    <button className="text-primary ml-5 my-auto hidden md:block" onClick={this.toggleDropDown}><i className="fa-solid fa-bars"></i>카테고리</button>
                </div>

                <div className={`p-3 border-grey border rounded-md text-sm mx-auto my-auto hidden md:block ${styles.searchBar}`}>
                    <label>
                    <i className="fa-solid fa-magnifying-glass text-dark"></i>
                    <input type="search" placeholder="살까말까 고민된다면 검색해보세요!" className="w-64 ml-3"/>
                    </label>
                </div>
                
                <div className="my-auto hidden md:flex"> 
                    <Link to="my/event" className="">
                        <img src={EventImage}/>
                    </Link>
                    <div style={{ borderLeft: "1px solid"}} className="h-5 mx-3 border-grey my-auto" />
                    <Link to="sign-in" className="my-auto">
                        로그인 / 회원가입
                    </Link>
                </div>   
                <div className="flex md:hidden text-darkGrey ml-auto text-2xl relative">
                    <Link to="/my/alert"><i className="fa-regular fa-bell mr-5"></i></Link>
                    <Link to="/search"><i className="fa-solid fa-magnifying-glass"></i></Link>
                </div>
            </div>
        </nav>
        <div className={`w-full absolute bg-light z-[200]   ${(this.state.dropVisible)?'block':'hidden'}`}>
            <div className="w-[960px] mx-auto flex py-10">
                {
                    (this.state.categories.map(
                        (value, idx: number) => (
                            <Link to={`/categories?name=${value.name}`} className="block mr-7 " key={idx}>
                                <div className="rounded-2xl bg-grey p-5 w-18 h-18 flex text-xl">
                                    <i className={`${value.icon} m-auto`}/>
                                </div>
                                <div className="text-center mt-5">
                                    { value.name }
                                </div>
                            </Link>
                        )
                    ))
                    
                }
            </div>

        </div>
        
    </header>)
    }

}