import './profile.css';
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";


export default function Profile(){
    return(
        <>
            <Topbar />
            <div className="profile">
                < Sidebar />
                <div className='profileRight'>
                    <div className='profileRightTop'>
                        <div className='profileCover'>
                            <img src='assets/post/3.jpeg' className='profileCoverImg' alt=''/>
                            <img src='assets/post/7.jpeg' className='profileUserImg' alt=''/>
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Atchyut Ram</h4>
                            <span className="profileInfoDesc">Helly my friends</span>
                        </div>
                    </div>
                    <div className='profileRightBottom'>
                        < Feed />
                        < Rightbar profile/>
                    </div>
                </div>
                
            </div>
        </>
    );
}