// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "So Amazing", artist: "Luther Vandross", genre: "R&B" },          // Feel free to add even more songs
    { title: "ART", artist: "Tyla", genre: "R&B" },
    { title: "Me & U", artist: "Tems", genre: "R&B" },
    { title: "Jump", artist: "Tyla", genre: "R&B" },
    { title: "Abalele", artist: "Kabza da small,Dj Maphorisa ft Ami Faku ", genre: "Amapiano" },
    { title: "Yes God", artist: "Oscar Mbo ft Murda ", genre: "Amapiano" }
   

];



// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax":"R&B",
    "Rocket":"Amapiano",
    "Groot": "Rock"
};


// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
  
    const playListCards = document.getElementById('playlists'); // get the div container for all playlists
    const playlist = Object.entries(guardians).map(([guardian,preferredGenre]) => { //get name of guardian and genre
        const preferredSongs =  songs.filter(song => song.genre === preferredGenre);  // get all songs with the genre that matches the genre of the guardian
        return {guardianName: guardian , songList: preferredSongs}; // return object with name of gurdian and preferred songs
    });
    

    
    playlist.map(eachGuadianList => { // use the playlist object with preferred songs for each user

        let playListCard = document.createElement('div');        //create container for each user playlist and append it to main container
        playListCards.appendChild(playListCard);
        playListCard.classList.add('playlist');   // add styling to the card playlist
        let guardianNameHeading = document.createElement('h2');  
        guardianNameHeading.textContent = `${eachGuadianList.guardianName}'s Playlist`;
        playListCard.appendChild(guardianNameHeading); // appends the heading h2 element

        eachGuadianList.songList.map(song => {  // we then loop through the songs for each user using map()
            let songPreferred = document.createElement('p'); //p tag element
            const songLink = document.createElement('a'); // anchor tag for song titles
            songLink.classList.add('song');
            songLink.classList.add('song-title');
            songLink.href= "#";
            songLink.textContent = `${song.title}`;
            songPreferred.appendChild(songLink);
            songPreferred.append(` by ${song.artist}`)
            playListCard.appendChild(songPreferred);
            
    
        });


    });
    



}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


