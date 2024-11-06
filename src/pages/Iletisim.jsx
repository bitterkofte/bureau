import PageLayout from "../components/Layout/PageLayout";
import highImg from "../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../assets/lazyLoad/bookshelves-low.jpg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [40.992444877573284, 29.04113002642259];

const Iletisim = () => {
  return (
    <PageLayout
      heading={"İletişim"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={["Anasayfa", "İletişim"]}
    >
      <p>
        Açık Adres: Eğitim Mahallesi Ahsen Çıkmazı Sokak Sadıkoğlu İş Merkezi 1
        No:10 Kat:1 Daire:21 Kadıköy/İST
      </p>
      <p>Telefon Numarası: +90 507 264 40 80</p>
      <p>E-posta adresi: av.emreleblebici@gmail.com</p>
      {/* <div className="overflow-hidden w-full h-96"> */}
      <MapContainer
        className="h-96 rounded-md mt-10"
        // style={{ height: "450px", width: "100%" }}
        center={position}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=t3DtQ9UfCx4EnSQMSWcf56NnqKAEecwrraxLLgvimNIKDPlDaOja61vBA0M45SGy"
          // url="https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"
          // url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=b37f0f2c-146f-4044-8c25-f6630572ed42"
        />
        <Marker position={position}>
          <Popup className="text-center">
            <p className="text-center">
              <strong>PETEK & LEBLEBİCİ HUKUK ve DANIŞMANLIK</strong>
              <br />
              <a
                className="underline"
                href="https://maps.app.goo.gl/FtXCg8qBD8bpc5NE6"
              >
                Google Maps
              </a>
            </p>
          </Popup>
        </Marker>
      </MapContainer>
      {/* </div> */}
    </PageLayout>
  );
};
export default Iletisim;
