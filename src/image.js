class Image
{
    constructor(image) {
        this.id = image.id;
        this.url = image.url;
        this.name = image.name;
        this.like_count = image.like_count;
        this.comments = [];

        image.comments.forEach(comment => {
          this.addCommnet(comment)
        });
    }

    render()
    {
        const imageDiv = document.querySelector('#image');
        imageDiv.src = this.url;

        const nameH = document.querySelector('#name');
        nameH.innerHTML = this.name;

        const likesSpan = document.querySelector('#likes');
        likesSpan.innerHTML = this.like_count;

        const like_button = document.querySelector('#like_button');
        like_button.dataset.id = this.id;
          
        const comment_form = document.getElementById('comment_form')
        comment_form.dataset.id = this.id

        this.comments.forEach(comment => {
            comment.render()
        });
    }

    addCommnet(comment)
    {
      this.comments.push(new Comment(comment));
    }
}



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