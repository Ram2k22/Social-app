import './rightbar.css';
import Online from '../online/Online';
import { Users } from '../../dummyData';

export default function Rightbar({profile}){

    const HomeRightbar = () => {
        return(
            <>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src='assets/gift.png' alt=''/>
                    <span className='birthdayText'><b>Atchyut Ram</b> and <b>3 others</b> have birthday today.</span>
                </div>
                <img className ='rightbarAd' src='/assets/ad.png' alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                    < Online id = {u.id} user = {u} />)
                )}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () =>{
        return (
            <>
                <h4 className='rightbarTitle'>User Inofromation</h4>
                <div className='rightbarInfo'>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return(
        <div className='rightbar'>
            <div className='rightbarWrapper'>
                {/* < HomeRightbar /> */}
                < ProfileRightbar />
            </div>
        </div>
    );
}