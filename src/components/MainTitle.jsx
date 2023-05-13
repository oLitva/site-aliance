import React, { } from 'react';
import background from "./pictures/konstruktionBackground.png"
import PatternAliance from "./pictures/PatternAliance.png"
import "../styles/MainTitle.css"
import Header from './Header';

const MainTitle = () => {
    return (
        <div className="start">
            <Header />
            <div className="container">
                <div className="start-inner">
                    <h1 className='start-title'>Мы реализуем полностью готовое комплексное
                        решение ваших потребностей под ключ в BIM-среде</h1>

                    <div className='start-subltitle'>
                        <p className='start-txt'><span>Действуйте</span>  на опережение — выбирайте прогрессивное  решение,
                            с которым избежите проблем
                            с графиком, качеством и бюджетом.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainTitle;