import React from 'react';
import './Featured.scss';
import homeImage from '../../assets/images/homeImage.jpg';
import { InfoOutlined, PlayCircleFilled } from '@material-ui/icons';

const Featured = ({ type }) => {
    return ( 
        <div className="featured">
            {type && (
                <div className="category">
                    <span>
                        { type === "movie" ? "Movie" : "Series" }
                    </span>
                    <select name="genre" id="genre">
                        <option value="Genre" className="genre">Genre</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Crime">Crime</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Historical">Historical</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="Western">Western</option>
                        <option value="Animation">Animation</option>
                        <option value="Drama">Drama</option>
                        <option value="Documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src={homeImage} alt="space et astronautic" />
            <div className="info">
                <img src="" alt="" />
                <span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatem, repudiandae quae culpa voluptas ad necessitatibus, error, aliquam voluptatibus magnam nihil unde eum amet itaque id quaerat explicabo quidem alias!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayCircleFilled className="ft-icon" />
                        <span>play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined className="ft-icon" />
                        <span>more</span>
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Featured;