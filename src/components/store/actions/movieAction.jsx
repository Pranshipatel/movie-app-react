export {removeMovie} from "../reducers/movieSlice"
import axios from "../../../utils/axios"
import { loadMovie } from "../reducers/movieSlice"


export const asyncloadMovie = (id)=>async(dispatch,getState)=>{
  try {
    const detail = await axios.get(`/movie/${id}`)
    const externalid = await axios.get(`/movie/${id}/external_ids`)
    const recommendations = await axios.get(`/movie/${id}/recommendations`)
    const similar = await axios.get(`/movie/${id}/similar`)
    const videos = await axios.get(`/movie/${id}/videos`)
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`)

    // console.log("Fetched videos:", videos.data.results);

    let wholeData = {
      detail : detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m)=>m.type == "Trailer") || null,
      watchproviders: watchproviders.data.results.US
    }
    // console.log("Selected trailer:", wholeData.videos);
    dispatch(loadMovie(wholeData))
    console.log("whole",wholeData);
  } catch (error) {
    console.log("error",error)
  }
}