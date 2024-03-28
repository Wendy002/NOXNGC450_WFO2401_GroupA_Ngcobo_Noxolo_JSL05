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
  
    const playListCards = document.getElementById('playlists');
    const playlist = Object.entries(guardians).map(([guardian,preferredGenre]) => {
        const preferredSongs =  songs.filter(song => song.genre === preferredGenre);
        return {guardianName: guardian , songList: preferredSongs}; // return object with name of gurdian and preferred songs
    });
    //first breakdown for each user
    
    playlist.map(eachGuadianList => {

        let playListCard = document.createElement('div');
        playListCards.appendChild(playListCard);
        playListCard.classList()
        let guardianNameHeading = document.createElement('h2');
        guardianNameHeading.textContent = `${eachGuadianList.guardianName}'s Playlist`;
        playListCard.appendChild(guardianNameHeading);

        eachGuadianList.songList.map(song => { 
            let songPreferred = document.createElement('p');
            songPreferred.textContent = `${song.title} by ${song.artist}`
            playListCard.appendChild(songPreferred);
    
        });


    });
    



}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


