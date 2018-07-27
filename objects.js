var playlist = { artist: "song title" };

function updatePlaylist(playlist, artistName, songTitle) {
<<<<<<< HEAD
  playlist[artistName] = "song title";
=======
  playlist[artist] = "song title";
>>>>>>> 9576fb570aadfdc88093a5c6a388cfb8253d338c
  return playlist;
} 

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
delete playlist[artistName];
=======
 delete playlist.artistName;
>>>>>>> 9576fb570aadfdc88093a5c6a388cfb8253d338c
return playlist;
}