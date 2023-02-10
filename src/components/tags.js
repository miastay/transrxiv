import { useState, useEffect } from 'react';

import '../styles/tags.scss';

export let TAGS = [
    {'name': 'surgery', 'disp': 'surgery', 'level': 0},
    {'name': 'mtf', 'disp': 'male-to-female', 'level': 0, 'type': 'f'},
    {'name': 'hrt', 'disp': 'hormone replacement therapy', 'level': 0},
    {'name': 'ftm', 'disp': 'female-to-male', 'level': 0, 'type': 'm'},
    {'name': 'name', 'disp': 'name', 'level': 0},
    {'name': 'topsurgery', 'disp': 'top', 'level': 0},
    {'name': 'bottomsurgery', 'disp': 'bottom', 'level': 0},
    {'name': 'therapy', 'disp': 'therapy', 'level': 0},
    {'name': 'voice', 'disp': 'voice', 'level': 0},
    {'name': 'ffs', 'disp': 'facial feminization', 'level': 0, 'type': 'f'},
    {'name': 'vaginoplasty', 'disp': 'vaginoplasty', 'level': 0, 'type': 'f'},
    {'name': 'breastaug', 'disp': 'breast augmentation', 'level': 0, 'type': 'f'},
    {'name': 'vaginoplasty', 'disp': 'phalloplasty', 'level': 0, 'type': 'm'},
    {'name': 'sti', 'disp': 'sti', 'level': 0},
    {'name': 'selfharm', 'disp': 'self-harm', 'level': 2},
    {'name': 'suicide', 'disp': 'suicide', 'level': 2},
    {'name': 'depression', 'disp': 'depression', 'level': 2},
]


export function TagList ({setActiveTags}) {

    const [activeTagsState, setActiveTagsState] = useState([])

    function setTagActivity (tag, lvl) {
        TAGS[TAGS.findIndex((x) => x.name == tag.name)]['level'] = lvl;
        for(let tag of TAGS.filter((x) => x.type == 'f')) {
            tag['level'] = 1;
        }
        //setActiveTags(([...TAGS].filter((x) => !x.active)))
    }

    useEffect(() => {
        setActiveTagsState((TAGS.filter((x) => !x.active)))
    }, [TAGS])

    return (
        <>
            <div className={'taglist'} >
                {activeTagsState.map((tag) => <Tag tag={tag} passLevel={setTagActivity} isInteractable={true} level0={tag.level}/>)}
            </div>
        </>
    )
}

export function Tag ({tag, index, level0, passLevel, isInteractable}) {

    const [level, setLevel] = useState(level0);

    function changeLevel () {
        if(!isInteractable) return;
        passLevel(tag, (level + 1) % 3);
        setLevel((level + 1) % 3);
    }

    return (
        <div className={level == 0 ? 'tag' : (level == 1 ? 'tag on' : 'tag off')} onClick={() => changeLevel()}>
            <span>{tag.disp}</span>
        </div>
    )
}
