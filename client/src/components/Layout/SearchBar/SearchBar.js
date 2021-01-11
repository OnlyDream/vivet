import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.scss';

function SearchBar(props) {

    const [isFocus, setIsFocus] = useState(false);

    return (
        <div className={`search-bar ${isFocus ? 'search-bar--focus' : ''}`}>
            <input type="text" className="search-bar__input" placeholder="Shroud" onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} />
            <FontAwesomeIcon icon={faSearch} className={`search-bar__icon ${isFocus ? 'search-bar__icon--focus' : ''}`} />
        </div>
    );
}

export default SearchBar;