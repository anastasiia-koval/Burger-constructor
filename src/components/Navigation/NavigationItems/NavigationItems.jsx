import React, { useState } from 'react'
import './NavigationItems.css'

const NavigationItems = (props) => {
    const [active, setActive] = useState(false);

return(
    <ul className="NavigationItems">
        <li className="ItemList">
            <a href="/" className={active ? 'active' : null}>Burger Builder</a>
            <a href="/" className={active ? 'active' : null}>Checkout</a>
        </li>
    </ul>
);

}

export default NavigationItems;