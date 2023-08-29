import React from 'react';
import '../Payment/Payment.scss';
import Sidebar from '../Sidebar/Sidebar';

function CardForm() {
  return (
    <div className="home" id="app">
      <Sidebar />
      <div className="card-form">
        <div className="card-list">
          <div className={`card-item`}>
            <div className="card-item__side -front">
              <div className="card-item__cover">
                <img
                  src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${Math.floor(Math.random() * 25 + 1)}.jpeg`}
                  className="card-item__bg"
                />
              </div>

              <div className="card-item__wrapper">
                <div className="card-item__top">
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    className="card-item__chip"
                  />
                  <div className="card-item__type">
                    <img
                      src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png`}
                      alt=""
                      className="card-item__typeImg"
                    />
                  </div>
                </div>
                <label htmlFor="cardNumber" className="card-item__number">
                  <span>
                    {'                    '.split('').map((n, index) => (
                      <React.Fragment key={index}>
                        {n.trim() === '' ? (
                          <div className={`card-item__numberItem -active`} key={index}></div>
                        ) : (
                          <div className={`card-item__numberItem`} key={index}>
                            {n}
                          </div>
                        )}
                        {n}
                      </React.Fragment>
                    ))}
                  </span>
                </label>
                <div className="card-item__content">
                  <label htmlFor="cardName" className="card-item__info">
                    <div className="card-item__holder">Card Holder</div>
                    <div className="card-item__name" key="2">
                      Full Name
                    </div>
                  </label>
                  <div className="card-item__date">
                    <label htmlFor="cardMonth" className="card-item__dateTitle">
                      Expires
                    </label>
                    <label htmlFor="cardMonth" className="card-item__dateItem">
                      <span>MM</span>
                    </label>
                    /
                    <label htmlFor="cardYear" className="card-item__dateItem">
                      <span>YY</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-item__side -back">
              <div className="card-item__cover">
                <img
                  src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${Math.floor(Math.random() * 25 + 1)}.jpeg`}
                  className="card-item__bg"
                />
              </div>
              <div className="card-item__band"></div>
              <div className="card-item__cvv">
                <div className="card-item__cvvTitle">CVV</div>
                <div className="card-item__cvvBand">
                  {'    '.split('').map((n, index) => (
                    <span key={index}>*</span>
                  ))}
                </div>
                <div className="card-item__type">
                  <img
                    src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png`}
                    className="card-item__typeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-form__inner">
          <div className="card-input">
            <label htmlFor="cardNumber" className="card-input__label">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="card-input__input"
              autoComplete="off"
            />
          </div>
          <div className="card-input">
            <label htmlFor="cardName" className="card-input__label">
              Card Holders
            </label>
            <input
              type="text"
              id="cardName"
              className="card-input__input"
              autoComplete="off"
            />
          </div>
          <div className="card-form__row">
            <div className="card-form__col">
              <div className="card-form__group">
                <label htmlFor="cardMonth" className="card-input__label">
                  Expiration Date
                </label>
                <select
                  className="card-input__input -select"
                  id="cardMonth"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Month
                  </option>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <option
                      value={index < 9 ? '0' + (index + 1) : index + 1}
                      key={index}
                    >
                      {index < 9 ? '0' + (index + 1) : index + 1}
                    </option>
                  ))}
                </select>
                <select
                  className="card-input__input -select"
                  id="cardYear"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Year
                  </option>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <option value={index + new Date().getFullYear()} key={index}>
                      {index + new Date().getFullYear()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="card-form__col -cvv">
              <div className="card-input">
                <label htmlFor="cardCvv" className="card-input__label">
                  CVV
                </label>
                <input
                  type="text"
                  className="card-input__input"
                  id="cardCvv"
                  autoComplete="off"
                />
              </div>
            </div>
          </div>

          <button className="card-form__button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CardForm;
