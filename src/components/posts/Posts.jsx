import "./posts.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Posts({post}){

    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike((isLiked) ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    
    return(
        <div className="posts">
            <div className='postsWrapper'>
                <div className='postsTop'>
                    <div className="postsTopLeft">
                        <img className="postsProfileImg" src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt=""/>
                        <span className='postsUsername'>
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
                        <span className='postsDate'>{post.date}</span>
                    </div>
                    <div className='postsTopright'>
                        < MoreVert />
                    </div>
                </div>
                <div className="postsCenter">
                    <span className='postsText'>{post?.desc}</span>
                    <img className='postsImg' src={post.photo} alt="" />
                </div>
                <div className="postsBottom">
                    <div className='postsBottomLeft'>
                        <img className="likeIcon" src='assets/like.png' alt="" onClick={likeHandler}/>
                        <img className="likeIcon" src='assets/heart.png' alt="" onClick={likeHandler}/>
                        <span className='postsLikeCounter' >{like} people like it</span>
                    </div>
                    <div className="postsBottomRight">
                        <span className='postsComment'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}