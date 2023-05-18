import React from "react";

const Button = (props) => {
    return (  
        <div>
            <Button className={'button ' + props.className}/>
        </div>
        
    );
}
 
export default Button;