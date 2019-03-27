import { combineReducers } from 'redux';
import playlists from './playlists';
import playlistDetails from './playlistDetails';
import error from './error';
import player from './player';

export default combineReducers({
  // example: () => [],
  playlists,
  playlistDetails,
  error,
  player,
});
