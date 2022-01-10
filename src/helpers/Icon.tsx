import React from "react";

interface Props {
    className?: string;
    path: string;
    fill?: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

const Icon: React.FC<Props> = ({
    path,
    fill = "currentColor",
    width = "100%",
    height = "100%",
    viewBox = "0 0 512 512",
    className,
}) => {
    return (
        <svg
            className={className}
            viewBox={viewBox}
            fill={fill}
            width={width}
            height={height}
            fillRule="evenodd"
        >
            <path d={path} />
        </svg>
    );
};

export default Icon;
