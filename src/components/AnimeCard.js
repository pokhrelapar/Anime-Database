import React from 'react'

//placeholder for anime info.... dispplayed as a card
const AnimeCard = ({anime}) => {
  return (
     
      
        <article className="anime-card">
            <a 
                href={anime.url} 
                target= "_blank"   // opens link in another tab
                rel="noreferrer noopener" 
            >
                <figure>
                    <img 
                        src={anime.image_url}
                        className='img-fluid'
                        alt='anime images'
                    />

                    <figcaption>
                            <h3><strong>{anime.title} </strong> </h3>                </figcaption>
                </figure>
            
            </a>
            
        </article>
    


  )
}

export default AnimeCard;