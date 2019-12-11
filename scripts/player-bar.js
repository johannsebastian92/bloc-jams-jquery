{ // Event handler for the play button. On 'click', it takes the playPause method from player.js
  $('button#play-pause').on('click', function () {
    player.playPause();
    $(this).attr('playState', player.playState); // This code gives checks the playState and changes the icons from play to pause depending on the state
  });

  // Next track button code
  $('button#next').on('click', function(){
    if (player.playState !== 'playing') { return; } // Ensures the next track button does not work unless a song is playing

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying); // Gets the index of the player.currentlyPlaying
    const nextSongIndex = currentSongIndex + 1; // Variable for the next song's index

    if (nextSongIndex >= album.songs.length) { return; } // Stops next button if there is no next song
    const nextSong = album.songs[nextSongIndex]; // Takes the current song that is playing and adds 1 in the album.songs array
    player.playPause(nextSong);
  });

  // Previous track button code
  $('button#previous').on('click', function(){
    if (player.playState !== 'playing') { return; }// Ensures the previous track button does not function unless a song is currentlyPlaying

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying); // Gets the index of the currently playing song
    const previousSongIndex = currentSongIndex - 1; // Variable for the previous song's index

    if (previousSongIndex < 0) { return; } // Stops the previous button if there is no previous song
    const previousSong = album.songs[previousSongIndex]; // Takes the current song that is playing and subtracts 1 in the album.songs array
    player.playPause(previousSong);
  });
}
