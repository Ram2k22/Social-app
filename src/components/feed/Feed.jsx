import './feed.css';
import Share from '../share/Share';
import Posts from '../posts/Posts';
import { Postes } from '../../dummyData'


export default function Feed(){
    
    return (
        <div className='feed'>
            <div className="feedWrapper">
                < Share />
                { Postes .map((post) => (
                    < Posts key = {post.id} post = { post }/>
                )) }
                
                
                
            </div>
        </div>
    );
}