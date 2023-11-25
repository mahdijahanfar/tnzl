import React from 'react';
import News from '../../components/news/News';
import ImagesGallery from '../../components/imagesGallery/ImagesGallery';
import Articles from '../../components/articles/Articles';
import Poems from '../../components/poems/Poems';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div >
            <Helmet>
                <title>
                    تنزیل | خانه
                </title>
            </Helmet>
            <News />
            <ImagesGallery />
            <Articles />
            <Poems />
        </div>
    );
}

export default Home;