import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";


const trackReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_tracks' :
            return action.payload;
        default:
            return state;
    }
};

const fetchTracks = dispatch => async () => {
    try{
        const response = await trackerApi.get('/tracks');
        console.log(response.data)
        dispatch({ type: 'fetch_tracks', payload: response.data});
    }
    catch (e) {
        console.log("ERRORS GET TRACKS", e);
    }
};
const createTrack = dispatch => async (name, locations) => {
    try{
        await trackerApi.post('/tracks', {name, locations});
    }catch (e) {
        console.log("ERRORS CREATE TRACK", e);
    }

};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
);