import { useEffect, useState } from "react"
import axios from 'axios'
import '../css/home.css'

// components
import ApvistDetails from "../partials/ApvistDetails"
import { Pagination } from "../partials/pagination"
import CreateApvist from "../partials/CreateApvist"

const Home = () => {
  const [Apvists, setApvists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const [perPage] = useState(4);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchApvists = async () => {
      const res = await axios.get('/users',{signal})
        setLoading(false)
        setApvists(res.data);
      return abortController.abort();
    }

    fetchApvists()
  }, [])

   //get current users

  const indexOfLastUser = currentPage * perPage;
  const indexOfFirstUser = indexOfLastUser - perPage;
  const currentUsers = Apvists.slice(indexOfFirstUser,indexOfLastUser)

  // set page
  const HandlePagination = (number) =>{
    setCurrentPage(number);
  }
  const handleUp = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <>
    <h2 className="welcome"> مرحبا بك في لوحة تحكم Algerian Positive Vibes 💛</h2>
    {/* <button className="scroll" onClick={handleUp}>⬆︎</button> */}
    <div className="home">
      <div className="recent">
        <h2 className="stats">إحصائيات 📈</h2>
        <div class="circle-wrap">
          <div class="circle">
          <div class="inside-circle"> 15% </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
          </div>
        </div>
        <div className="status">نسبة إكتمال المنصة 🛠</div>
      </div>
      <div className="Apvists">
        <h2 className="page-link total"> إجمالي عدد الأعضاء : <strong>{Apvists.length}</strong></h2>
      {loading && <h2 className='loading'>Loading ... 🕑</h2>}
        {currentUsers && currentUsers.map(Apvist => (
          <ApvistDetails Apvist={Apvist} key={Apvist._id} />
        ))}
        <Pagination totalUsers={Apvists.length} perPage={perPage} pagination={HandlePagination}/>
      </div>
       <CreateApvist/>
    </div>
</>
  )
}

export default Home