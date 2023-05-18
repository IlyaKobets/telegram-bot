import React, { useEffect } from "react";
import { useState } from "react";
import "./form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {

    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('');

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value);
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }

    const {tg} = useTelegram();

    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(()=>{
        if(!country || !street) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    },[country, street])

    return (
        <div className={"form"}>
            <h3>ВВедите ваши данные</h3>
            <input 
                className={"input"} 
                type="text" 
                placeholder={"Страна"}
                value={country}
                onChange={onChangeCountry}>
            </input>
            <input 
                className={"input"} 
                type="text" 
                placeholder={"Улица"}
                value={street}
                onChange={onChangeStreet}>
            </input>

            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;
