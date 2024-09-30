document.querySelectorAll('.col-4').forEach(post => {
    const postId = post.getAttribute('data-post-id');
    
    const likeButton = post.querySelector('.like-button');
    const dislikeButton = post.querySelector('.dislike-button');
    const likeCount = post.querySelector('.post-rating-count1');
    const dislikeCount = post.querySelector('.post-rating-count2');

    // Load initial counts from localStorage
    const savedLikes = localStorage.getItem(`${postId}_like`) || 0;
    const savedDislikes = localStorage.getItem(`${postId}_dislike`) || 0;
    likeCount.textContent = savedLikes;
    dislikeCount.textContent = savedDislikes;

    // Like button click event
    likeButton.addEventListener('click', function() {
        let newLikeCount = parseInt(likeCount.textContent) + 1;
        likeCount.textContent = newLikeCount;
        localStorage.setItem(`${postId}_like`, newLikeCount);
    });

    // Dislike button click event
    dislikeButton.addEventListener('click', function() {
        let newDislikeCount = parseInt(dislikeCount.textContent) + 1;
        dislikeCount.textContent = newDislikeCount;
        localStorage.setItem(`${postId}_dislike`, newDislikeCount);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const playlist = [

        " Cant Escape - Louie X.mp3",
        "AZLINK X GUDHEE - DAREGO (MM SIQESTSOUND).mp3",
        "Healing - FlawleSs Prodiigy Lyric Video EditedByKarabxwBlackid.mp3",
        "Not Like Us - Nikosi.mp3",
        "PEMI AZLINK .mp3",
        "Control - FlawleSs Prodiigy.mp3",
        "Heaven Hi - Nikosi.mp3",
    ];
    let currentSongIndex = 0;
    const playList = document.getElementById('playList');
    // const noSlide = document.getElementById('no-Slide1');
    const songTitle = document.getElementById('songTitle'); // Element to display song title
    const playButton = document.getElementById('playButton');
    const nextButton = document.getElementById('nextButton');

    if (!playButton || !nextButton) {
        console.error('Play or Next button not found in the DOM');
        return; // Exit if buttons are not found
    }

    // Function to load and play a song
    function loadSong(index) {
        if (index >= 0 && index < playlist.length) {
            playList.src = playlist[index];
            playList.play();
            songTitle.textContent = playlist[index]; // Update displayed song title

            console.log('Playing:', playlist[index]);
        } else {
            console.error('Index out of bounds');
        }
    }

    // Event listener for play button
    playButton.addEventListener('click', function() {
        if (playList.paused) {
            loadSong(currentSongIndex);
            playButton.querySelector('img').src = "assets/pause-removebg-preview.png"; // Change to pause icon
        } else {
            playList.pause();
            playButton.querySelector('img').src = "assets/play_music-removebg-preview.png"; // Change back to play icon
        }
    });

    // Event listener for next button
    nextButton.addEventListener('click', function() {
        currentSongIndex++;
        if (currentSongIndex >= playlist.length) {
            currentSongIndex = 0; // Loop back to the first song
        }
        loadSong(currentSongIndex);
    });

    // Event listener for when a song ends
    playList.addEventListener('ended', function() {
        currentSongIndex++;
        if (currentSongIndex >= playlist.length) {
            currentSongIndex = 0; // Loop back to the first song
        }
        loadSong(currentSongIndex);
    });
});

   


document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('.col-4 img');
      
        images.forEach(img => {
          img.style.transition = 'transform 0.3s ease'; // Smooth zoom transition
      
          img.addEventListener('click', function() { // Use 'click' for better mobile support
            const container = this.closest('.small-container');
            if (this.style.transform === 'scale(2)') {
              this.style.transform = 'scale(1)';
              this.style.cursor = 'zoom-in';
              container.style.overflow = 'hidden'; // Hide overflow when zoomed out
            } else {
              this.style.transform = 'scale(2)';
              this.style.cursor = 'zoom-out';
              container.style.overflow = 'visible'; // Allow overflow when zoomed in
            }
          });
        });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const playlist = [
//         "cant escape.mp3",
//         "AZLINK X GUDHEE - DAREGO (MM SIQESTSOUND).mp3",
//         "10Healing Lyric Video EditedByKarabxwBlackid.mp3",
//         "Nikosi  Not Like Us Audio.mp3",
//         "PEMI.mp3",
//         "07Control Official Lyric Video.mp3",
//         "Nikosi  Heaven Hi Official Music Video.mp3",
//     ];

//     let currentSongIndex = 0;
//     const playList = document.getElementById('playList');
//     const playButton = document.getElementById('playButton');
//     const nextButton = document.getElementById('nextButton');
//     const songTitle = document.getElementById('songTitle');
    
//     const likeButton = document.getElementById('likeButton');
//     const dislikeButton = document.getElementById('dislikeButton');
//     const likeCount = document.getElementById('likeCount');
//     const dislikeCount = document.getElementById('dislikeCount');

//     // Function to load a song and reset votes
//     function loadSong(index) {
//         if (index >= 0 && index < playlist.length) {
//             playList.src = playlist[index];
//             playList.play();
//             songTitle.textContent = playlist[index];

//             // Reset or retrieve voting counts from localStorage for the specific song
//             let songKey = `song_${index}`;
//             likeCount.textContent = localStorage.getItem(`${songKey}_like`) || 0;
//             dislikeCount.textContent = localStorage.getItem(`${songKey}_dislike`) || 0;
//         } else {
//             console.error('Index out of bounds');
//         }
//     }

//     // Event listener for play button
//     playButton.addEventListener('click', function() {
//         if (playList.paused) {
//             loadSong(currentSongIndex);
//             playButton.querySelector('img').src = "assets/pause-removebg-preview.png"; // Change to pause icon
//         } else {
//             playList.pause();
//             playButton.querySelector('img').src = "assets/play_music-removebg-preview.png"; // Change back to play icon
//         }
//     });

//     // Event listener for next button
//     nextButton.addEventListener('click', function() {
//         currentSongIndex++;
//         if (currentSongIndex >= playlist.length) {
//             currentSongIndex = 0; // Loop back to the first song
//         }
//         loadSong(currentSongIndex);
//     });

//     // Event listener for when a song ends
//     playList.addEventListener('ended', function() {
//         currentSongIndex++;
//         if (currentSongIndex >= playlist.length) {
//             currentSongIndex = 0; // Loop back to the first song
//         }
//         loadSong(currentSongIndex);
//     });

//     // Voting system
//     likeButton.addEventListener('click', function() {
//         let songKey = `song_${currentSongIndex}`;
//         let newLikeCount = parseInt(likeCount.textContent) + 1;
//         likeCount.textContent = newLikeCount;
//         localStorage.setItem(`${songKey}_like`, newLikeCount);
//     });

//     dislikeButton.addEventListener('click', function() {
//         let songKey = `song_${currentSongIndex}`;
//         let newDislikeCount = parseInt(dislikeCount.textContent) + 1;
//         dislikeCount.textContent = newDislikeCount;
//         localStorage.setItem(`${songKey}_dislike`, newDislikeCount);
//     });

//     // Initial song load
//     loadSong(currentSongIndex);
// });

    
