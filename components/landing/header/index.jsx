import React from 'react';

function Header(props) {
    const name = props.name;
    return (
        <>
        <div class="text-white text-3xl font-bold pl-10">
            {name}
        </div>
        <div class="pl-8 pr-96 mt-3">
            <hr/>
        </div>
        </>
    )
}

export default Header;