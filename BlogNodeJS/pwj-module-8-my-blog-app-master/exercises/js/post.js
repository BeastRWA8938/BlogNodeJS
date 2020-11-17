/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    getPostIdParam();
};

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("id");
};

const getPost = () => {
    const postId = getPostIdParam();
    // CODE GOES HERE
    const URL = `${API_URL}${postId}`;
    fetch(URL, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            buildPost(data);
        });
};

const buildPost = (data) => {
    // HINT: Convert the date number to a Date string
    const postDate = new Date(parseInt(data.added_date)).toDateString();
    const postImg = `${API_BASE_URL}${data.post_image}`;
    detailedBlog = `
                    <div id="individual-post-title">${data.title}</div>
                    <div id="individual-post-date">${postDate}</div>
                    <div id="individual-post-content">${data.content}</div>
        `;

    document.querySelector(".post-detail").innerHTML = detailedBlog;
    document.querySelector("header").style.backgroundImage = `url(${postImg})`;
};
