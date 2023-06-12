import React, { useEffect } from "react";

const VideoBackground = () => {
  

    return (
        <div>
            <img
             style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                minWidth: "100%",
                minHeight: "100%",
                width: "auto",
                height: "auto",
                zIndex: "-100",
                objectFit: "cover",
            }}
            src="/bg.jpg"/>
        </div>
    );
};

export default VideoBackground;
