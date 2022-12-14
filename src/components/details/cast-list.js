import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmbdApi';
import apiConfig from '../../api/apiConfig'

const CastList = props => {

    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCasts = async () => {
            const response = await tmdbApi.casts(category, props.id);
            setCasts(response.data.cast.slice(0, 5));
        }
        getCasts();
    }, [category, props.id]);
    return (
        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}></div>
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;