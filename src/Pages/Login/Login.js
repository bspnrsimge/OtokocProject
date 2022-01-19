import React,{useState} from 'react';

import './Login.css';
import logo from '../../Images/logo.png'
import EmBox from '../../Components/ErrorMessage/Embox';

import { useNavigate } from "react-router-dom";

const PasswordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

function Login(props) {
  const [EmailText, setEmailText] = useState("");
  const [PassText, setPassText] = useState("");
  const [EmBoxV, setEmBoxV] = useState(false);

  let navigate = useNavigate();

  const changeEmail = (e) => {
    setEmailText(e.target.value);
  }

  const changePass = (e) => {
    setPassText(e.target.value);
  }

  const clickClose = (e) =>{
    setEmBoxV(false);
  }

  const clickLogin = (e) =>{
    if(EmailText != "Demo" || !PasswordRegex.test(PassText)){
      setEmBoxV(true);
      setTimeout(() => {
        setEmBoxV(false);
      }, 5000);
    }
    else{
      navigate(`/dashboard`);
    }
  }

  let errorBox = <></>
  if(EmBoxV){
    errorBox = <EmBox OnClickClose={clickClose} />
  }

  return (
    <div className="Main">
      {errorBox}
      <img src={logo} className='logo'/>
      <div className='login'>
        <h1>Giriş</h1>
        <input placeholder="Email / Kullanıcı Adı" value={EmailText} onChange={changeEmail} />
        <input placeholder="Şifre" type='password' value={PassText} onChange={changePass}/>
        <div className='buttonFloor'>
          <button onClick={clickLogin}>Giriş Yap &gt;</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
