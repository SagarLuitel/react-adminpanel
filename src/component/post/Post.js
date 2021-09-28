import "./post.css"

import TitleIcon from '@mui/icons-material/Title';
import CategoryIcon from '@mui/icons-material/Category';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const Post = () => {
    return (
        <div className="post">
            <div className="addpostTitleContainer">
                <h4>Edit User</h4>
                
                </div>
            <div className="blogContainer">
                <div className="showBlog">
                    <div className="showBlogTop">
                    <img className="showBlogImage" src="#" alt=""/>
                    <div className="otherTopContainer">
                        <p className="showOtherDetails"><TitleIcon className="showIcons"/>blog Title</p>
                        <p className="showOtherDetails"> <CategoryIcon className="showIcons"/>Blog Category</p>
                        <p className="showOtherDetails"> <EventAvailableIcon className="showIcons"/>Blog post Date</p>
                    </div>
                    </div>
                    <div className="showBlogButtom">
                         
                        <span>Blog Content</span>
                        <p>Loremipsums</p>
                        
                    </div>
                    
                </div>
                    <div className="editBlog">
                        <h4 className="editBlogTitle">Edit </h4>
                        <div class="editContainer">
                            <form action="/">
                                <div className="editBlogImage">
                                    <img className="currentBlogImg" src="https://media.istockphoto.com/photos/beachside-pathway-leading-to-the-ocean-with-spectacular-sunrise-picture-id1283886803?s=612x612" alt=""/>
                               
                                <label for="img"><UploadFileIcon className="uploadImageIcon"/></label>
                                </div>
                                <div className="editInput">
                                 <input type="file" id="img" name="img" accept="image/*" style={{display:"none"}} />


                                <input type="text" id="fname" name="firstname" placeholder="Blog Title.." />
                                <input type="text" id="lname" name="lastname" placeholder="Blog Category.."/>
                                <input type="date" id="date" name="date" />
                                
                                <textarea id="subject" name="subject" placeholder="Blog Content.." style={{height:"300px", width:"95%"}}></textarea>
                                <button className="editSubmitButton"> Submit </button>
                                </div>

                            </form>
                        </div>      
                    </div>
                </div>
                
           
           
        </div>
    )
}
