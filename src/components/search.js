import { useState, useEffect } from 'react';
import '../styles/search.scss';

const Search = ({setSearch}) => {
    return (
        <div className='searchbar'>
            <input type="text" onInput={(e) => setSearch(e.target.value)} placeholder={'enter any search term...'}></input>
        </div>
    )
}

export default Search;
