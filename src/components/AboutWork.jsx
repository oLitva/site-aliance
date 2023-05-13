import React, { } from 'react';
import PatternAliance from "./pictures/aboutWorkBG.png"
import "../styles/AboutWork.css"

const AboutWork = () => {
    return (
        <div className="about-work">
            <div className="container">
                <div className="bacgroung">
                    <div className="about-info">
                        <div className="title">
                            <h2 className='title-txt'>ДЛЯ КОГО МЫ РАБОТАЕМ</h2>
                        </div>
                        <div className="container-info">
                            <div className="info">
                                <h3 className='info-txt'><div>заказчики и инвесторы </div>
                                    <div>проектировщики и инженеры </div>
                                    <div>производители и поставщики </div>
                                    управляющие компании </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWork;