import React from 'react';

export default function ColorText( { text, link = null, color = "gold"} ) {
    return (
        <>
            {link ? 
                <span style={{color: "#99c2b4"}} className="hideText">
                    <a href={link} rel={"noreferrer"} target={"_blank"}>
                        {text}
                    </a>
                </span>
            :
                <span style={{color: color == "gold" ? "#c2b199" : "#99c2b4"}}>
                    {text}
                </span>
            }
            
        </>
        
    )
}
