import { useState, useEffect } from 'react';
import BlogList from './BlogList'

const Home = () => {
  const [blogs,setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async() => {
      const res = await fetch('http://localhost:8000/blogs');
      const data = await res.json();
      setBlogs(data);
      setIsLoading(false)
    }

    getData();
  },[])

  return ( 
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div> 
   );
}
 
export default Home;