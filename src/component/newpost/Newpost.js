import "./newpost.css"
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const Newpost = () => {
    return (
        <div className="newpost">
            <div class="createBlogContainer">
                            <form action="/">
                                <div className="createBlogImage">       
                                <label for="img"><UploadFileIcon className="uploadImageIcon"/></label>
                                </div>
                                <div className="createBlogInput">
                                 <input className="createInput" type="file" id="img" name="img" accept="image/*" style={{display:"none"}} />


                                <input className="createInput" type="text" id="fname" name="firstname" placeholder="Blog Title.." />
                                <input className="createInput" type="text" id="lname" name="lastname" placeholder="Blog Category.."/>
                                <input className="createInput" type="date" id="date" name="date" />
                                
                                <textarea id="subject" name="subject" placeholder="Blog Content.." style={{height:"300px", width:"95%"}}></textarea>
                                <button className="createSubmitButton"> Submit </button>
                                </div>

                            </form>
                        </div>      
        </div>
    )
}
