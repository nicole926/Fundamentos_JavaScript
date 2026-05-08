const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector('#loading');
const commentsLoading = document.querySelector('#comments-loading');
const postsContainer = document.querySelector('#posts-container');

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Get id from url
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// Get all posts
async function getAllPosts(){
    if(!postsContainer) return; // 🔥 impede erro

    const response = await fetch(url);
    const data = await response.json();
    const firstTenData = data.slice(0, 10);
    console.log(firstTenData);

    loadingElement.classList.add("hide");

    firstTenData.map(async (post) => {
        // pegando o nome do id
        const responseUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const userData = await responseUser.json();

        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");
        const author = document.createElement("p"); 
        const btnRemover = document.createElement("button");

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Ler";
        link.setAttribute("href", `post.html?id=${post.id}`);
        author.innerHTML = `Author: ${userData.name}`;

        btnRemover.id = "btnRemover";
        btnRemover.innerText = "Excluir";

        btnRemover.addEventListener("click", async () => {
            const confirmed = confirm("Deseja excluir esse comentário?")
            if(confirmed){
                await fetch(`${url}/${post.id}`, {
                method: "DELETE"
                });
                div.remove();
            }
        });

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(author);
        div.appendChild(link);
        div.appendChild(btnRemover);

        postsContainer.appendChild(div);
    });
}

//Get individual post
async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json();
    const dataComments = await responseComments.json();

    loadingElement.classList.add("hide");
    if(postPage){
    postPage.classList.remove("hide");
    };

    try {
        if(commentsLoading){
            commentsLoading.classList.add("hide");
        }
    } catch (error) {
        console.log(error);
    }

    const title = document.createElement("h1");
    const body = document.createElement("p");

    title.innerText = dataPost.title;
    body.innerText = dataPost.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body);

    dataComments.map((comment) => {
        createComment(comment);
    });
}

function createComment(comment) {
    const div = document.createElement("div");
    const email = document.createElement("h3");
    const commentBody = document.createElement("p");

    email.innerText = comment.email;
    commentBody.innerText = comment.body;

    div.appendChild(email);
    div.appendChild(commentBody);
    commentsContainer.appendChild(div);
}

// post a comment
async function postComment(comment) {
    const response = await fetch(`${url}/${postId}/comments`, {
        method: "post",
        body: comment,
        headers: {
            "content-type": "application/json",
        },
    });

    const data = await response.json();
    createComment(data);
}

if(!postId){
    getAllPosts();
} else {
    getPost(postId);

    // add event to comment
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let comment = {
            email: emailInput.value,
            body: bodyInput.value,
        };
        comment = JSON.stringify(comment);

        postComment(comment);
    })
}