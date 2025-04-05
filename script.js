window.onload = function () {
    const isMobile = window.innerWidth <= 768;
    const loader = document.getElementById('loader');
    const desktopVideo = document.getElementById('desktop-loader');
    const mobileVideo = document.getElementById('mobile-loader');
    const mainContent = document.getElementById('main-content');

    if (isMobile) {
        mobileVideo.style.display = 'block';
    } else {
        desktopVideo.style.display = 'block';
    }

    // Hide loader after 5 seconds and show main content
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 5000); // 5 seconds
};
