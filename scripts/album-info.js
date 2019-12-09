{
  $('#album-title').text(album.title); // Inserts album title from album-data.js to #album-title element
  $('img#album-cover-art').attr('src', album.albumArtUrl); // Adds albumArtUrl from album-data.js to the img element in index.html
  $('.artist').text(album.artist); // Adds the artist name from album-data.js to the artist HTML element
  $('#release-info').text(album.releaseInfo);
}
