import React from 'react';
import { img_300, unavailable } from './config/config';
import Badge from '@material-ui/core/Badge';
import './SingleContent.css';

function SingleContent({
    id,poster,title,date,media_type,vote_average,
}) {
  return <div className='media'>
      <Badge badgeContent={vote_average} color ={vote_average>6? "primary" : "secondary"}/>
      <img className='poster' src ={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
      <strong className='title'>{title}</strong>
      <span className='subtitle'>{media_type === "tv" ? "TV Series" : "Movie"}
      <span className="subtitle">{date}</span>
      </span>
  </div>;
}

export default SingleContent;
