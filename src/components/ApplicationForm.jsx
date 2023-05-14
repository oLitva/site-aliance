import React, { useState } from 'react';
import "../styles/ApplicationForm.css";
import svgYotube from "./pictures/carbon_logo-youtube.svg"
import svgVK from "./pictures/mingcute_vkontakte-fill.svg"
import App from '../App';

const ApplicationForm = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        message: ''
    })
    const handleChange = (value, key) => {
        setForm({
            ...form,
            [key]: value
        })
    }
    // const sendForm = () => {
    //     fetch("http://localhost:3001/api", {
    //         method: "post",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(form)
    //     })
    //         .then((response) => {
    //             alert("данные отправлены")
    //         });
    //     console.log(form)
    // }
    const submitHanlder = () => {
        const config = {
            SecureToken: '8b66ce37-44ad-489f-9daa-1b8f3665266f',
            To: "nikita4litvin@gmail.com",
            From: "nikita.litvin4@yandex.com",
            Subject: "Запрос на обратный звонок с web-сайта aliance74",
            Body: `Здравствуйте! Меня зоут ${form.name}. Мой номер телефона ${form.phone}. ${form.message}`
        }
        if (window.Email) {
            window.Email.send(config)
            .then(() => alert("Письмо отправлено!"));
        }
    }
    return (
        <div className="aplication-form">
            <div className="container">
                <div className="content-aplication">
                    <div className="title-aplication">
                        <h2 className='title-aplication-txt'>МЫ ГОТОВЫ ОТВЕТИТЬ НА ВСЕ ВАШИ<br />
                            ВОПРОСЫ - ПРОСТО НАПИШИТЕ НАМ</h2>
                    </div>
                    <div className="aplication-inputs">
                        <div className="container-inputs">
                            <div className="block-input">

                                <input class="text-field__input"
                                    type="text"
                                    placeholder='ваше имя'
                                    value={form.name}
                                    onChange={(e) => handleChange(e.target.value, 'name')} />
                            </div>
                            <div className="block-input">

                                <input class="text-field__input"
                                    type="text"
                                    placeholder='телефон'
                                    value={form.phone}
                                    onChange={(e) => handleChange(e.target.value, 'phone')} />
                            </div>

                            <div className="block-input">

                                <input class="text-field__input"
                                    type="text"
                                    placeholder='ваше сообщение'
                                    value={form.message}
                                    onChange={(e) => handleChange(e.target.value, 'message')} />
                            </div>
                            <button className='button' onClick={submitHanlder}>напишите нам</button>
                        </div>
                    </div>
                    <div className="contact-company">
                        <div className="title-kontact">
                            <h4>КОНТАКТЫ</h4>
                        </div>
                        <div className="info-kontact">
                            <a href="tel:+73512141113">+7 (351) 214-11-13</a>
                            <p>info@alliance74.com</p>
                            <a href="https://yandex.ru/maps/-/CCUkJAsj8B">г. Челябинск, ул. Тагильская 32а, оф. 10</a>
                        </div>
                    </div>
                    <div className="foter">
                        <div className="foter-copyright">
                            <p className='copyright-txt'>ООО Альянс инженеров и проектировщиков <br />© 2017-2023</p>
                        </div>
                        <div className="foter-nav">
                            <a href="#">о компании</a>
                            <a href="#">услуги</a>
                            <a href="#">проекты</a>
                            <a href="#">контакты</a>
                        </div>
                        <div className="foter-social">
                            <div className="foter-links-title">
                                <p>мы в соц.сетях</p>
                            </div>
                            <div className="foter-links">
                                <a href="https://www.youtube.com/channel/UCTOdzZEoemX2jKpfMsM9JYQ">{<img src={svgYotube}></img>}</a>
                                <a href="https://vk.com/club_alliance74" >{<img src={svgVK}></img>}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm;