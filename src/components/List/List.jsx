import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef, useState } from 'react';
import './List.scss';
import ListItem from '../ListItem/ListItem';

const List = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved, setIsMoved] = useState(false);

    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true)
        const distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        } else if (direction === 'right' && slideNumber < 5){
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    }

    return ( 
        <div className="list">
            <span className="listTitle">Continue to Watch</span>
            <div className="wrapper">
                {isMoved && (
                    <ArrowBackIosOutlined className="sliderArrow left" onClick={() => handleClick('left')} />
                )}
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={() => handleClick('right')} />
            </div>
        </div>
     );
}
 
export default List;