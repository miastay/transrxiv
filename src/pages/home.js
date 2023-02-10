import { useState, useEffect } from 'react';
import { ENTRIES, getEntries } from '../api';
import Search from '../components/search';
import { TagList, TAGS } from '../components/tags';
import Entry from '../components/entry';
import '../styles/home.scss';

const Home = () => {

    const [currentSearch, setCurrentSearch] = useState('');
    const [activeTags, setActiveTags] = useState([]);

    function matchesSearchGrams(entry) {
        let summ = (entry.title + ' ' + entry.authors + ' ' + entry.abstract).toLowerCase();
        let grams = currentSearch.trim().toLowerCase().split(' ');
        var matches = 0;
        for(var gram of grams) {
            if(summ.includes(gram)) { matches++; }
        }
        return matches;
    }
    

    function generateResults () {
        let matches = ENTRIES.filter((x) => matchesSearchGrams(x))
        let matchAmts = []
        for(var entry of ENTRIES) {
            matchAmts.push(matchesSearchGrams(entry))
        }
        let numGrams = currentSearch.trim().toLowerCase().split(' ').length;
        return (matches).sort(function(a, b) {return matchesSearchGrams(b) - matchesSearchGrams(a)}).map((entry, i) => <Entry tags={entry.tags} title={entry.title} abstract={entry.abstract} authors={entry.authors} link={entry.link} search={currentSearch.trim().toLowerCase().split(' ')[numGrams - 1]} match={Math.round(100 * (matchAmts[i] / (numGrams))) + '%'}/>)
    
    }

    return (
        <div className={'home'}>
            <div className={'topcontainer'}>
                <div className={'logo'}><h1>transrxiv</h1></div>
                <div className={'search'}><Search setSearch={setCurrentSearch} /></div>
            </div>
            <div className={'inner'}>
                <div className={'tagcontainer'}>
                    <TagList setActiveTags={setActiveTags} />
                </div>
                <div className={'contentcontainer'}>
                    {generateResults()}
                </div>
            </div>
        </div>
    )
}
export default Home;
