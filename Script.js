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
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const productSelect = document.getElementById('product');
            const messageInput = document.getElementById('message');

            const feedback = {
                name: nameInput.value,
                email: emailInput.value,
                product: productSelect.value,
                message: messageInput.value,
                timestamp: new Date().toLocaleString()
            };

            feedbackList.push(feedback);
            displayFeedback();

            // Clear the form after submission
            nameInput.value = '';
            emailInput.value = '';
            productSelect.selectedIndex = 0; // Reset the select dropdown
            messageInput.value = '';
        });
    }

    function displayFeedback() {
        feedbackMessagesContainer.innerHTML = ''; // Clear previous messages
        feedbackList.forEach(feedback => {
            const feedbackDiv = document.createElement('div');
            feedbackDiv.classList.add('feedback-message');
            feedbackDiv.innerHTML = `
                <p><strong>${feedback.name}</strong> (${feedback.email}) - Product: ${feedback.product} - ${feedback.timestamp}</p>
                <p>${feedback.message}</p>
                <hr>
            `;
            feedbackMessagesContainer.appendChild(feedbackDiv);
        });
    }

    // --- Menu Toggle Functionality ---
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    if (menuIcon && nav) {
        menuIcon.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
});
