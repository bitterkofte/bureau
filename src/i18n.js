import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      buro: "Petek & Leblebici Hukuk ve Danışmanlık",
      navbar: {
        anasayfa: "Anasayfa",
        kurumsal: "Kurumsal",
        hakkimizda: "Hakkımızda",
        nedenPL: "Neden Petek & Leblebici",
        sss: "Sıkça Sorulan Sorular",
        hukuk: "Hukuk",
        sigortaH: "Sigorta Hukuku",
        hukukiD: "Hukuki Danışmanlık",
        hizmetler: "Hizmetler",
        onleyiciHH: "Önleyici Hukuk Hizmetleri",
        uzlastirmaAH: "Uzlaştırma ve Arabuluculuk Hizmetleri",
        kGHD: "KVKK ve GDPR Hukuki Danışmanlık",
        iletisim: "İletişim",
        iletisimB: "İletişim Bilgilerimiz",
        calismaA: "Çalışma Arkadaşları",
        avukatK: "Avukat Kimdir?",
        hizmetlerimiz: "Hizmetlerimiz",
      },
      content: {
        kurumsal: {
          hakkimizda:
            "Petek § Leblebici Hukuk ve Danışmanlık, 2023 yılında İstanbul’da kurulmuş olup, dinamik ve gelişen ekibimizle müvekkillerimize kapsamlı ve nitelikli hukuki danışmanlık ve avukatlık hizmetleri sunmaktayız. Ofisimiz, hukukun her alanında en iyi hizmeti sunabilmek adına güncel hukuki gelişmeleri ve değişen mevzuatı yakından takip ederken, müvekkillerimize hızlı ve etkili çözümler sunma amacı taşımaktadır.",
          nedenPL: {
            head1: "Uzman Kadro",
            desc1:
              "Sigorta, gayrimenkul ve bilişim hukuku gibi özel alanlarda uzmanlaşmış, deneyimli avukatlardan oluşan ekibimizle, müvekkillerimize en yüksek kalitede hizmet sunuyoruz.",
            head2: "Kişiye Özel Çözümler",
            desc2:
              "Her müvekkilin ihtiyaçlarına özel, kişiselleştirilmiş hukuki çözümler sunarak, etkili ve tatmin edici sonuçlar elde ediyoruz.",
            head3: "Şeffaf ve Etkili İletişim",
            desc3:
              "Sürecin her aşamasında açık ve sürekli iletişim anlayışımızla, müvekkillerimizi her konuda bilgilendiriyoruz ve sürecin şeffaf olmasını sağlıyoruz.",
            head4: "Stratejik Yaklaşım",
            desc4:
              "Hukuki sorunları proaktif bir şekilde ele alarak, stratejik ve uzun vadeli çözümler üretiyoruz.",
          },

          neden: {
            head: [
              "Uzman Kadro",
              "Kişiye Özel Çözümler",
              "Şeffaf ve Etkili İletişim",
              "Stratejik Yaklaşım",
            ],
            desc: [
              "Sigorta, gayrimenkul ve bilişim hukuku gibi özel alanlarda uzmanlaşmış, deneyimli avukatlardan oluşan ekibimizle, müvekkillerimize en yüksek kalitede hizmet sunuyoruz.",
              "Her müvekkilin ihtiyaçlarına özel, kişiselleştirilmiş hukuki çözümler sunarak, etkili ve tatmin edici sonuçlar elde ediyoruz.",
              "Sürecin her aşamasında açık ve sürekli iletişim anlayışımızla, müvekkillerimizi her konuda bilgilendiriyoruz ve sürecin şeffaf olmasını sağlıyoruz.",
              "Hukuki sorunları proaktif bir şekilde ele alarak, stratejik ve uzun vadeli çözümler üretiyoruz.",
            ],
          },
          ndn: `<li>
          <strong>Uzman Kadro</strong>: Sigorta, gayrimenkul ve bilişim hukuku
          gibi özel alanlarda uzmanlaşmış, deneyimli avukatlardan oluşan
          ekibimizle, müvekkillerimize en yüksek kalitede hizmet sunuyoruz.
        </li>
        <li>
          <strong>Kişiye Özel Çözümler</strong>: Her müvekkilin ihtiyaçlarına
          özel, kişiselleştirilmiş hukuki çözümler sunarak, etkili ve tatmin
          edici sonuçlar elde ediyoruz.
        </li>
        <li>
          <strong>Şeffaf ve Etkili İletişim</strong>: Sürecin her aşamasında
          açık ve sürekli iletişim anlayışımızla, müvekkillerimizi her konuda
          bilgilendiriyoruz ve sürecin şeffaf olmasını sağlıyoruz.
        </li>
        <li>
          <strong>Stratejik Yaklaşım</strong>: Hukuki sorunları proaktif bir
          şekilde ele alarak, stratejik ve uzun vadeli çözümler üretiyoruz.
        </li>`,
        },
        hukuk: {
          sigortaH:
            "Sigorta Hukuku alanında müvekkillerimize kapsamlı hizmetler sunuyoruz. Sigorta sektörünün öncü firmalarından QUICK SİGORTA A.Ş. ve CORPUS SİGORTA A.Ş.'nin vekilliğini yapmaktayız ve danışmanlık hizmeti vermekteyiz. Deneyimli ekibimiz ile sigorta hukuku alanındaki sorunlarınıza etkili ve hızlı çözümler üretiyoruz.",
          hukukiD:
            "Petek § Leblebici Hukuk ve Danışmanlık olarak, müvekkillerimize en yüksek kalitede hukuki danışmanlık hizmetleri sunmaktayız. Uzman avukatlarımız, müvekkillerimizin ihtiyaçlarına özel çözümler üreterek, her türlü hukuki sorunlarında yanlarında olmaktadır. Şirketler, bireyler ve diğer kurumlar için özelleştirilmiş hukuki stratejiler geliştirerek, hukuki süreçlerin her aşamasında profesyonel destek sağlıyoruz. Hukuki danışmanlık hizmetlerimizle, müvekkillerimizin hukuki risklerini minimize ederek, en uygun ve etkili çözümleri sunmaktayız.",
        },
        hizmetler: {
          onleyiciHH:
            "Petek § Leblebici Hukuk ve Danışmanlık olarak, müvekkillerimizin hukuki risklerini en aza indirmek ve olası uyuşmazlıkları önlemek amacıyla önleyici hukuk hizmetleri sunmaktayız. Uzman avukatlarımız, müvekkillerimizin iş süreçlerini ve faaliyetlerini analiz ederek, hukuki açıdan risk teşkil edebilecek alanları belirler ve gerekli önlemleri alır. Bu sayede, müvekkillerimizin karşılaşabileceği hukuki sorunları önceden tespit ederek, proaktif çözümler geliştiririz. Önleyici hukuk hizmetlerimizle, müvekkillerimizin uzun vadeli başarısını ve hukuki güvenliğini sağlamak için çalışıyoruz.",
          uzlastirmaAH:
            "Petek § Leblebici Hukuk ve Danışmanlık olarak, müvekkillerimize alternatif çözüm yolları sunarak, uzun ve maliyetli yargı süreçlerinden kaçınmalarına yardımcı oluyoruz. Deneyimli avukatlarımız, taraflar arasında uzlaşı sağlamak ve ihtilafları etkin bir şekilde çözmek için arabuluculuk ve uzlaştırma hizmetleri sunar. Uzmanlarımız, müvekkillerimize çatışmaların çözümünde tarafsız ve etkili bir rol oynayarak, uzlaşma odaklı ve adil sonuçlar elde etmelerini sağlar. Uzlaştırma ve arabuluculuk hizmetlerimizle, müvekkillerimizin hem zaman hem de maliyet açısından avantaj sağlamalarını hedefliyoruz.",
          kGHD: "Petek § Leblebici Hukuk ve Danışmanlık olarak, müvekkillerimizin KVKK (Kişisel Verilerin Korunması Kanunu) ve GDPR (General Data Protection Regulation) kapsamında hukuki gereksinimlerini karşılamak amacıyla danışmanlık hizmetleri sunmaktayız. Uzman avukatlarımız, kişisel verilerin korunması ve yönetilmesi konusunda müvekkillerimize rehberlik ederek, uyum süreçlerini en etkin şekilde yönetmelerine yardımcı olur. Veri ihlalleri ve hukuki riskleri minimize etmek için gerekli hukuki tedbirleri alarak, müvekkillerimizin veri güvenliğini ve hukuki uyumunu sağlamaktayız.",
        },
        anasayfa: {
          avukatK:
            "Avukatlar, hukuk sisteminde adaletin sağlanması için çalışan profesyonellerdir. Hukuki konularda müvekkillerine danışmanlık yapar, onları temsil eder ve hukuki süreçlerde haklarını savunurlar. Avukatlar, çeşitli hukuk dallarında uzmanlaşarak, bireylerin ve kurumların hukuki ihtiyaçlarına yönelik çözüm önerileri sunarlar. Hukukun üstünlüğünü ve adaleti sağlamak adına önemli bir rol üstlenirler.",
          calismaA:
            "Petek § Leblebici Hukuk ve Danışmanlık bünyesinde, her biri alanında uzman stajyer avukatlar, katip elemanları, teknik ekip ve çözüm ortakları bulunmaktadır. Ekibimiz, müvekkillerimize sunulan hizmetlerin kalitesini artırmak ve hukuki süreçlerde maksimum verimlilik sağlamak için titizlikle çalışmaktadır. Stajyer avukatlarımız sürekli eğitim ve gelişim içindeyken, katip ve teknik personelimiz işlerin sorunsuz yürütülmesini sağlamakta; çözüm ortaklarımız ise uzmanlık gerektiren özel durumlarda destek ve danışmanlık sunmaktadır.",
          haklar: "Tüm Haklarımız Saklıdır.",
        },
      },
    },
  },
  en: {
    translation: {
      buro: "Petek & Leblebici Law and Consultancy",
      navbar: {
        anasayfa: "Homepage",
        kurumsal: "Corporate",
        hakkimizda: "About Us",
        nedenPL: "Why Petek & Leblebici",
        sss: "Frequently Asked Questions",
        hukuk: "Law",
        sigortaH: "Insurance Law",
        hukukiD: "Legal Consultancy",
        hizmetler: "Services",
        onleyiciHH: "Preventive Legal Services",
        uzlastirmaAH: "Mediation and Arbitration Services",
        kGHD: "KVKK and GDPR Legal Consultancy",
        iletisim: "Contact",
        iletisimB: "Contact Info",
        calismaA: "Colleagues",
        avukatK: "Who is a Lawyer?",
        hizmetlerimiz: "Our Services",
      },
      content: {
        kurumsal: {
          hakkimizda:
            "Petek § Leblebici Law and Consultancy was established in Istanbul in 2023 and, with its developing team, provides comprehensive and qualified legal consultancy and attorney services to its clients. Our office, which offers up-to-date, fast, and effective solutions, closely follows current legal developments and changing legislation to provide the best service in every field of law.",
          nedenPL: {
            head1: "Expert Team",
            desc1:
              "With a professional team of experienced lawyers who have extensive knowledge in special fields such as insurance, real estate, and IT law, as well as other branches of law, we provide our clients with the highest quality service.",
            head2: "Customized Solutions",
            desc2:
              "We offer personalized legal solutions tailored to the needs and goals of each client, achieving effective and satisfactory results.",
            head3: "Transparent and Effective Communication",
            desc3:
              "With an understanding of open, honest, and continuous communication at every stage of the process, we keep our clients informed on every matter and ensure the transparency of the process.",
            head4: "Strategic Approach",
            desc4:
              "We address your legal issues proactively, producing strategic and long-term solutions.",
          },
          neden: {
            head: [
              "Expert Team",
              "Customized Solutions",
              "Transparent and Effective Communication",
              "Strategic Approach",
            ],
            desc: [
              "With a professional team of experienced lawyers who have extensive knowledge in special fields such as insurance, real estate, and IT law, as well as other branches of law, we provide our clients with the highest quality service.",
              "We offer personalized legal solutions tailored to the needs and goals of each client, achieving effective and satisfactory results.",
              "With an understanding of open, honest, and continuous communication at every stage of the process, we keep our clients informed on every matter and ensure the transparency of the process.",
              "We address your legal issues proactively, producing strategic and long-term solutions.",
            ],
          },
          ndn: `<li>
          <strong>Expert Team</strong>: With a professional team of experienced lawyers who have extensive knowledge in special fields such as insurance, real estate, and IT law, as well as other branches of law, we provide our clients with the highest quality service.
        </li>
        <li>
          <strong>Customized Solutions</strong>: HWe offer personalized legal solutions tailored to the needs and goals of each client, achieving effective and satisfactory results.
        </li>
        <li>
          <strong>Transparent and Effective Communication</strong>: With an understanding of open, honest, and continuous communication at every stage of the process, we keep our clients informed on every matter and ensure the transparency of the process.
        </li>
        <li>
          <strong>Strategic Approach</strong>: We address your legal issues proactively, producing strategic and long-term solutions.
        </li>`,
        },
        hukuk: {
          sigortaH:
            "We provide comprehensive services in the field of insurance law to our clients. We act as legal representatives and offer consultancy services to leading companies in the insurance sector such as QUICK SİGORTA A.Ş. and CORPUS SİGORTA A.Ş. With our experienced team, we produce effective and rapid solutions to your issues in the field of insurance law.",
          hukukiD:
            "As Petek § Leblebici Law and Consultancy, we offer our clients the highest quality legal consultancy services. Our expert lawyers provide tailored solutions to meet the needs of our clients and stand by them in all legal matters. We develop customized legal strategies for companies, individuals, and other institutions, providing professional support at every stage of legal processes. With our legal consultancy services, we minimize our clients' legal risks and provide the most appropriate and effective solutions.",
        },
        hizmetler: {
          onleyiciHH:
            "At Petek § Leblebici Law and Consultancy offers alternative solutions to help our clients avoid lengthy and costly litigation processes. Our experienced lawyers provide mediation and arbitration services to achieve settlements and effectively resolve disputes between parties. Our experts play a neutral and effective role in resolving conflicts, helping our clients achieve compromise-oriented and fair results. With our mediation and arbitration services, we aim to provide our clients with both time and cost advantages.",
          uzlastirmaAH:
            "Petek § Leblebici Law and Consultancy offers alternative solutions to help our clients avoid lengthy and costly litigation processes. Our experienced lawyers provide mediation and arbitration services to achieve settlements and effectively resolve disputes between parties. Our experts play a neutral and effective role in resolving conflicts, helping our clients achieve compromise-oriented and fair results. With our mediation and arbitration services, we aim to provide our clients with both time and cost advantages.",
          kGHD: "At Petek § Leblebici Law and Consultancy, we provide consultancy services to meet our clients' legal requirements under KVKK (Personal Data Protection Law) and GDPR (General Data Protection Regulation). Our expert lawyers guide our clients on the protection and management of personal data, helping them manage compliance processes most effectively. By taking necessary legal precautions to minimize data breaches and legal risks, we ensure our clients' data security and legal compliance.",
        },
        anasayfa: {
          avukatK:
            "Lawyers are professionals who work to ensure justice within the legal system. They provide legal advice to their clients, represent them, and defend their rights in legal processes. Lawyers specialize in various branches of law and offer solutions tailored to the legal needs of individuals and institutions. They play a crucial role in upholding the rule of law and justice.",
          calismaA:
            "At Petek § Leblebici Law and Consultancy, we have a team of expert trainee lawyers, clerks, technical staff, and solution partners. Our team works meticulously to enhance the quality of services provided to our clients and ensure maximum efficiency in legal processes. While our trainee lawyers are continually engaged in education and development, our clerical and technical staff ensure the smooth running of operations; our solution partners provide support and consultancy in specialized situations.",
          haklar: "All Rights Reserved.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({ lng: "tr", resources });

export default i18n;
