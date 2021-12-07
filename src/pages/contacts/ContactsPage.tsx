import classNames from "classnames";
import React, { useState } from "react";
import { OverlayCard } from "../../components/layout/OverlayCard";
import { MapQuest } from "../../components/MapQuest";
interface FormData{
  username:string;
  email:string;
  isCompany?:string
}
export const ContactsPage: React.FC = () =>{
    const [formData,setFormData]=useState<FormData>({username:"",email:"",isCompany:""});
    const isNameValid = formData.username.length>8;
    const isEmailValid = validateEmail(formData.email);
    const isCompanyValid = formData.isCompany != "";
    const [dirty,setDirty]=useState<boolean>(false);
    const isValid= isNameValid && isEmailValid && isCompanyValid;
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
      setFormData({
        ...formData,
        [e.currentTarget.name]:e.currentTarget.value}
        );
        setDirty(true);
    //   se non specifico il tipo htmlinputelement non riconosce value
    }
    const onSubmitHandler=()=>{ window.alert(JSON.stringify(formData))}
    return (
        <OverlayCard>
         <h1>Contacts</h1>
         <form action="" onSubmit={onSubmitHandler}>
          <input className={classNames('form-control mb-3',{'is-valid':isNameValid},{'is-invalid': !isNameValid && dirty})} type="text" name="username" placeholder="write your name" value={formData.username} onChange={onChangeHandler}/>
          <input className={classNames('form-control mb-3',{'is-valid':isEmailValid},{'is-invalid': !isEmailValid && dirty})} type="text" name="email" placeholder="write your email" value={formData.email} onChange={onChangeHandler}/>
          <select name="isCompany" className={classNames('form-control mb-3',{'is-valid':isCompanyValid},{'is-invalid': !isCompanyValid && dirty})} value={formData.isCompany} onChange={onChangeHandler} >
            <option value="">Are you a company?</option>
            <option value="yes">Yes, I am a company</option>
            <option value="no">No, I'm not</option>
          </select>
         <button type="submit" className="btn btn-primary" disabled={!isValid}>SEND</button>
         </form>
         <MapQuest city="Roma" width={600} height={400} onClickHandler={()=>console.log('ciao')}>
         </MapQuest>
        </OverlayCard>
        )
};

const validateEmail = (email:string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
//qui se usavo solo onClick funzionava cmq grazie al ...rest

// come libreria c'è react hook form