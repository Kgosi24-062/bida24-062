document.addEventListener('DOMContentLoaded', function() {
    // --- Video Blog Functionality ---
    const videoContainer = document.querySelector('.video-container');
    const videos = [
        { title: 'BBS Wheel Demo 1', url: 'https://www.youtube.com/embed/your_video_id_1' }, // Replace with your actual YouTube video IDs
        { title: 'BBS Wheel Feature Showcase', url: 'https://www.youtube.com/embed/your_video_id_2' },
        { title: 'Customer Review: BBS Wheels', url: 'https://www.youtube.com/embed/your_video_id_3' },
        // Add more video objects as needed
    ];

    if (videoContainer) {
        videos.forEach(video => {
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video-item');
            videoDiv.innerHTML = `
                <h3>${video.title}</h3>
                <iframe width="100%" height="auto" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            videoContainer.appendChild(videoDiv);
        });
    }

    // --- Feedback Functionality ---
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackMessagesContainer = document.getElementById('feedback-messages');
    const feedbackList = []; // In a real application, you would send this to a server

    if (feedbackForm) {
