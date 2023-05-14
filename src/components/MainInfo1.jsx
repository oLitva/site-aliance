import React, { } from 'react';
import image1 from "./pictures/pictureWithOrangebox.png"
import "../styles/MainInfo1.css"

const MainInfo1 = () => {
    return (
        <div className="about" id='about'>
            <div className="container">
                <div className="about-inner">
                    <div className="about-content">
                        <h3 className='about-company'>мы предлагаем кардинально отличающееся на рынке технологическое решение.</h3>

                        <div className="about-project">
                            <p>Собственники и инвесторы смогут вкладывать
                                инвестиционные деньги в проект, создавать его,
                                оснащать и сдавать в эксплуатацию с полной
                                уверенностью в экономической отдаче.
                            </p>
                        </div>
                    </div>

                    <div className="about-image">
                        {/* <img src={image1} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainInfo1;