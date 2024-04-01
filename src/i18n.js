import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        homePage: "Homepage",
        aboutUs: "About Us",
        partners: "Partners",
        contactUs: "Contact Us",
        contactUs1: "Contact Us",
        service1: "Services",
        services: {
          managedServices: "IT Consulting",
          supportServices: "Infrastructure Solutions",
          softwareDevelopment1: "Software Development",
          softwareDevelopment: {
            networkAndSecurity: "Network and Security Support",
            supportAndMaintenance: "Support and Maintenance Services",
          },
        itConsulting:{
          header:"We work with our expert team to provide customized solutions tailored to your needs.",
          header1:"IT Consulting",
          paragraph1:"By understanding the unique requirements of your business, we develop strategic and innovative approaches. With our expertise and experience in the field of information technology, we optimize your business processes and enhance efficiency.",
          paragraph2:"You can also contact us to maximize the potential of your business and gain a competitive advantage."
        },
        supportService:{
          header:"Infrastructure solutions",
          header1:"We support your business processes by building robust infrastructures.",
          paragraph1:"For businesses to succeed, they need to have a strong infrastructure. We provide robust infrastructure solutions to support businesses' growth and development.",
          paragraph2:"We help businesses optimize their processes and increase efficiency by utilizing modern technologies and best practices. With our strong infrastructure, we enable businesses to be future-ready and gain a competitive edge."
        },
        networkAndSecurity:{
          header:"We utilize the latest technology to ensure your data security.",
          header1:"Network and Security",
          paragraph1:"Our network and security solutions are designed to keep businesses' sensitive information safe and protect against cyber threats.",
          paragraph2:"Thanks to our robust network infrastructure and advanced security measures, our customers can rest assured about the privacy and integrity of their data. This enables businesses to ensure data security with peace of mind and focus on growing their operations."
        },
        supportAndMaintenance:{
          header:"We provide continuous support for seamless operations.",
          header1:"Support Services",
          paragraph1:"We assist businesses in maintaining their competitive advantage and fostering growth by providing reliable, fast, and effective support to our customers.",
          word1:"Data Centers",
          word2:"Server and Storage Systems",
          word3:"Network Systems",
          word4:"Network Security Systems",
          word5:"Communication Systems",
        }
        },
      },
      homePage: {
        header1: "Corporate Technology Solutions",
        header2: "Your Reliable Technology Solution Partner",
        vissionAndMission: {
          header: "İnfe Bilişim Services",
          header1:
            "We provide solutions to meet the professional, efficient, and flexible IT management needs of companies.",
          header2:
            "The center guarantees the service level it provides to its customers, enabling organizations to quickly focus on real threats from millions of alerts, and intervene in these threats to reduce risk and potential damage.",
          cards: {
            cardsHeader1: "Digital Communication",
            cardsHeader2: "Communication Networks",
            cardsHeader3: "Enterprise Systems",
            cardsHeader4: "Security",
            cardParagraph1:
              "At İnfe Bilişim, we provide corporate digital communication solutions in various areas including internal communication portals, digital signage solutions, video portal solutions, and online training portal solutions.",
            cardParagraph2:
              "At İnfe Bilişim, we offer services in various areas such as end-to-end design and implementation of network infrastructure in projects, appropriate security analysis, establishment of communication between remote locations, and creation of backup and recovery scenarios.",
            cardParagraph3:
              "At İnfe Bilişim, we provide IT systems and data with necessary business continuity solutions under all conditions. We ensure that the most valuable asset of a business, which is `Data` is processed and stored under appropriate conditions.",
            cardParagraph4:
              "The center ensures the guaranteed service level to its customers, enabling organizations to swiftly focus on real threats from among millions of alerts. This allows intervention to mitigate risks and potential damage associated with these threats.",
          },
        },
        blogCard:{
          header:"Digital Transformation",
          header1:"Expert Team:",
          header2:"Customer Focus:",
          header3:"Technological Innovation:",
          header4:"Reliability:",
          paragraph1:"We manage your projects in the best possible way by working with an experienced and expert team.",
          paragraph2:"We prioritize customer satisfaction by offering customized solutions tailored to your needs.",
          paragraph3:"We keep abreast of industry developments to provide our customers with the latest technologies.",
          paragraph4:"We establish transparent and reliable approaches in project processes, building long-term relationships with our customers.",
        },
        bottomHero:{
            header:"As İnfe Bilişim",
            cards:{
                card1Header:"Security",
                card2Header:"Global",
                card3Header:"Colaborative",
                card1Paragraph:"We work to protect our customers' data and ensure business continuity with our comprehensive security solutions and continuously updated technological infrastructure. With our pioneering and innovative approach to security, we are here to ensure the safety of you and your business.",
                card2Paragraph:"As a technology company offering pioneering and innovative solutions to our customers, we adapt our steps in line with the changing world. Our mission is to understand our customers' needs and add value to them by leveraging the latest technological advancements, thereby fostering mutual growth and success.",
                card3Paragraph:"We collaborate closely with our customers to generate proactive solutions. By anticipating their needs, we provide customized and effective solutions that address their unique challenges. Our customer-centric approach ensures that we are always one step ahead in delivering tailored solutions that drive mutual growth and satisfaction. .",
            }
        }
      },
      footer:{
        header1:"Digital Transformation",
        header2:"Comminication Information",
        header3:"IT Management",
        headerr1:{
            word1:"Software Solutions",
            word2:"Cloud Computing",
            word3:"Data Center",
            word4:"Network And Security",
        },
        headerr2:{
            word1:"E-mail Adress:",
        },
        headerr3:{
            word1:"Managed IT Services",
            word2:"Maintenance and Support Services",
            word3:"Software Development",
            word4:"Project Management Services",
        }
      },
      aboutUs:{
        header:"About İNFE BİLİŞİM",
        header1:"Who We Are?",
        header2:"Our Vision:",
        header3:"Our Mission:",
        paragraph1:"İnfe Bilişim is a information technology company established in 2022. With 16 years of expertise and experience in the industry, we embarked on our journey with the goal of providing the best service to our customers. Prioritizing customer satisfaction and quality standards, we serve a diverse customer portfolio.",
        paragraph2:"As İnfe Bilişim, our vision is to help our customers optimize their business processes and gain a competitive advantage by harnessing the power of technology.",
        paragraph3:"Our mission is to contribute to our customers by providing them with the latest technologies to make their business processes more effective, secure, and efficient.",
        foot:"How Can We Help?",
      },
      partners:{
        header:"Partners"
      },
      contactUs:{
        header:"Contact Us",
        header1:"Adress:",
        header2:"E-mail:",
        header3:"Phone:"
      }
    },
  },
  tr: {
    translation: {
      navbar: {
        homePage: "Anasayfa",
        aboutUs: "Hakkımızda",
        partners: "Çözüm Ortaklarımız",
        contactUs: "İletişim",
        contactUs1: "Bize Ulaşın",
        service1: "Servislerimiz",
        services: {
          managedServices: "Bilgi Teknolojileri Danışmanlığı",
          supportServices: "Altyapı Cözümleri",
          softwareDevelopment1: "Yazılım Geliştirme",
          softwareDevelopment: {
            networkAndSecurity: "Ağ ve Güvenlik Çözümleri",
            supportAndMaintenance: "Destek ve Bakım Servisleri",
          },
          itConsulting:{
            header:"İhtiyaçlarınıza özel çözümler sunmak için uzman ekibimizle birlikte çalışıyoruz.",
            header1:"IT Danışmanlığı",
            paragraph1:"İşletmenizin benzersiz gereksinimlerini anlayarak, stratejik ve yenilikçi yaklaşımlar geliştiriyoruz. Bilgi teknolojileri alanındaki deneyimimiz ve uzmanlığımız sayesinde, iş süreçlerinizioptimize ediyor ve verimliliği artırıyoruz.",
            paragraph2:"Siz de işletmenizin potansiyelini maksimize etmek ve rekabet avantajı elde etmek için bizimle iletişime geçebilirsiniz."
          },
          supportService:{
            header:"Altyapı Çözümleri",
            header1:"Güçlü altyapılar oluşturarak iş süreçlerinizi destekliyoruz.",
            paragraph1:"İşletmelerin başarılı olmaları için güçlü bir altyapıya sahip olmaları gerekmektedir. Biz, işletmelerin büyüme ve gelişmelerini desteklemek için güçlü altyapı çözümleri sunuyoruz.",
            paragraph2:"Modern teknolojileri ve en iyi uygulamaları kullanarak, işletmelerin iş süreçlerini optimize etmelerine ve verimliliklerini artırmalarına yardımcı oluyoruz. Güçlü altyapılarımız sayesinde, işletmelerin geleceğe hazır olmalarını ve rekabet avantajı elde etmelerini sağlıyoruz."
          },
          networkAndSecurity:{
            header:"Veri güvenliğinizi sağlamak için en son teknolojiyi kullanıyoruz.",
            header1:"Ağ ve Güvenlik",
            paragraph1:"Ağ ve güvenlik çözümlerimiz, işletmelerin hassas bilgilerini güvende tutmak ve siber tehditlere karşı korumak için tasarlanmıştır.",
            paragraph2:"Güçlü ağ altyapısı ve ileri düzey güvenlik önlemleri sayesinde, müşterilerimiz verilerinin gizliliğini ve bütünlüğünü sağlamak konusunda tam bir güvenceye sahip olabilirler. Böylece, işletmelerin huzur içinde veri güvenliğini sağlamalarını ve işlerini büyütmelerini destekliyoruz."
          },
          supportAndMaintenance:{
            header:"Sorunsuz bir işleyiş için sürekli destek sağlıyoruz.",
            header1:"Destek Hizmetleri",
            paragraph1:"Müşterilerimize güvenilir, hızlı ve etkili destek sağlayarak işletmelerin rekabet avantajını korumalarına ve büyümelerine yardımcı oluyoruz.",
            word1:"Veri Merkezi",
            word2:"Sunucu ve Depolama Sistemleri",
            word3:"Network Sistemleri",
            word4:"Ağ ve Güvenlik Sistemleri",
            word5:"İletişim Sistemleri",
          }
        },
      },
      homePage: {
        header1: "Kurumsal Teknoloji Çözümleri",
        header2: "Teknolojide Güvenilir Çözüm Ortağınız",
        vissionAndMission: {
          header: "İnfe Bilişim Hizmetleri",
          header1:
            "Şirketlerin profesyonel, verimli ve esnek BT yönetim ihtiyaçlarına çözümler üretiyoruz",
          header2:
            "Merkezin, müşterilerine verdiği hizmet seviyesini garantilemesi, kuruluşların, milyonlarca uyarı arasından gerçek tehditlere en hızlı şekilde odaklanmasını; bu tehditlere risk ve potansiyel zararı azaltacak şekilde müdahale edilmesini sağlamaktadır.",
          cards: {
            cardsHeader1: "Dijital İletişim ",
            cardsHeader2: "İletişim Ağları ",
            cardsHeader3: "Kurumsal Sistemler",
            cardsHeader4: "Güvenlik",
            cardParagraph1:
              "İnfe Bilişim olarak, hem kurum içi iletişim portalından, dijital signage çözümlerine, video portal çözümlerinden, online eğitim portalı çözümlerine kadar bir çok alanda kurumsa dijital iletişim çözümleri sunmaktayız.",
            cardParagraph2:
              "İnfe Bilişim olarak projelerde network altyapısının uçtan uca tasarlanması ve oluşturulması, uygun güvenlik analizi, uzak lokasyonlar arası iletişim ve yedekli kurtarma senaryoları oluşturulması gibi bir çok alanda hizmet vermekteyiz.",
            cardParagraph3:
              "İşletmenin en değerli ürünü olan “Veri” uygun koşullarda işlenmeli ve saklanmalıdır. İnfe Bilişim olarak IT sistemlerinin ve verilerin her koşulda ihtiyaç duyulan iş sürekliliği çözümleriyle hizmet vermekteyiz.",
            cardParagraph4:
              "Merkezin, müşterilerine verdiği hizmet seviyesini garantilemesi, kuruluşların, milyonlarca uyarı arasından gerçek tehditlere en hızlı şekilde odaklanmasını; bu tehditlere risk ve potansiyel zararı azaltacak şekilde müdahale edilmesini sağlamaktadır.",
          },
        },
        blogCard:{
            header:"Dijital Dönüşüm",
            header1:"Uzman Kadro:",
            header2:"Müşteri Odaklılık:",
            header3:"Teknolojik Yenilik:",
            header4:"Güvenilirlik:",
            paragraph1:"Deneyimli ve uzman bir ekip ile çalışarak projelerinizi en iyi şekilde yönetiyoruz.",
            paragraph2:"Müşteri memnuniyetini ön planda tutarak, ihtiyaçlarınıza özel çözümler sunuyoruz.",
            paragraph3:"Sektördeki gelişmeleri yakından takip ederek, müşterilerimize en son teknolojileri sunuyoruz.",
            paragraph4:"Proje süreçlerinde şeffaf ve güvenilir bir yaklaşım benimseyerek, müşterilerimizle uzun vadeli ilişkiler kuruyoruz.",
          },
          bottomHero:{
            header:"İnfe Bilişim Olarak",
            cards:{
                card1Header:"Güvenlik",
                card2Header:"Global",
                card3Header:"İş Birlikçi",
                card1Paragraph:"Kapsamlı güvenlik çözümlerimiz ve sürekli güncellenen teknolojik altyapımız ile müşterilerimizin verilerini korumak ve iş sürekliliğini sağlamak için çalışıyoruz. Güvenlikte öncü ve yenilikçi yaklaşımlarımızla, sizin ve işinizin güvenliğini sağlamak için buradayız.",
                card2Paragraph:"Müşterilerimize öncü ve yenilikçi çözümler sunan bir teknoloji şirketi olarak, değişen dünya ile adımlarımızı uyumlu bir şekilde atmaktayız. Misyonumuz, müşterilerimizin ihtiyaçlarını anlamak ve en son teknoloji gelişmelerini kullanarak onlara değer katmaktır.",
                card3Paragraph:"Müşterilerimizle işbirliği yaparak, proaktif çözümler üretiriz. Onların ihtiyaçlarını öngörerek, özelleştirilmiş ve etkili çözümler sunarız. Müşterilerimizin başarılarını desteklemek ve onların hedeflerine ulaşmalarına yardımcı olmak için elimizden gelenin en iyisini yaparız."
            }
        }
      },
      footer:{
        header1:"DİJİTAL DÖNÜŞÜM",
        header2:"İLETİŞİM BİLGİLERI",
        header3:"IT YÖNETİM HİZMETLERİ",
        headerr1:{
            word1:"Yazılım Çözümleri",
            word2:"Bulut Bilişim",
            word3:"Veri Merkezi",
            word4:"Ağ ve Güvenlik",
        },
        headerr2:{
            word1:"E-Posta Adresimiz:",
        },
        headerr3:{
            word1:"Yönetilen IT Hizmetleri",
            word2:"Bakım ve Destek Hizmetleri",
            word3:"Yazılım Geliştirme",
            word4:"Proje Yönetim Hizmetleri",
        }
      },
      aboutUs:{
        header:"İNFE BİLİŞİM Hakkında",
        header1:"Kimiz?",
        header2:"Vizyonumuz:",
        header3:"Misyonumuz:",
        paragraph1:"İnfe Bilişim , 2022 tarihinde kurulmuş bir bilgi teknolojileri firmasıdır.Sektördeki 16 senelik uzmanlığımız ve deneyimlerimizle, müşterilerimize en iyi hizmeti sunma hedefiyle yola çıktık. Müşteri memnuniyetini ve kalite standartlarını ön planda tutarak, geniş bir müşteri portföyüne hizmet veriyoruz.",
        paragraph2:"İnfe Bilişim olarak vizyonumuz,teknolojinin gücünü kullanarak müşterilerimizin iş süreçlerini optimize etmelerine ve rekabet avantajı elde etmelerine yardımcı olmaktır.",
        paragraph3:"Misyonumuz müşterilerimize en son teknolojileri sunarak, iş süreçlerini daha etkili, güvenli ve verimli hale getirmelerine katkıda bulunmaktır.",
        foot:"Nasıl Yardımcı Olabiliriz?",
      },
      partners:{
        header:"Çözüm Ortaklarımız"
      },
      contactUs:{
        header:"İletişim",
        header1:"Adres:",
        header2:"E-posta:",
        header3:"Telefon:"
      }
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tr",
  });

export default i18n;
