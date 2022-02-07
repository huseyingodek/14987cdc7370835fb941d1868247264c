import React, { useRef } from "react";
import { validCouponCodes } from './data';

export default function Payment(props) {
  console.log(props.data);
  const cvv = useRef(),
    startDate = Number(
      props.data.startDate[0] == 0
        ? props.data.startDate[1]
        : props.data.startDate[0] + props.data.startDate[1]
    ),
    endDate = Number(
      props.data.endDate[0] == 0 ? props.data.endDate[1] : props.data.endDate[0] + props.data.endDate[1]
    ),
    currentCoupon = Number(props.data.coupon.substring(4)),
    creditCard = useRef(),
    creditCardBack = useRef(),
    cvvNumber = useRef(),
    firstName = useRef(),
    first = useRef(),
    second = useRef(),
    third = useRef(),
    fourth = useRef(),
    monthYear = useRef(),
    cardOwnFullName = useRef(),
    cartNumber = useRef(),
    month = useRef(),
    year = useRef(),
    coupon = useRef();

  const showCvv = () => {
    creditCard.current.classList.add("d-none");
    creditCardBack.current.classList.remove("d-none");
  };

  const hideCvv = () => {
    creditCard.current.classList.remove("d-none");
    creditCardBack.current.classList.add("d-none");
  };

  const cvvWrite = () => {
    if (cvv.current.value.length > 0) {
      cvvNumber.current.innerText = cvv.current.value;
    } else {
      cvvNumber.current.innerText = "X X X";
    }
  };

  const changeCartName = (e) => {
    if (e.target.value.length > 0) {
      firstName.current.innerText = e.target.value;
    } else {
      firstName.current.innerText = "Hüseyin GÖDEK";
    }
  };

  const changeCartNumbers = (e) => {
    if (e.target.value.length > 0) {
      if (e.target.value.length <= 4) {
        first.current.innerText = e.target.value;
        second.current.innerText = "";
        third.current.innerText = "";
        fourth.current.innerText = "";
      } else if (e.target.value.length > 4 && e.target.value.length <= 8) {
        second.current.innerText += `${
          e.target.value[e.target.value.length - 1]
        }`;
      } else if (e.target.value.length <= 12 && e.target.value.length >= 9) {
        third.current.innerText += `${
          e.target.value[e.target.value.length - 1]
        }`;
      } else if (e.target.value.length >= 13 && e.target.value.length < 17) {
        fourth.current.innerText += `${
          e.target.value[e.target.value.length - 1]
        }`;
      }
    } else {
      first.current.innerText = "1234";
      second.current.innerText = "5678";
      third.current.innerText = "1234";
      fourth.current.innerText = "5678";
    }
  };

  const changeMonth = (e) => {
    monthYear.current.innerText = `${e.target.value}/`;
  };

  const changeYear = (e) => {
    monthYear.current.innerText += `${e.target.value}`;
  };

  const next = () => {
    if (
      cardOwnFullName.current.value.length > 5 &&
      cartNumber.current.value.length == 16 &&
      month.current.value.length >= 1 &&
      year.current.value.length == 4 &&
      cvv.current.value.length == 3
    ) {
      props.data.setCurrentComponent("Information");
    } else {
      alert("Lütfen kart bilgilerini eksiksiz doldurunuz..!");
    }
  };

  const previous = () => {
    props.data.setCurrentComponent("RoomType");
  };

  const couponCode = () => {
      if(coupon.current.value.length == 0){
        alert("Lütfen kupon kodu giriniz..! Geçerli kupon kodları : Code100 - Code200 - Code300");
      }else if(validCouponCodes.includes(coupon.current.value)){
          props.data.setCoupon(coupon.current.value)
      }else {
        alert("Geçersiz kupon kodu...! Geçerli kupon kodları : Code100 - Code200 - Code300");
      }
  }
  return (
    <>
      <section className="container">
        <div className="paymentArea mt-3">
          <div className="col-md-7 cardArea">
            <div className="creditCard" ref={creditCard}>
              <div className="cardHead">
                <div className="cardLogo">
                  <span className="headText bigText"> Credit</span>
                  <span className="lightText">
                    <i>Card</i>
                  </span>
                </div>
                <div className="cardBank headText">HUGO BANK</div>
              </div>
              <div className="cardImage mt-2">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/sim-card-chip.png"
                  alt=""
                />
              </div>
              <div className="cardNumber mt-2">
                <span ref={first}>1234</span>
                <span ref={second}>5678</span>
                <span ref={third}>1234</span>
                <span ref={fourth}>5678</span>
              </div>
              <div className="cardName mt-2">
                <div className="splitArea">
                  <div className="cardNameText headText">
                    <p>
                      {" "}
                      <span className="me-1" ref={firstName}>
                        Hüseyin GÖDEK
                      </span>
                    </p>
                    <span className="headText" ref={monthYear}>
                      05/30
                    </span>
                  </div>
                  <div className="cardMaster">
                    <img
                      src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png"
                      alt="kartyazisi"
                      srcSet=""
                      width="100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="creditCardBack d-none" ref={creditCardBack}>
              <div className="cardHead">
                <div className="blackBack mt-3"></div>
                <div className="digitArea mt-3">
                  <span ref={cvvNumber}>X X X</span>
                </div>
                <div className="cardBothText">
                  <span>
                    Merhaba, case için teşekkür ederim. Umarım sizinle uzun
                    soluklu bir çalışma hayatımız olur. Selamlar
                  </span>
                </div>
              </div>
            </div>

            <div className="cardInput">
              <span className="legendary">Kredi Kartı Bilgileri</span>
              <div className="form-group">
                <label htmlFor="mail">Kartın Üzerindeki İsmi Giriniz</label>
                <input
                  type="email"
                  className="form-control"
                  id="mail"
                  placeholder="Kartın Üzerindeki İsmi Giriniz"
                  maxLength={20}
                  onKeyUp={changeCartName}
                  ref={cardOwnFullName}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="cardnumber">Kartın Numarası</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardnumber"
                  placeholder="Kartın Numarasını giriniz"
                  maxLength={16}
                  onKeyUp={changeCartNumbers}
                  ref={cartNumber}
                />
              </div>

              <div className="form-group mt-3">
                <div className="d-flex justify-content-between">
                  <span htmlFor="cardLastUseDate">
                    Kart Son Kullanma Tarihi
                  </span>
                  <span htmlFor="">CVV</span>
                </div>
                <div className="cardDate d-flex">
                  <select
                    className="form-control"
                    id="cardLastUseDate"
                    onChange={changeMonth}
                    ref={month}
                  >
                    <option disabled selected defaultValue="ay">
                      Ay
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <select
                    className="form-control"
                    onChange={changeYear}
                    ref={year}
                  >
                    <option disabled selected defaultValue="ay">
                      Yıl
                    </option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                    <option>2031</option>
                    <option>2032</option>
                    <option>2033</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="CVV Giriniz"
                    maxLength="3"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    ref={cvv}
                    onFocus={showCvv}
                    onBlur={hideCvv}
                    onKeyUp={cvvWrite}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 reviewArea">
            <div className="roomDetailInfo reviewAreaBoth">
              <div className="hotelName">
                <span className="hotelText">{props.data.selectedHotel}</span>
                {/* <span className="hotelCity">(Istanbul)</span> */}
              </div>
              <div className="separateArea">
                <div className="halfArea">
                  <span className="headText">Giriş Tarihi</span>
                  <span>{props.data.startDate}</span>
                </div>
                <div className="halfArea">
                  <span className="headText">Çıkış Tarihi</span>
                  <span>{props.data.endDate}</span>
                </div>
                <div className="halfArea">
                  <span className="headText">Yetişkin</span>
                  <span>{props.data.adult}</span>
                </div>
                <div className="halfArea">
                  <span className="headText">Çocuk</span>
                  <span>{props.data.child || 0}</span>
                </div>
                <div className="halfArea">
                  <span className="headText">Oda Tipi</span>
                  <span>{props.data.currentRoom.roomTypeTitle}</span>
                </div>
                <div className="halfArea">
                  <span className="headText">Manzara</span>
                  <span>{props.data.currentLandscape.landscapeTypeTitle}</span>
                </div>
                <div className="couponArea halfArea">
                  <input
                    type="text"
                    className="form-control w-50"
                    placeholder="Kupon Kodu"
                    ref={coupon}
                  >
                  </input>
                  <button
                    type="button"
                    className="btn btn-primary w-50 ms-2 btn-sm"
                    onClick={couponCode}
                  >
                    Kodu Kullan
                  </button>{" "}
                </div>
              </div>

              <div className="finalInfo mt-3">
                <div className="finalText">
                  <span className="headText">Oda Fiyatı:</span>
                  <span>{props.data.currentRoom.price} TL</span>
                </div>
                <div className="finalText">
                  <span className="headText">Fiyat etki oranı:</span>
                  <span>{props.data.currentLandscape.ratio}</span>
                </div>
                <div className="finalText">
                  <span className="headText">
                    Konaklama :{" "}
                    <span className="lightText">
                      {endDate - startDate == 0 ? 1 : endDate-startDate} Gün
                    </span>
                  </span>
                  <span>
                    { endDate - startDate != 0 ? (((endDate - startDate) * Number(props.data.currentRoom.price))).toFixed(2) : Number(props.data.currentRoom.price)} TL
                    </span>
                </div>
                <div className="finalText">
                  <span className="headText">
                    İndirim: <span className="lightText">{props.data.coupon || ""}</span>
                  </span>
                  <span>{currentCoupon} TL</span>
                </div>
                <hr />
                <div className="finalPrice">
                  <span className="headText">TOPLAM TUTAR</span>
                  <span className="headText bigText">
                    { endDate - startDate != 0 ? ((endDate - startDate) * Number(props.data.currentRoom.price)) - currentCoupon : Number(props.data.currentRoom.price) - currentCoupon} TL
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container checkout mt-4">
        <div className="process">
          <button className="back" onClick={previous}>
            Geri
          </button>
          <button className="save-next" onClick={next}>
            Ödeme Yap ve Bitir
          </button>
        </div>
      </div>
    </>
  );
}
