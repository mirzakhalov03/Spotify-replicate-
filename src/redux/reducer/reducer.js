import { LIKE, SET_MUSIC_DATA, SET_MUSIC_LIST } from "../actions/actions";

const initialState = {
    like: JSON.parse(localStorage.getItem('likedItems')) || [], 
    trackData: [],
    trackList: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIKE:
            const updatedLikes = [...state.like, action.payload];
            localStorage.setItem('likedItems', JSON.stringify(updatedLikes));
            return {
                ...state,
                like: updatedLikes
            };
        case SET_MUSIC_DATA:
            return {
                ...state,
                trackData: action.payload
            };
        case SET_MUSIC_LIST:
            return {
                ...state,
                trackList: action.payload
            };
        default:
            return state;
    }
};
