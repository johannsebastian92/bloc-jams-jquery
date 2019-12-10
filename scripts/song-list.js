{
  album.songs.forEach( (song, index) => { // song parameter holds the song object. index holds the array index from album-data.js
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index+1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"</span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
    `); // Code above creates a song element and is passed a template literal with the place holder expression ${}

    song.element.on('click', event => {
      player.playPause(song);
    });

    $('#song-list').append(song.element);
  });
}
