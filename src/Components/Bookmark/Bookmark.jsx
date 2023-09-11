import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {Title} = bookmark;
    return (
        <div>
            <h1>{Title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;