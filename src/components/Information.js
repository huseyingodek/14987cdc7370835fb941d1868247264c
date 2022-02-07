import React from "react";

export default function Information(props) {
  const startDate = Number(
    props.data.startDate[0] == 0
      ? props.data.startDate[1]
      : props.data.startDate[0] + props.data.startDate[1]
  ),
  endDate = Number(
    props.data.endDate[0] == 0 ? props.data.endDate[1] : props.data.endDate[0] + props.data.endDate[1]
  ),
  currentCoupon = Number(props.data.coupon.substring(4)),

  newRezervation = () => {
    window.location.reload();
  },

  cancelRezervation = () => {
    if(window.confirm("Rezervasyonu iptal istediğinize emin misiniz ?")){
      alert("Rezervasyonunuz iptal edildi..!");
      newRezervation();
    }
  }
  return (
    <section className="container flex-column">
      <div className="information">
        <div className="informaText">
          <span>
            <i className="far fa-calendar-check threeRem colorGreen"></i>
          </span>
          <span className="mt-2 ">
            <h5>Rezervasyon kaydınız alınmıştır.</h5>
          </span>
          <span className="reservationSuccess">
            Rezervasyon özetiniz aşağıdaki gibidir. Rezervasyon kaydınızda
            değişiklik veya yeni rezervasyon yapmak için aşağıdaki linkleri
            kullabilirsiniz.
          </span>
          <div className="resButton mt-3">
            <button type="button" className="btn btn-primary btn-sm ms-1" onClick={newRezervation}>
              Yeni Rezervasyon Yap
            </button>
            <button type="button" className="btn btn-primary btn-sm ms-1" onClick={newRezervation}>
              Rezervasyon Güncelle
            </button>
            <button type="button" className="btn btn-primary btn-sm ms-1" onClick={cancelRezervation}>
              Rezervasyonu İptal Et
            </button>
          </div>
        </div>
      </div>
      <div className="roomDetailInfo">
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
        </div>

        
        <div className="finalInfo mt-3">
            <div className="finalText">
            <span className="headText">Oda Fiyatı:</span>
            <span>{props.data.currentRoom.price} TL</span>
            </div> 
            <div className="finalText">
            <span className="headText">Fiyat etki oranı:</span>
            <span>{props.data.currentLandscape.ratio} TL</span>
            </div> 
            <div className="finalText">
            <span className="headText">Konaklama : <span className="lightText">                      {endDate - startDate == 0 ? 1 : endDate-startDate} Gün
</span> </span>
            <span>
            { endDate - startDate != 0 ? (((endDate - startDate) * Number(props.data.currentRoom.price))).toFixed(2) : Number(props.data.currentRoom.price)} TL
            </span>
            </div> 
            <div className="finalText">
            <span className="headText">İndirim: <span className="lightText">{props.data.coupon}</span> </span>
            <span>{Number(props.data.coupon.substring(4))} TL</span>
            </div>
            <hr />
            <div className="finalPrice">
            <span className="headText">
                TOPLAM TUTAR
              </span>
              <span className="headText bigText"> 
              { endDate - startDate != 0 ? ((endDate - startDate) * Number(props.data.currentRoom.price)) - currentCoupon : Number(props.data.currentRoom.price) - currentCoupon} TL
              </span>
            </div>         
        </div>
      </div>
    </section>
  );
}
