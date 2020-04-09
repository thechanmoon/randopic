class Comment
{
    constructor(comment)
    {
        this.id = comment.id;
        this.content = comment.content
    }

    render()
    {
        const ulComment = document.querySelector('#comments');
        const liComment = document.createElement('li');
        const deleteButton = document.createElement('Button');
        // const comment_form = document.querySelector('#comment_form')
        
        deleteButton.dataset.id = this.id;
        deleteButton.name = 'delete';
        deleteButton.innerText = 'DELETE'
        deleteButton.name ='delete'
        deleteButton.addEventListener('click', Comment.removeComment)

        liComment.id = `comment-${this.id}`;
        //debugger
        liComment.innerText = this.content;
        liComment.append(deleteButton)
        ulComment.append(liComment);
    }

    static removeComment(e){
      //debugger
      const commID = e.target.dataset.id
      const linItem = document.getElementById(`comment-${commID}`)
      //debugger
      linItem.hidden = true
      Adapter.deleteData(Controller.commentsURL,commID)
  }
}

/*
    {
    image_id: (insert image id here),
    content: (insert comment content here)
  }
*/
/*

  "id": 1,
  "name": "The Internet!",
  "like_count": 0,
  "comments": [
    {
      "id": 5941,
      "content": "first comment!",
      "image_id": 1158,
      "created_at": "2018-10-18T17:06:14.859Z",
      "updated_at": "2018-10-18T17:06:14.859Z"
    }
  ]


      <div class="row" id="image_content">
      <div class="card col-md-4"></div>
      <div id="image_card" class="card col-md-4">
          <img src="" id="image" data-id=""/>
          <h4 id="name">Title of image goes here</h4>
          <span>Likes:
            <span id="likes">Likes Go Here</span>
          </span>
          <button id="like_button">Like</button>
          <form id="comment_form">
            <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
            <input type="submit" value="Submit"/>
          </form>
          <ul id="comments">
               <!-- <li> for each comment goes here -->
          </ul>
        </div>
      <div class="card col-md-4"></div>
    </div>
*/