import axios from "axios";
import '../css/create-apvist.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CreateApvist = () => {
  
  let navigate = useNavigate();
  const[firstname,setFirstName]= useState('');
  const[lastname,setLastName]= useState('');
  const[email,setEmail]= useState('');
  const[generation,setGen] = useState(0);
  const[team,setTeam] = useState('المؤسسين');
  const[message,setMessage]=useState(false);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const apvist = {firstname,lastname,email,generation,team};
    const req = {
      url:"http://127.0.0.1:4000/users/",
      method:"POST",
      headers:{
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET,POST,OPTIONS,PATCH,DELETE",
        "Accept":"application/json",
        "Content-Type":"application/json",
      },
      data: JSON.stringify(apvist)
    }
    
   await axios(req)

      navigate('/')
      setMessage(true)
  }
  const handleClose = () =>{
    setMessage(false)
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
    <h2>إستمارة تسجيل الأعضاء</h2>
      <label htmlFor="fn">الإسم</label>
      <input type="text" name = "fn" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}} autoComplete={false} required/>
      <label htmlFor="ln">اللقب</label>
      <input type="text" name = "ln" value={lastname} onChange={(e)=>{setLastName(e.target.value)}} autoComplete={false} required />
      <label htmlFor="email">البريد الإكتروني</label>
      <input type="email" name = "email" value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete={false} required/>
      <label>الجيل</label>
            <select required value={generation} onChange={(e)=>{setGen(e.target.value)}}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
      <label>الفريق</label>
            <select required value={team} onChange={(e)=>{setTeam(e.target.value)}}>
                <option value="المؤسسين">المؤسسين</option>
                <option value="ATM">ATM</option>
                <option value="نفس طبي">نفس طبي</option>
                <option value="بعبق القرآن نحيا">بعبق القرآن نحيا</option>
                <option value="تذوق كتابا">تذوق كتابا</option>
                <option value="BacBag">BacBag</option>
                <option value="مغلوبة فانتصر">مغلوبة فانتصر</option>
                <option value="التصميم و المونتاج">التصميم و المونتاج</option>
                <option value="المحتوى">المحتوى</option>
                <option value="الميديا">الميديا</option>
            </select>
          <button>تسجيل عضو جديد</button>
          {message && <div className="success-msg">
          <p>تمت الإضافة بنجاح !</p>
            <span onClick={handleClose}>❌</span>
          </div> }
    </form>
    </>
  )
}

export default CreateApvist;