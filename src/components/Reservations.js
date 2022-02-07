import React, {useRef, useState } from "react";
import { options } from "./data";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function Reservations(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const hotel = useRef(),
    adult = useRef(),
    child = useRef();

  const next = () => {
    const startDate = document.querySelectorAll(
        ".react-datepicker__input-container"
      )[0].children[0],
      endDate = document.querySelectorAll(
        ".react-datepicker__input-container"
      )[1].children[0];

    if (
      hotel.current.value != "" &&
      adult.current.value != "" &&
      adult.current.value != 0 &&
      startDate &&
      endDate
    ) {
      props.data.setCurrentComponent("RoomType");
      props.data.setSelectedHotel(hotel.current.value);
      props.data.setAdult(adult.current.value);
      props.data.setChild(child.current.value);
      props.data.setStartDate(startDate.value);
      props.data.setEndDate(endDate.value);
    } else {
      alert("Lütfen boş alanları doldurunuz !");
    }
  };

  return (
    <>
      <section className="container">
        <div className="sectionMid row">
          <div className="selector">
            <input
              className="form-control"
              list="hotels"
              placeholder="Rezervasyon yapmak istediğiniz oteli seçiniz."
              ref={hotel}
              defaultValue={props.data.selectedHotel || ""}
            />
            <i className="fas fa-search"></i>
            <datalist id="hotels">
              {options.map((hotel, index) => (
                <option key={index} value={hotel}></option>
              ))}
            </datalist>
          </div>

          <div className="picker">
            <div className="box">
              <div className="miniBox">
                <span className="headText">Giriş Tarihi</span>
                <DatePicker  
                  selected={startDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <div className="box">
              <div className="miniBox">
                <span className="headText">Çıkış Tarihi</span>
                <DatePicker
                  selected={endDate}
                  dateFormat="dd/MM/yyyy"
                  minDate={startDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
            </div>{" "}
            <div className="box">
              <div className="miniBox">
                <span className="headText">Yetişkin Sayısı</span>
                <span>
                  <input
                    type="number"
                    defaultValue={props.data.adult || 0}
                    ref={adult}
                    className="form-control"
                    width="100"
                    min={0}
                    max={5}
                    maxLength={3}
                    placeholder="Yetişkin sayısı giriniz"
                  />
                </span>
              </div>
            </div>
            <div className="box">
              <div className="miniBox">
                <span className="headText">Çocuk Sayısı</span>
                <span>
                  <input
                    type="number"
                    defaultValue={props.data.child || 0}
                    ref={child}
                    className="form-control"
                    width="100"
                    min="0"
                    max="3"
                    maxLength="1"
                    placeholder="Çocuk sayısı giriniz"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container reservationBtn mt-4">
        <div className="process">
          <button className="save-next" onClick={next}>
            Kaydet ve Devam Et
          </button>
        </div>
      </div>
    </>
  );
}
