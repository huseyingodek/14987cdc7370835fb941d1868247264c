import React,{useState,useEffect, useRef} from "react";
import { rooms, landscapes } from "./data";

export default function RoomType(props) {
  const [currentRoom,setCurrentRoom] = useState("");
  const [currentLandscape,setCurrentLandscape] = useState("");
  const allRooms = useRef() , allLandscapes = useRef();
  
  const selectRoom = (room,index) => {
    for(let child of allRooms.current.children){
      child.classList.remove("radioSelected");
    }
    props.data.setCurrentRoom(room);
    setCurrentRoom(index);
  }

  const selectLandscape = (landscape,index) => {
    for(let child of allLandscapes.current.children){
      child.classList.remove("radioSelected");
    }
    props.data.setCurrentLandscape(landscape)
    setCurrentLandscape(index);
  }

  const next = () => {
    if(props.data.currentLandscape != "" && props.data.currentRoom != ""){
      props.data.setCurrentComponent("Payment");
    }else if(props.data.currentLandscape == "" && props.data.currentRoom != ""){
      alert("Lütfen manzara tipi seçiniz..!");
    }else if(props.data.currentLandscape != "" && props.data.currentRoom == ""){
      alert("Lütfen oda tipi seçiniz..!");
    }else {
      alert("Lütfen oda ve manzara tipi seçiniz..!");
    }
  }

  const previous = () => {
    props.data.setCurrentComponent("Reservations")
  }

  useEffect(() => {
    switch (props.data.currentRoom.roomTypeTitle) {
      case "Standart":
        allRooms.current.children[0].classList.add("radioSelected")
        break;
      case "Deluxe":
        allRooms.current.children[1].classList.add("radioSelected")
        break;
      case "Suit":
        allRooms.current.children[2].classList.add("radioSelected")
        break;
    }
    switch (props.data.currentLandscape.landscapeTypeTitle) {
      case "Kara Manzaralı":
        allLandscapes.current.children[0].classList.add("radioSelected");
        break;
      case "Havuz Manzaralı":
        allLandscapes.current.children[1].classList.add("radioSelected");
       break;
      case "Deniz Manzaralı":
        allLandscapes.current.children[2].classList.add("radioSelected");
        break;
    }
  },[])

  return (
    <section className="container flex-column">
      <div className="roomInfo">
        <div className="hotelName">
          <span className="hotelText">{props.data.selectedHotel}</span>
          {/* <span className="hotelCity">(Istanbul)</span> */}
        </div>
        <div className="dateSelect">
          <div className="checkIn">
            <span className="dateText">Giriş Tarihi: </span>
            <span className="date">{props.data.startDate}</span>
          </div>
          <div className="checkOut">
            <span className="dateText">Çıkış Tarihi: </span>
            <span className="date">{props.data.endDate}</span>
          </div>
          <div className="adult">
            <span className="dateText">Yetişkin: </span>
            <span className="date">{props.data.adult}</span>
          </div>
          <div className="child">
            <span className="dateText">Çocuk: </span>
            <span className="date not">{props.data.child || 0}</span>
          </div>
        </div>
      </div>

      <div className="roomSelect">
        <div className="roomCheck">
          <div className="infoText">Oda Tipi Seçiniz</div>
          <hr></hr>
          <div className="roomRadio" ref={allRooms}>
            {rooms.map((room, index) => (
              <div
                className={`roomImage ${
                  currentRoom === index ? "radioSelected" : ""
                }`}
                key={room.roomTypeTitle}
                onClick={() => selectRoom(room, index)}
              >
                <span className="typeSelectName">{room.roomTypeTitle}</span>
                <img src={room.img} />
                <div className="typeInfo">
                  <div className="typeInfoLeft">
                  <span>{room.day}</span>
                    <span>{room.personNumber}</span>
                    <span>{props.data.adult} Kişi</span>
                    {props.data.child != 0 ? <span>{props.data.child} Çocuk</span> : null}
                  </div>
                  <div className="typeInfoRight">
                    <span className="InfoPrice">{room.price} TL</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="roomCheck mt-3">
          <div className="infoText">Manzara Seçimi</div>
          <hr></hr>
          <div className="roomRadio d-flex" ref={allLandscapes}>
              {landscapes.map((landscape,index) => (
                  <div className={`roomImage ${currentLandscape === index ? "radioSelected" : ""}`} key={landscape.landscapeTypeTitle} onClick={() => selectLandscape(landscape,index)}>
                      <span className="typeSelectName">{landscape.landscapeTypeTitle}</span>
                      <img src={landscape.img}/>
                      <div className="typeInfo">
                        <div className="typeInfoLeft">
                          <span>Fiyat Etki Oranı</span>
                        </div>
                        <div className="typeInfoRight">
                          <span className="InfoPrice">{landscape.ratio}</span>
                        </div>
                      </div>
                  </div>
              ))}
          </div>
        </div>

        <div className="process">
          <button className="back" onClick={previous}>Geri</button>
          <button className="save-next" onClick={next}>Kaydet ve Devam Et</button>
        </div>
      </div>
    </section>
  );
}
