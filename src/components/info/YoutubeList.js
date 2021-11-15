import React from "react";
import YoutubeItem from "../info/YoutubeItem";

const YoutubeList = (props) => {
    console.log(props);
    return (
        <>
            {props.videos.map((video) => (
                <YoutubeItem key={video.id.videoId} video={video} />
            ))}
        </>
    )
}

export default YoutubeList;