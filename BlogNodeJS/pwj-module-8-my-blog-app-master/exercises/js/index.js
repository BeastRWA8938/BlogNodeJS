const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
};

const getPosts = () => {
    fetch(API_URL, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            buildPosts(data);
        });
};

const buildPosts = (blogPosts) => {
    let blogPostsContent = "";
    for(blogPost of blogPosts){
        const postImg = API_BASE_URL + blogPost.post_image;
        const postLink = `/exercises/post.html?id=${blogPost.id}`;
        const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
        blogPostsContent += `
        <a href="${postLink}"
            ><div class="blog">
                <div class="image-container" style="background-image: url(${postImg})"></div>
                <div class="blog-detail">
                    <div class="date">${postDate}</div>
                    <div class="blog-title">${blogPost.title}</div>
                    <div class="blog-content">${blogPost.content}</div>
                </div>
            </div> </a
        >
        `;
    }
    document.querySelector(".blog-post").innerHTML = blogPostsContent;
};
