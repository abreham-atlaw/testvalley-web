import React from "react";
import Shortcut from "../../data/models/Shortcut";
import { Link } from "react-router-dom";


interface ShortcutsProps{

    shortcuts: Shortcut[]

}

interface ShortcutsState{

}


export default class Shortcuts extends React.Component<ShortcutsProps, ShortcutsState>{
    

    render(): React.ReactNode {

        return (
        <>
            <div className="flex flex-wrap">

                {
                    this.props.shortcuts.map(
                        (shortcut: Shortcut, idx: number) => (
                            <Link to={shortcut.linkUrl} className="mx-auto mt-5 md:mt-0" key={idx}>
                                <div className="">
                                    <img src={shortcut.imageUrl} className="w-[48px] md:w-16"/>
                                    <span className="text-center block text-[13px] mt-[8px]">{ shortcut.title }</span>
                                </div>
                            </Link>
                        )
                    )
                }

            </div>
        
        
        </>
        )
        
    }

}