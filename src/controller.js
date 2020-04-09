class Controller
{
    static imageId = 5001 //Enter the id from the fetched image here

    static imageURL = `https://randopic.herokuapp.com/images/` + Controller.imageId;

    static likeURL = `https://randopic.herokuapp.com/likes/`

    static commentsURL = `https://randopic.herokuapp.com/comments/`

    static init()
    {
        console.log("init called");
        // Adapter.getData(Controller.imageURL).then(data=>{console.log(data)});
        Adapter.getData(Controller.imageURL).then(Controller.render);
        const like_button = document.querySelector('#like_button')
        like_button.addEventListener('click',Controller.handlerLikeButton);
        const comment_form = document.querySelector('#comment_form') 
        comment_form.addEventListener('submit',Controller.handlerCommentSubmit)
    }

    static render(image)
    {
        const img = new Image(image);
        img.render();
    }

    static handlerLikeButton(e)
    {
        e.preventDefault();
        // console.log('handlerLikeButton clicked');
        const likeSpan = document.querySelector('#likes'); 
        const like_count = likeSpan.innerText;
        // likeSpan.innerText = parseInt(like_count) +1;
        const data ={
            image_id : e.target.dataset.id
        }
        Adapter.createData(Controller.likeURL,data)
        .then(data=>{
            console.log(data);
            const commentList = document.querySelector('#comments');
            commentList.innerHTML = '';
            Adapter.getData(Controller.imageURL).then(Controller.render);
        });
    }

    static handlerCommentSubmit(e)
    {
        e.preventDefault();
        console.log('handlerCommentSubmit submitted');
        const commentForm = document.querySelector('#comment_form');
        const commentContent = commentForm.comment.value;

        const img_id = e.target.dataset.id;
        const data = {image_id: img_id, content: commentContent}

        Adapter.createData(Controller.commentsURL, data)
        .then(data=>{
            console.log(data)
            const commentList = document.querySelector('#comments')
            commentList.innerHTML = ''
            Adapter.getData(Controller.imageURL).then(Controller.render);
        })
        commentForm.comment.value = ''
    }
}

/*

    {
    image_id: (insert image id here),
    content: (insert comment content here)
  }

          <button id="like_button">Like</button>
          <form id="comment_form">
            <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
            <input type="submit" value="Submit"/>
          </form>
*/