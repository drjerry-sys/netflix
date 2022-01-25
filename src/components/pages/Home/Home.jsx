import React from 'react';
import Navbar from '../../Navbar/Navbar';
import './Home.scss';
import Featured from '../../Featured/Featured';
import List from '../../List/List';

const Home = () => {
    return ( 
        <div className="home">
            <Navbar />
            <Featured type="movie" />
            <List />
        </div>
     );
}
 
export default Home;