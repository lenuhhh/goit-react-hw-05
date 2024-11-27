import axios from "axios";

const options = {
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjA5MGExYjc2MzM4YThmZTgyZjUwMzNmMWMwZGM4NiIsIm5iZiI6MTczMjMwOTU2Ni40MTIxMzA0LCJzdWIiOiI2NzQwZjEyNzRkZmEwNmI1ZGY5MzA4MGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1NhhpPZbtAM3HPKueFtIOB151EADSx2tbUhy8NPKHwI'
    }
}

export const getTrendingMovies = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    return data.results
}

export const getMovieDetails = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options)
    return data
}

export const getMovieCast = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
    return data.cast
}

export const getMovieReviews = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
    return data.results
}

export const searchMovie = async (query) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options)
    return data.results
}


