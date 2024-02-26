import React from 'react'

export default function ColorText( { text, link = null} ) {
    return (
        <>
            {link ? 
                <span style={{color: "#99c2b4"}} className="hideText">
                    <a href={link} rel={"noreferrer"} target={"_blank"}>
                        {text}
                    </a>
                </span>
            :
                <span style={{color: "#c2b199"}}>
                    {text}
                </span>
            }
            
        </>
        
    )
}
