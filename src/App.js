import React, { useState } from "react";
import Information from "./components/Information";
import Payment from "./components/Payment";
import Roomtype from "./components/Roomtype";
import Reservations from "./components/Reservations";

export default function App() {
  const [currentComponent,setCurrentComponent] = useState("Reservations");
  const [selectedHotel,setSelectedHotel] = useState("");
  const [adult,setAdult] = useState("");
  const [child,setChild] = useState("");
  const [currentRoom,setCurrentRoom] = useState("");
  const [currentLandscape,setCurrentLandscape] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");
  const [coupon , setCoupon] = useState("");

  const newRezervation = () => {
    if(window.confirm("yeni rezervasyon oluşturmak istediğine emin misin ?")){
      window.location.reload();
    }
  }
  return (
      <main className="container-fluid p-0">
        <header>
          <div className="container grid mt-3 mb-3">
            <div className="left g-col-6">
              <span className="bigText">Otel</span>
              <span>Rezervasyon Sistemi</span>
            </div>
            <div className="right g-col-6">
              <button type="button" className="btn btn-light" onClick={newRezervation}>
                Yeni Rezervasyon Yap
              </button>
            </div>
          </div>
        </header>

        {/* section alanı */}
        {currentComponent != "Information" ? (
            <section className="container">
            <div className="sectionTop mt-5">
              <div className={`datePicker my-3 ${currentComponent == "Reservations" ? "active" : "passive"}`}>
                <span>
                  <i className="far fa-calendar-alt cal-pad"></i>
                </span>
                <span className="text">Otel ve Tarih Seçimi</span>
              </div>
              <div className={`roomType my-3 ${currentComponent == "RoomType" ? "active" : "passive"}`}>
                <span>
                  <i className="fas fa-bed"></i>
                </span>
                <span className="text">Oda Tipi ve Manzara Seçimi</span>
              </div>
              <div className={`payment my-3 ${currentComponent == "Payment" ? "active" : "passive"}`}>
                <span>
                  <i className="far fa-credit-card"></i>
                </span>
                <span className="text">Önizleme ve Ödeme işlemleri</span>
              </div>
            </div>
          </section>
        )
        :
        (
          null
        )
        }
      
        {currentComponent == "Reservations" ? 
          (
            <Reservations data={{selectedHotel , setSelectedHotel , setCurrentComponent , adult , setAdult , child , setChild , setStartDate , setEndDate}}/>
          )
          : currentComponent == "RoomType" ?
          (
            <Roomtype data={{selectedHotel , setSelectedHotel , setCurrentComponent, adult , setAdult , child , setChild , currentRoom , setCurrentRoom , currentLandscape , setCurrentLandscape , startDate , setStartDate , endDate , setEndDate}}/>
          )
          : currentComponent == "Payment" ?
          (
            <Payment data={{selectedHotel , setSelectedHotel , setCurrentComponent, adult , setAdult , child , setChild , currentRoom , setCurrentRoom , currentLandscape , setCurrentLandscape , startDate , setStartDate , endDate , setEndDate , coupon, setCoupon}}/>
          )
          :
          (
            <Information data={{selectedHotel , setSelectedHotel , setCurrentComponent, adult , setAdult , child , setChild , currentRoom , setCurrentRoom , currentLandscape , setCurrentLandscape , startDate , setStartDate , endDate , setEndDate , coupon}}/>
          )
        }
      </main>
  );
}
