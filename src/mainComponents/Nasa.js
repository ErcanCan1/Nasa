import React from "react";
import Explanation from "./Explanation";
import Image from "./Image";
import Copyright from "./Copyright";
import Date from "./Date";
import Title from "./Title";



function Nasa(props) {

    const {title, date, copyright,url, media_type, explanation} = props.data
    return(
        <div className="nasa">
           <Title title ={title} />
           <Date date = {date} />
           <Copyright copyright = {copyright} />
           <Image url = {url} media = {media_type} />

           <Explanation explanation ={explanation} />
        </div>
    )n
}

export default Nasa;