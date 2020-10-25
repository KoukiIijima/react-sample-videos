import axios from 'axios'

const KEY = 'AIzaSyAPoiJ_Fj647PI3uy3t2m3V1Aa7mxMb7rY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxREsults: 5,
        key: KEY,
    }
})