import React,{useState} from 'react';
import './Embox.css';
import icon from './ErrorIcon.png'
/**
 * 
 * @param {{OnClickClose:Function}} props 
 * @returns Error Message Box
 */
function EmBox(props={ OnClickClose : (e)=>{} }) {
  const clickClose = (e) =>{
    props.OnClickClose(e);
  }

  return (
    <div className="EmBox">
        <div className='EmBoxContent'>
            <img src={icon} />
            <div className='EmBoxtext'>
                <h1>Hata</h1>
                <h2>Kulanıcı Adı veya Şifreniz Hatalı</h2>
            </div>
            <div className='EmBoxExit'>
                <h3 onClick={clickClose}>X</h3>
            </div>
        </div>
    </div>
  );
}

export default EmBox;
