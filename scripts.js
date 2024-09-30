document.addEventListener("DOMContentLoaded", function () {
    const poemForm = document.getElementById("poem-form");
    const poemList = document.getElementById("poem-list");

    poemForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload on form submit

        // Get the title and content values
        const poemTitle = document.getElementById("poem-title").value;
        const poemContent = document.getElementById("poem-content").value;

        // Create a new poem div
        const newPoemDiv = document.createElement("div");
        newPoemDiv.classList.add("poem");

        // Create elements for the poem title and content
        const titleElement = document.createElement("h3");
        titleElement.textContent = poemTitle;
        const contentElement = document.createElement("p");
        contentElement.textContent = poemContent;

        // Append title and content to the new poem div
        newPoemDiv.appendChild(titleElement);
        newPoemDiv.appendChild(contentElement);

        // Append the new poem div to the poem list
        poemList.appendChild(newPoemDiv);

        // Clear the form after submission
        poemForm.reset();
        document.addEventListener("DOMContentLoaded", function () {
            const charCountDisplay = document.getElementById("char-count");
            const darkModeToggle = document.getElementById("dark-mode-toggle");
            const searchBar = document.getElementById("search-bar");
        
            // Like button functionality
            function addLikeButton(poemDiv) {
                const likeButton = document.createElement("button");
                likeButton.classList.add("like-button");
                likeButton.textContent = "Like (0)";
                let likeCount = 0;
        
                likeButton.addEventListener("click", function () {
                    likeCount++;
                    likeButton.textContent = Like ({likeCount});
                });
        
                poemDiv.appendChild(likeButton);
            }
        
            // Character count for poem content
            poemContentInput.addEventListener("input", function () {
                charCountDisplay.textContent = 'Character count {poemContentInput.value.length}';
            });
        
            // Search functionality
            searchBar.addEventListener("input", function () {
                const filter = searchBar.value.toLowerCase();
                const poems = poemList.getElementsByClassName("poem");
        
                Array.from(poems).forEach(function (poem) {
                    const title = poem.querySelector("h3").textContent.toLowerCase();
                    poem.style.display = title.indexOf(filter) > -1 ? "" : "none";
                });
            });
        
            // Dark mode toggle
            darkModeToggle.addEventListener("click", function () {
                document.body.classList.toggle("dark-mode");
                darkModeToggle.classList.toggle("dark-mode");
            });
        });
    });
});