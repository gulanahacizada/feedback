import React from 'react'
import './Form.css'
function Form() {
    const myFunc= (e)=>{
        e.preventDefault()
        alert("Müvəffəqiyyətli göndərilmə baş verdi.")
    let b= document.querySelectorAll(".a")
    // console.log(typeof(b));
    let c=[...b]
    console.log(b)
    c.forEach(element => {
        element.value=""
    });
    }
  return (
    <div>
        <form onSubmit={myFunc}>
        <label><b>Ad:</b></label>
        <input className="a" type='text' required/>
        <label><b>Soyad:</b></label>
        <input  className="a" type='text' required/>
        <label><b>Telefon:</b></label>
        <input  className="a" type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}' placeholder='000-000-00-00' required/>
        <label><b>Gmail:</b></label>
        <input  className="a" type='email' required/>
        <label><b>Şərh:</b></label>
        <textarea  className="a" rows={10} cols={20} required minLength={15}/>
        <button><b>Göndər</b></button>
        </form>
    </div>
  )
}

export default Form