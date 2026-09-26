$(document).ready(function() {

    var postsArray = [];

    function loadPosts() {
        var storedPosts = localStorage.getItem("feedPosts");
        
        if (storedPosts) {
            postsArray = JSON.parse(storedPosts);
            
            if (postsArray.length > 0) {
                $("#emptyFeedMessage").hide();
            }

            $.each(postsArray, function(index, post) {
                renderPostToDOM(post);
            });
        }
    }

    function renderPostToDOM(post) {
        var likedClass = post.isLiked ? "liked" : "";
        var likedText = post.isLiked ? "Liked (" + post.likes + ")" : "Like (" + post.likes + ")";

        var postHTML = `
            <div class="post-card" id="post-${post.id}">
                <div class="post-header">
                    <span class="post-user">${post.author}</span>
                    <span class="post-time">${post.timestamp}</span>
                </div>
                <div class="post-text">${post.content}</div>
                <div class="post-actions">
                    <button class="like-btn ${likedClass}" data-id="${post.id}">${likedText}</button>
                    <button class="delete-btn" data-id="${post.id}">Delete Post</button>
                </div>
            </div>
        `;

        $(postHTML).hide().prependTo("#feedContainer").fadeIn(500);
    }

    loadPosts();

    $("#postForm").submit(function(event) {
        event.preventDefault();

        var storedUser = localStorage.getItem("userData");
        var authorName = "Anonymous Student"; 

        if (storedUser) {
            var user = JSON.parse(storedUser);
            authorName = user.fullName;
        }

        var postText = $("#postContent").val().trim();

        if (postText === "") return;

        var currentDateTime = new Date().toLocaleString();

        var newPost = {
            id: Date.now(),
            author: authorName,
            content: postText,
            timestamp: currentDateTime,
            likes: 0,
            isLiked: false
        };

        postsArray.push(newPost);

        localStorage.setItem("feedPosts", JSON.stringify(postsArray));

        renderPostToDOM(newPost);

        $("#emptyFeedMessage").hide();

        $("#postContent").val("");
    });

    $(document).on("click", ".like-btn", function() {
        var clickedBtn = $(this);
        var postId = clickedBtn.data("id");

        $.each(postsArray, function(index, post) {
            if (post.id == postId) {
                if (post.isLiked) {
                    post.likes--;
                    post.isLiked = false;
                } else {
                    post.likes++;
                    post.isLiked = true;
                }

                localStorage.setItem("feedPosts", JSON.stringify(postsArray));
                clickedBtn.toggleClass("liked", post.isLiked);
                clickedBtn.text(post.isLiked ? "Liked (" + post.likes + ")" : "Like (" + post.likes + ")");
            }
        });
    });

    $(document).on("click", ".delete-btn", function() {
        var postId = $(this).data("id");

        postsArray = postsArray.filter(function(post) {
            return post.id != postId;
        });

        localStorage.setItem("feedPosts", JSON.stringify(postsArray));
        $("#post-" + postId).fadeOut(300, function() {
            $(this).remove();
            if (postsArray.length === 0) {
                $("#emptyFeedMessage").show();
            }
        });
    });
});
