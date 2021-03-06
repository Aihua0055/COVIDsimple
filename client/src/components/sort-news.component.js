import React, { useState } from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../App.css';

/* used to sort news */

const SortNewsButton = ( {handleSortClick} ) => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);


    return(
        <ButtonDropdown name='rate-article' size="sm" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Re-sort Results
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem  onClick={e => handleSortClick(e, "date")}>
                    Date
                </DropdownItem>
                <DropdownItem onClick={e => handleSortClick(e, "source")}>
                    Source
                </DropdownItem>
                <DropdownItem  onClick={e => handleSortClick(e, "name")}>
                    Name
                </DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    )
}

export default SortNewsButton;