const apiKey= "e14eb0714f39d39dde8b66fee3f69804";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${apiKey}&with_genres=28`,
    fetchComedyMovies: `/discover/tv?api_key=${apiKey}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${apiKey}&with_genres=27`,
    fetchRomanceMovies:`/discover/tv?api_key=${apiKey}&with_genres=10749`,
    fetchDocumentries:`/discover/tv?api_key=${apiKey}&with_genres=99`,


}

export default requests;
// https://api.themoviedb.org/3/movie/550?api_key=e14eb0714f39d39dde8b66fee3f69804