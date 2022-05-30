import React from 'react'


/*
 * Example of a JSON string
 * 0:
    end_date: "Sep 2013"
    episodes: 25
    image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98"
    mal_id: 16498
    members: 3416039
    rank: 1
    score: 8.53
    start_date: "Apr 2013"
    title: "Shingeki no Kyojin"
    type: "TV"
    url: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin"
 * 

*/
// a sidebar to display the top 20 popular anime according to Jikan API v3
function Sidebar({topAnime}) {
  return (
    <aside> 
        <nav>
            <h3> Top Anime</h3>
            {topAnime.map(anime =>(
                <a 
                    href={anime.url}
                    target= "_blank" 
                    key = {anime.mal_id}
                    rel="noreferrer noopener">
                    {anime.title}

                </a>


            ))}
          

             
        </nav>
    
    </aside>
  )
}

export default Sidebar;
