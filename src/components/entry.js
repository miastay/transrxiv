import { useState, useEffect } from 'react';
import '../styles/entry.scss';

const Entry = ({tags, link, title, abstract, authors, search, match}) => {

    const [abstractElement, setAbstractElement] = useState(<span>{abstract}</span>)

    // function highlightAbstract(term) {
    //     let termIndex = abstract.indexOf(term);
    //     let abs =   <>
    //                     <span>{abstract.substring(0, termIndex)}</span>
    //                     <span class="highlight">{term}</span>
    //                     <span>{abstract.substring(termIndex + term.length)}</span>
    //                 </>
    //     return abs;
    // }

    useEffect(() => {
        
        let termIndex = abstract.indexOf(search);
        if(termIndex == -1) { setAbstractElement(<span>{abstract}</span>); return; }
        let abs =   <>
                        <span>{abstract.substring(0, termIndex)}</span>
                        <span className="highlight">{search}</span>
                        <span>{abstract.substring(termIndex + search.length)}</span>
                    </>
        setAbstractElement(abs);
    }, [search])


    return (
        <div className={'entry'}>
            <h3><a href={link}>{title} ↗</a></h3>
            <h5>{authors}</h5>
            <span>{abstractElement}</span>
            <div className={'foot'}>
                <div>{tags}</div>
                <div className={'match'}>{match}</div>
            </div>
        </div>
    )
}

export default Entry;
