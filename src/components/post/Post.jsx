import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg"
        src="https://www.hocu.ba/wp-content/uploads/2022/03/travel-world.jpg"
        alt="" />
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">World</span>
            <span className="postCat">BiH</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque esse ad quis. Ipsa, omnis praesentium! Ipsa molestiae, debitis totam rem, vel laboriosam voluptatem facilis pariatur quia, tenetur est magni optio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque esse ad quis. Ipsa, omnis praesentium! Ipsa molestiae, debitis totam rem, vel laboriosam voluptatem facilis pariatur quia, tenetur est magni optio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque esse ad quis. Ipsa, omnis praesentium! Ipsa molestiae, debitis totam rem, vel laboriosam voluptatem facilis pariatur quia, tenetur est magni optio.
    </p>

    </div>
  )
}
