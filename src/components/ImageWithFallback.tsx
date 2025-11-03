import { useState } from "react";

interface Props {
    src: string;
    alt: string;
    className?: string;
}


export default function ImageWithFallback({ src, alt, className }: Props) {
    const [imgSrc, setImgSrc ] = useState(src); 

    const handleError = () => {
        setImgSrc("https://via.placeholder.com/200x200?text=No+Image");
    };



    return (
        <img 
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
            style={{objectFit: "contain", width: "100%", height: "200px"}}
            />
    );
}