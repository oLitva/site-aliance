import React, { } from 'react';
import "../styles/MainServices.css"

const MainServices = () => {
    const dataServices = [
        {
            title: "bim-центр",
            subtitle:
                "РАЗРАБатываем И ВНЕДяЕм СИСТЕМы УПРАВЛЕНИЯ АКТИВаМ, АВТОМАТИЗИРОВАНННЫХ АЛГОРИТМОВ, bim-СЕРВИСами ДЛЯ ОРГАНИЗАЦИИ тоир"
        },
        {
            title: "ОБУЧЕНИЕ bim-ТЕХНОЛОГИИ",
            subtitle:
                "обучаем работе в технологии BIM проектные институты, организации и отдельных специалистов"
        },
        {
            title: "bim-каталоги",
            subtitle:
                "разработали самую крупную в России базу  библиотек инженерного оборудования, изделий и материалов "
        },
        {
            title: "дата-центр",
            subtitle:
                "предоставляем нашим клиентам центр хранения и обработки данных для коллективной работы в BIM-среде"
        }
    ];

    return (
        <div className="service">
            <div className="container">
                <div className="about-service">
                    <div className="title-a-s">
                        <h2 className='title-about-servise'>мы предоставляем</h2>
                    </div>
                    <div className="content">
                        {dataServices.map((item, index) => (
                            <div className="block-services">
                                <h3 className='block-services-title'>
                                    {item.title}
                                    <span>0{index + 1}</span>
                                </h3>
                                <p className='block-services-subtitle'>{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                    <div className="service-button">
                        <button className='header-button button'>свяжитесь с нами</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MainServices;