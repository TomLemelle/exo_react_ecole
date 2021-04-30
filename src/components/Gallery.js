import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';


const Gallery = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=20}`)
            .then(response => response.data)
            .then(setData);
    }, []);
    
    console.log(data);

    return (
        <div>
            <h1>Gallerie de photos </h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {data.map(data =>
                <LazyLoad height={150} once >
                    <img key={data.id} src={data.thumbnailUrl} alt={data.title} />
                </LazyLoad>
            )}
            </div>
        </div>
    );
};

export default Gallery;