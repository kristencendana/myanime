
 const mapStateToProps = state => ({
  animeList: state.animes.animeList,
  topAnime: state.animes.topAnime
});

const RecommendedList = (props) => {

// console.log(props.anime.topAnime)

  return (
    <div>
      RecommendedList
    {/* {props.anime.topAnime.map(anime => (
      <a 
        href="#"
        target="_blank"
        key={anime.mal_id}
        rel="noreferrer">
          {anime.title}
        </a>
     ))} */}
    </div>
    
  )
}

export default RecommendedList;