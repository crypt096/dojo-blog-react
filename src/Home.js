import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
  const [blogs,setBlogs] = useState(null)

  useEffect(() => {
    const getData = async() => {
      const res = await fetch('http://localhost:8000/blogs');
      const data = await res.json();
      setBlogs(data);
    }

    getData();
  },[])

  return ( 
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div> 
   );
}
 
export default Home;