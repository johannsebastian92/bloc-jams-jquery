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
    `);
    // Code above creates a song element and is passed a template literal with the place holder expression ${}
    // It takes the index/title/duration from album-data.js and inserts the data inside the {}
    // The code above creates a play/pause button we take from song-list.css
    // We place the button in the same table row as the song number/index b/c the button needs to be over the index

    song.element.on('click', event => {
      player.playPause(song);
    });
    // Code above gives the song.element an event listener. The method we pass is playPause() from the player.js
    // On 'click', it will play or pause the song.

    $('#song-list').append(song.element); // Appends the song.element from this js to the DOM html element song-list
  });
}
