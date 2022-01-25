import React from 'react';
import './Watch.scss';
import reckless from '../../../assets/videos/reckless_love.mp4';
import { ArrowBackOutlined } from '@material-ui/icons';

const Watch = () => {
    return ( 
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined  className="icon"/>
                <span>Home</span>
            </div>
            <video src={reckless} className="video" autoPlay progress controls />
        </div>
     );
}
 
export default Watch;