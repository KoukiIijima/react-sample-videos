import React from 'react'

const VideoItem = ({video}) =>  {
    return (
        <div>
            <img alt="" src={video.snippet.thumbnails.medium.url} />
            <p>{video.snippet.title}</p>
        </div>
    )
}

export default VideoItem
