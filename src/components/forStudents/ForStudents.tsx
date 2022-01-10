import React from 'react'
interface Props{
    path:string;
}
const ForStudents:React.FC<Props>=({path})=> {
    console.log(path)
    return (
        <div>
           {path} 
        </div>
    )
}

export default ForStudents
