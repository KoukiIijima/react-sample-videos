import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrabs", duration: "4:05" },
    { title: "Mecarana", duration: "2:30" },
    { title: "All Stars", durations: "1:15" },
    { title: "I want it that way.", duration: "5:00" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
