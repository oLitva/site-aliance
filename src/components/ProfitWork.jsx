import React, { } from 'react';
import ImgVector from "./pictures/Vector.svg"
import "../styles/ProfitWork.css"

const ProfitWork = () => {

    const dataProfit = [
        {
            title_percent: "40",
            subtitle_percent: "сокращение продолжительности этапа проектирования"
        },
        {
            title_percent: "30",
            subtitle_percent: "сокращение продолжительности этапа строительства"
        },
        {
            title_percent: "50",
            subtitle_percent: "сокращение сроков прохождения экспертизы"
        },
        {
            title_percent: "30",
            subtitle_percent: "сокращение срока подготовки тендерной документации"
        },
        {
            title_percent: "30",
            subtitle_percent: "сокращение продолжительности пуско-наладочных работ"
        }
    ]

    return (
        <div className="profit-work">
            <div className="container">
                <div className="content-profit">
                    <div className="title-profit">
                        <h2 className='your-profit'>Ваши выгоды <br />при сотрудничестве с нами</h2>
                    </div>
                    <div className="theses-profit">
                        <div className="picture-profit">
                        </div>
                        <div className="about-profit">
                            <h3 className='info-for-klient'><div>качество<br /></div>
                                <div>высокая скорость работ<br /></div>
                                <div>Экономическая выгода<br /></div>
                                <div>надежность сотрудничества</div> </h3>
                        </div>
                    </div>
                    <div className="indicators-profit">
                        <div className="indicators-title">
                            <h2 className='title-result'>Какие результаты МЫ достигаем</h2>
                        </div>
                        <div className="indicators">
                            {dataProfit.map((item) => (
                                <div className="indicators-block">
                                    <div className="indicator-percent">
                                        <img src={ImgVector} />
                                        <h4 className='indicators-title-percent'>{item.title_percent}%</h4>
                                    </div>
                                    <p className='indicators-subtitle'>{item.subtitle_percent}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfitWork;