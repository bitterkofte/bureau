import MyLink from "../Elements/MyLink";

const MobileMenu = () => {
  return (
    <div className="fixed top-0 left-0 px-20 w-full h-screen flex flex-col justify-center gap-8 animate-mobileMenuDown animate-mobileMenuUp bg-lp-brown-d2 text-white">
      {/* SECTION 1st Col */}
      <div className="max-w-52">
        <h3 className="text-lg font-bold">Kurumsal</h3>
        <div className="ml-3 flex flex-col gap-2">
          <MyLink to={"/"}>Anasayfa</MyLink>
          <MyLink to={"/hakkimizda"}>Hakkımıda</MyLink>
          <MyLink to={"/neden-petek-ve-leblebici"}>
            Neden Petek & Leblebici
          </MyLink>
          <MyLink to={"/sikca-sorulan-sorular"}>Sıkça Sorulan Sorular</MyLink>
        </div>
      </div>

      {/* SECTION 2nd Col */}
      <div className="max-w-52 content-start">
        <h3 className="text-lg font-bold">Hukuk</h3>
        <div className="ml-3 flex flex-col gap-2">
          <MyLink to={"/sigorta-hukuku"}>Sigorta Hukuku</MyLink>
          <MyLink to={"/hukuki-danismanlik"}>Hukuki Danışmanlık</MyLink>
        </div>
      </div>

      {/* SECTION 3rd Col */}
      <div className="max-w-52">
        <h3 className="text-lg font-bold">Hizmetler</h3>
        <div className="ml-3 flex flex-col gap-2">
          <MyLink to={"/onleyici-hukuk-hizmetleri"}>
            Önleyici Hukuk Hizmetleri
          </MyLink>
          <MyLink to={"/uzlastirma-ve-arabuluculuk-hizmetleri"}>
            Uzlaştırma ve Arabuluculuk Hizmetleri
          </MyLink>
          <MyLink to={"/kvkk-ve-gdpr-hukuki-danismanlik"}>
            KVKK ve GDPR Hukuki Danışmanlık
          </MyLink>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
