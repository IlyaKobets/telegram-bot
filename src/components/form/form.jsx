import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import "./form.css";
import { useTelegram } from "../../hooks/useTelegram";
import Button from './../button/button'

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

    const onSendData = useCallback(()=>{
        const data = {
            country,
            street,
            subject
        }

        tg.sendData(JSON.stringify(data))
    }, [country, street, subject])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)

        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    },[onSendData])

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

            <Button onClick={onSendData}>Отправить</Button>
        </div>
    );
};

export default Form;
