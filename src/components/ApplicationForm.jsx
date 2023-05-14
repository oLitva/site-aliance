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
        <div className="aplication-form" id='aplication-form'>
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
                            <a href="mailto:info@alliance74.com">info@alliance74.com</a>
                            <a href="https://yandex.ru/maps/-/CCUkJAsj8B">г. Челябинск, ул. Тагильская 32а, оф. 10</a>
                        </div>
                    </div>
                    <div className="foter">
                        <div className="foter-copyright">
                            <p className='copyright-txt'>ООО Альянс инженеров и проектировщиков <br />© 2017-2023</p>
                        </div>
                        <div className="foter-nav">
                            <a href="#about">о компании</a>
                            <a href="#service">услуги</a>
                            <a href="#implemented-project">проекты</a>
                            <a href="#aplication-form">контакты</a>
                        </div>
                        <div className="foter-social">
                            <div className="foter-links-title">
                                <p>мы в соц.сетях</p>
                            </div>
                            <div className="foter-links">
                                <a className='you-tube' href="https://www.youtube.com/channel/UCTOdzZEoemX2jKpfMsM9JYQ"><svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M35.8434 10.7068C35.6492 10.0224 35.269 9.39831 34.7407 8.8971C34.2124 8.3959 33.5546 8.03512 32.8331 7.85089C30.1763 7.1687 19.5 7.1687 19.5 7.1687C19.5 7.1687 8.82375 7.1687 6.16688 7.85089C5.44543 8.03512 4.78763 8.3959 4.25933 8.8971C3.73103 9.39831 3.35076 10.0224 3.15656 10.7068C2.66047 13.2775 2.41972 15.8866 2.4375 18.5C2.41972 21.1133 2.66047 23.7224 3.15656 26.2931C3.35076 26.9775 3.73103 27.6016 4.25933 28.1028C4.78763 28.604 5.44543 28.9648 6.16688 29.149C8.82375 29.8312 19.5 29.8312 19.5 29.8312C19.5 29.8312 30.1763 29.8312 32.8331 29.149C33.5546 28.9648 34.2124 28.604 34.7407 28.1028C35.269 27.6016 35.6492 26.9775 35.8434 26.2931C36.3395 23.7224 36.5803 21.1133 36.5625 18.5C36.5803 15.8866 36.3395 13.2775 35.8434 10.7068ZM16.0875 23.3562V13.6437L24.9478 18.5L16.0875 23.3562Z" fill="#F5F5F5" />
                                </svg>
                                </a>
                                <a className='vkontakte' href="https://vk.com/club_alliance74" ><svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1111_119)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45833 3.625C7.17645 3.625 5.94708 4.13422 5.04065 5.04065C4.13422 5.94708 3.625 7.17645 3.625 8.45833V20.5417C3.625 21.8235 4.13422 23.0529 5.04065 23.9593C5.94708 24.8658 7.17645 25.375 8.45833 25.375H20.5417C21.8235 25.375 23.0529 24.8658 23.9593 23.9593C24.8658 23.0529 25.375 21.8235 25.375 20.5417V8.45833C25.375 7.17645 24.8658 5.94708 23.9593 5.04065C23.0529 4.13422 21.8235 3.625 20.5417 3.625H8.45833ZM20.9428 12.1498C21.1207 11.8832 21.1854 11.5568 21.1226 11.2425C21.0598 10.9282 20.8748 10.6517 20.6081 10.4738C20.3415 10.296 20.0151 10.2313 19.7008 10.2941C19.3865 10.3569 19.11 10.5419 18.9322 10.8085C18.5044 11.3765 18.0561 11.9202 17.5317 12.4035C16.9239 12.9642 16.3089 13.3847 15.7095 13.6336L15.6999 11.3378C15.6652 11.0439 15.524 10.7729 15.3028 10.5762C15.0816 10.3795 14.796 10.2709 14.5 10.2708C13.8451 10.3083 13.2917 10.7916 13.2917 11.4792V16.7632C10.9378 16.1107 9.66667 13.827 9.66667 11.4792C9.66667 11.1587 9.53936 10.8514 9.31275 10.6247C9.08615 10.3981 8.7788 10.2708 8.45833 10.2708C8.13786 10.2708 7.83052 10.3981 7.60391 10.6247C7.37731 10.8514 7.25 11.1587 7.25 11.4792C7.25 15.8678 10.2829 19.3333 14.5 19.3333C14.8205 19.3333 15.1278 19.206 15.3544 18.9794C15.581 18.7528 15.7083 18.4455 15.7083 18.125V16.2364C17.3178 16.3645 18.879 17.5015 19.4614 18.6651C19.5293 18.812 19.626 18.9438 19.7457 19.0526C19.8655 19.1615 20.0059 19.2451 20.1586 19.2987C20.3113 19.3522 20.4732 19.3745 20.6347 19.3643C20.7962 19.3541 20.954 19.3115 21.0988 19.2392C21.2435 19.1668 21.3722 19.0661 21.4773 18.943C21.5824 18.82 21.6617 18.677 21.7105 18.5227C21.7593 18.3685 21.7766 18.2059 21.7614 18.0448C21.7461 17.8837 21.6987 17.7273 21.6219 17.5849C21.0443 16.4285 19.9665 15.347 18.6398 14.6414C18.8186 14.4952 18.9962 14.3405 19.1714 14.1798C19.8371 13.5727 20.4315 12.8916 20.9428 12.1498Z" fill="#F5F5F5" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1111_119">
                                            <rect width="29" height="29" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm;