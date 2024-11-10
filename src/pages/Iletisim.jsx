import PageLayout from "../components/Layout/PageLayout";
import highImg from "../assets/lazyLoad/bookshelves-high.jpg";
import lowImg from "../assets/lazyLoad/bookshelves-low.jpg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const position = [40.992444877573284, 29.04113002642259];

const Iletisim = () => {
  return (
    <PageLayout
      heading={"İletişim"}
      highImg={highImg}
      lowImg={lowImg}
      navigation={["Anasayfa", "İletişim"]}
    >
      <h3 className="flex gap-2 items-center font-bold text-lg tracking-wider">
        <FaLocationDot />
        Açık Adres
      </h3>
      <p className="mb-4">
        Eğitim Mahallesi Ahsen Çıkmazı Sokak Sadıkoğlu İş Merkezi 1 No:10 Kat:1
        Daire:21 Kadıköy/İST
      </p>
      <h3 className="flex gap-2 items-center font-bold text-lg tracking-wider">
        <FaPhoneAlt />
        Telefon Numarası
      </h3>
      <p className="mb-4">+90 507 264 40 80</p>
      <h3 className="flex gap-2 items-center font-bold text-lg tracking-wider">
        <IoIosMail />
        E-posta Adresi
      </h3>
      <p className="mb-8">av.emreleblebici@gmail.com</p>

      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12045.99651387941!2d29.0411272!3d40.9924473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9954a4f319d%3A0xc66f072ff21fa87a!2zU2FkxLFrb8SfbHUgxLDFnyBNZXJrZXppIDE!5e0!3m2!1str!2str!4v1731182607454!5m2!1str!2str"
          className="w-full h-96 rounded-xl"
          // width="600"
          // height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </p>
      {/* <MapContainer
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
      </MapContainer> */}
    </PageLayout>
  );
};
export default Iletisim;
