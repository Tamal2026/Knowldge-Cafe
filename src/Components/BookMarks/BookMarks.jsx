
import PropTypes from 'prop-types'
const BookMarks = ({bookmarks}) => {
    return (
        <div className="w-1/3">
            <h1>BookMark:{bookmarks.length}</h1>
            {
bookmarks.map(bookmark => <Bookmark key ={bookmark.id} bookmark = {bookmark}></Bookmark>)

            }
        </div>
    );
};
BookMarks.propTypes = {
    bookmarks:PropTypes.array
}
export default BookMarks;