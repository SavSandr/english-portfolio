import React from 'react'

interface Props{
    path:string;
}
const About:React.FC<Props>=({path})=> {
    console.log(path)
    return (
        <div>
            
        </div>
    )
}

export default About
