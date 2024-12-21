if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(() => {
                console.log('Service Worker Registered');
            })
            .catch(error => {
                console.error('Service Worker Registration Failed:', error);
            });
    });
}

const bearImage = document.getElementById('bear-image');
const refreshButton = document.getElementById('refresh-button');

// Add click event listener to the button
refreshButton.addEventListener('click', () => {
    // Generate a new random image URL
    const randomWidth = Math.floor(Math.random() * 100) + 200; // Between 200 and 300
    const randomHeight = Math.floor(Math.random() * 100) + 200; // Between 200 and 300
    const newImageUrl = `https://placebear.com/${randomWidth}/${randomHeight}`; // Use template literals for the URL

    // Update the image source
    bearImage.src = newImageUrl;
});
