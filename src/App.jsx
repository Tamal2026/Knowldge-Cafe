
import Header from './Components/Header/Header'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
import { useState } from 'react'


function App() {
const [bookmarks,setBookmarks] = useState([]);
const handelAddToBookmark = blog => {

  const newBookMarks = [...bookmarks,blog];
  setBookmarks(newBookMarks)
}
  return (
    <>
<div>
<Header></Header>
</div>
<div className='md:flex'>
  <Blogs handelAddToBookmark  = {handelAddToBookmark }></Blogs>
  <BookMarks bookmarks = {bookmarks}></BookMarks>
</div>

    
      

    
    </>
  )
}

export default App
