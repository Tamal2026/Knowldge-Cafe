import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({blog,handelAddToBookmark }) => {
const {Title,CoverPic,ReadingTime,AuthorPic,AuthorName,Posted_Date,Hashtags} = blog;
    return (
        <div>
            <img src={CoverPic} alt={`Cover Picture of the title ${Title}`} />
            <div className='flex justify-between'> 
        <div className='flex gap-4 items-center'>
        <img className='w-14 h-auto rounded-full' src={AuthorPic} alt="" />
        <div>
            <h3 className='text-2xl'>{AuthorName}</h3>
            <h5 className='text-sm'>{Posted_Date}</h5>
        </div>
        </div>
        <div>
            <span>{ReadingTime}Min Read</span><button onClick ={ () =>  handelAddToBookmark (blog) } className='ml-2'><FaBookmark></FaBookmark></button>
        </div>
            </div>
            <h2 className="text-4xl">{Title}</h2>
                <p>{
                    Hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                    
                    }</p>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handelAddToBookmark:PropTypes.func

}


export default Blog;