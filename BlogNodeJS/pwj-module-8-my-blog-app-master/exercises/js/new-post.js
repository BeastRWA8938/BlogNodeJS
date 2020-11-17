/**
 * TODO: Finish submitNewPost function to submit form data to the API
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {
    let input = document.querySelector('input[type="file"]');
    const title = document.getElementById("form-post-title").value;
    const content = document.getElementById("form-post-content").value;
    let data = new FormData();
    data.append("post-image", input.files[0]);
    data.append("title", title);
    data.append("content", content);

    fetch(API_URL, {
        method: "POST",
        body: data,
    }).then((a) => {
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    });
};

// HINT: Redirect the user to home page after successful submission
