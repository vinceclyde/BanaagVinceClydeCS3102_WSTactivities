let currentAudio = null;
        let currentIframe = null;

        // Function to display popup asking for name
        window.onload = function() {
            setTimeout(function() {
                document.getElementById('namePopup').classList.add('show');
            }, 1200);
        }

        // Function to submit name and show text popup
        function submitName() {
            const name = document.getElementById('nameInput').value;
            if (name) {
                document.getElementById('namePopup').style.display = 'none'; // Hide the name input popup
                // Show the text popup with personalized greeting
                document.getElementById('textPopupContent').innerText = `hello there, ${name}! choose a song by clicking the play buttons and explore the vinyls to know more about me.`;
                document.getElementById('textPopup').classList.add('show');
            } else {
                alert("Please enter your name.");
            }
        }

        // Function to close the text popup
        function closeTextPopup() {
            document.getElementById('textPopup').classList.remove('show');
        }

        // Existing play/pause and popup functions go here...
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space' && currentAudio) {
                const barPlayElement = currentAudio.songElement;

                if (currentAudio.paused) {
                    currentAudio.play();
                    barPlayElement.src = "assets/bar.png"; // Change to pause image
                } else {
                    currentAudio.pause();
                    barPlayElement.src = "assets/bar-play.png"; // Change to play image
                }
            }
        });

        function playPauseSong(event, songUrl) {
            const barPlayElement = event.target;

            if (currentAudio && !currentAudio.paused) {
                currentAudio.pause();
                barPlayElement.src = "assets/bar-play.png"; // Change to play image
            } else {
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                    currentAudio = null;
                    barPlayElement.src = "assets/bar-play.png"; // Change to play image
                }

                if (songUrl.includes("drive.google.com")) {
                    currentIframe = document.createElement("iframe");
                    currentIframe.src = songUrl;
                    currentIframe.width = "300";
                    currentIframe.height = "80";
                    currentIframe.allow = "autoplay";
                    currentIframe.style.position = "absolute";
                    currentIframe.style.bottom = "20px";
                    currentIframe.style.left = "20px";
                    document.body.appendChild(currentIframe);
                } else {
                    currentAudio = new Audio(songUrl);
                    currentAudio.songElement = barPlayElement;
                    currentAudio.play();
                    barPlayElement.src = "assets/bar.png"; // Change to pause image
                }
            }
        }

        function showPopup(title, file) {
            const popup = document.getElementById('popup');
            const overlay = document.getElementById('overlay');
            const popupTitle = document.getElementById('popup-title');
            const popupContent = document.getElementById('popup-content');

            popupTitle.innerText = title;

            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(html => {
                    popupContent.innerHTML = html;
                    popup.classList.add('active');
                    overlay.classList.add('active');
                })
                .catch(error => {
                    popupContent.innerHTML = `<p>Error loading content: ${error.message}</p>`;
                    popup.classList.add('active');
                    overlay.classList.add('active');
                });
        }

        function closePopup() {
            const popup = document.getElementById('popup');
            const overlay = document.getElementById('overlay');

            popup.classList.add('exit');
            overlay.classList.add('exit');

            setTimeout(() => {
                popup.classList.remove('active', 'exit');
                overlay.classList.remove('active', 'exit');
            }, 300);
        }
        let slideIndex = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (let slide of slides) {
            slide.style.display = "none";
        }
        for (let dot of dots) {
            dot.className = dot.className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    showSlides(slideIndex);

    function showImage(imageId) {
        document.getElementById('image-popup' + imageId.charAt(imageId.length - 1)).style.display = 'block';
    }

    function hideImage() {
        document.querySelectorAll('.image-popup').forEach(popup => popup.style.display = 'none');
    }

    
    function openModal(poem) {
        var modal = document.getElementById("poemModal");
        var content = document.getElementById("modalContent");

        if(poem === 'poem1') {
            content.innerHTML = `i miss you more<br>than how the sun<br>misses the moon<br>in its sleepless slumber.<br><br>like how the waves<br>lay waves to seas<br>in an attempt<br>to end its suffer.`;
        } else if(poem === 'poem2') {
            content.innerHTML = `a flare aloft<br>that scorches the skin.<br>still,<br>that smile is the warmth<br>that makes me give in.<br><br>vast hysterics,<br>and your eyes would close,<br>once like the walls—<br>now unlatched by those.<br>those eyes that depict<br>the moon’s escapade<br>as it speeds the unknown<br>in a crescent masquerade.<br><br>and how i wish the moon<br>would look at me<br>the way i look at it.`;
        } else if(poem === 'poem3') {
            content.innerHTML = `and as the ever so blinding<br>dark of mind<br>lurks the phoenix who is mourned<br>every day, every night.<br><br>the lust of touch<br>to feel the warmth,<br>but to inflict ruin<br>upon the greatest art.<br><br>to not give in to fury<br>for it is undeserved.<br>and to stay in the shadows,<br>upon the greatest hurt.`;
        }

        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("poemModal");
        modal.style.display = "none";
    }

    // Close the modal if clicked outside of the modal content
    window.onclick = function(event) {
        var modal = document.getElementById("poemModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }