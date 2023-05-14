import React, { } from 'react';
import ReadyProject from "./pictures/ReadyProject.png"
import ImgVector from "./pictures/Vector.svg"
import "../styles/ImplementedProject.css"

const ImplementedProject = () => {
    return (
        <div className="implemented-project" id='implemented-project'>
            <div className="container">
                <div className="list-ready-projects">
                    <div className="about-ready-project">
                        <div className="title-ready-project">
                            <h2 className='title-r-p'>РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
                        </div>
                        <div className="info-ready-project">
                            <div className="name-ready-project">
                                <h3 className='name-r-p'>Готовый проект "Имя"</h3>
                            </div>
                            <div className="description-ready-project">
                                <p className='description-r-p'>Требования к зданию: площадь - 4000 м2.<br />
                                    Высота - не более 8 этажей.<br />
                                    Стены - кирпич, газоблок.<br />
                                    Фундамент - монолитная плита.<br />
                                    Крыша - двускатная.<br />
                                    Полы - цементно-песчаная стяжка.<br />
                                    Окна - металлопластиковые стеклопакеты.<br />
                                    Двери - металлические.<br />
                                    Коммуникации - газ, водопровод, канализация, электричество.<br />
                                    Пропускная система.<br />
                                    Ограждение - забор из профнастила.<br />
                                    Ворота - откатные.<br />
                                    Цена: от 500 000 рублей.<br />
                                    Проектирование и строительство.<br /><span>	&copy; Балабоба</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className="photo-ready-project"></div>
                </div>

            </div>
        </div>
    )
}

export default ImplementedProject;