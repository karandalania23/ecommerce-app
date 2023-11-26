import React from 'react';

function Header(props) {
    const name = props.name;
    return (
        <>
            <div class="text-black text-3xl font-bold pl-10">
                {name}
            </div>
            
        </>
    )
}

export default Header;