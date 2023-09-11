import PropTypes from 'prop-types';


const Blog = ({blog}) => {
const {Title,CoverPic} = blog;
    return (
        <div>
            <img src={CoverPic} alt={`Cover Picture of the title ${Title}`} />
            <h2 className="text-4xl">{Title}</h2>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired
}


export default Blog;