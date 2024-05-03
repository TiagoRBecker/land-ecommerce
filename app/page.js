import Link from "next/link";
import Carousel from "@/components/carrousel"
export default function Home() {
  const mosaico = [
    { id: 1, name: "mosaico", img: "/galeria/mosaico_1.png" },
    { id: 2, name: "mosaico", img: "/galeria/mosaico_2.jpg" },
    { id: 3, name: "mosaico", img: "/galeria/mosaico_3.png" },
    { id: 4, name: "mosaico", img: "/galeria/mosaico_4.jpg" },
    { id: 5, name: "mosaico", img: "/galeria/mosaico_5.jpg" },
    { id: 6, name: "mosaico", img: "/galeria/mosaico_6.png" },
    { id: 7, name: "mosaico", img: "/galeria/mosaico_7.jpg" },
    { id: 8, name: "mosaico", img: "/galeria/mosaico_8.jpg" },
    { id: 9, name: "mosaico", img: "/galeria/mosaico_9.jpg" },
  ];
  const icons = [
    "/icons/icon_1.jpg",
    "/icons/icon_2.png",
    "/icons/icon_3.png",
    "/icons/icon_4.png",
  ];
  return (
    <main>
      <section className="w-full h-full bg-[#d3ebe2] ">
        <div className="container mx-auto min-h-screen flex-col flex     ">
          <div className="w-full flex items-center">
            <div className="w-44 h-44">
              <img
                src="/logo_med.png"
                alt="Logo"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="">
              <h1 className="font-bold text-[#00003e]  text-[2rem]">
                Guedesbampi
              </h1>
              <h2 className="text-[#00003e] text-[1.5rem] ">Publicações</h2>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2 items-center ">
            <div className="w-full md:w-[33%] ">
              <p className="text-[1.6rem] font-black text-[#00003e] text-center ">
                Proteja sua arte, proteja sua prática:
                <span className="text-[#b98e0b]"> Harmonize </span>
                com confiança, assine com segurança!
              </p>
            </div>
            <div className="w-[33%]">
              <img
                src="/banner_1_advs.png"
                alt="Perfil"
                className="w-full h-full object-fill rounded-full"
              />
            </div>
            <div className="w-full md:w-[33%]">
              <p className="text-[1.6rem] font-black text-[#00003e] text-center ">
                <span className="text-[#b98e0b]">
                  Documentos 
                </span>
                {" "}para harmonização 
                produzido por profissionais da saúde e juristas
              </p>
            </div>
          </div>


          <div className="w-full h-full flex flex-col md:flex md:flex-row items-center justify-center gap-10 mt-16">
            <Link
              href={"https://www.documentosparaharmonizacao.com.br/"}
              target="_blank"
            >
              <button className="bg-[#3b8e7d] border border-[#d3ebe2] w-[310px] py-5 rounded-full text-white flex items-center gap-1 justify-center transition ease-in-out delay-150 ">
                ACESSE O E-COMMERCE
                <img src="/cart.svg" className="w-10 h-10 object-fill" />
              </button>
            </Link>
            <button className="bg-[#3b8e7d] border border-[#d3ebe2] w-[310px] py-5 rounded-full text-white flex items-center gap-3 justify-center transition ease-in-out delay-150 ">
              CONSULTE PELO WHATSAPP
              <img src="/w.svg" className="w-10 h-10 object-fill" />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen flex items-center justify-center bg-[#3b8e7d]  ">
        <div className="container mx-auto grid-cols-1 md:grid md:grid-cols-2 gap-4  ">
          <div className="w-full ">
            <div className="flex gap-3 items-center">
              {icons.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={url}
                  className="rounded-full w-14 h-14 object-fill"
                />
              ))}
            </div>
            <div className=" px-2">
              <h1 className="text-[1.8rem] my-8 font-bold text-white">
                EQUIPE AUTORA
              </h1>
              <p className="py-2 text-white  text-lg">
                Somos uma equipe multidisciplinar formada por juristas e
                profissionais da harmonização de diversas áreas. Protegemos a
                prática e a reputação dos profissionais da área através de
                cursos, assessoria e documentos personalizados. Estamos
                presentes em congressos, aulas de pós graudação em harmonização
                facial e nas redes sociais.
              </p>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-white text-lg">
                Dra. Deusa Guedes
              </h1>
              <p className="text-white font-light ">
                Direito médico, empresarial e da saúde, atua na defesa de
                clínicas e centros de estética
              </p>
            </div>
            <div className="">
              <h1 className="font-bold text-white text-lg">
                Dr. Alexandre Bampi
              </h1>
              <p className="text-white font-light pb-8">
                Direito empresarial da saúde e contratual, Advogado,
                Administrador, Mestre e Professor de pós-graduação
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-full grid grid-cols-3 gap-2 ">
              {mosaico.map((url, index) => (
                <div key={index} className="w-full h-[200px] ">
                  <img

                    src={url.img}
                    alt={url.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="py-4 w-full h-full mt-1 flex items-center justify-center  relative">
              <img
                src="/logo.svg"
                alt="Logo"
                className=" w-full h-28 object-fill"
              />
             
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-[#d3ebe2] bg-cover bg-left-top bg-no-repeat ">
        <div className="container mx-auto  h-full  flex flex-col    ">
          <h1 className="text-[2rem] py-4 text-left ">
            DIFERENCIAIS DA DOCUMENTAÇÃO
          </h1>
          <div className="w-full h-full flex flex-col md:flex md:flex-row gap-2 ">
            <div className="w-[50%] h-full flex items-center justify-center   ">
              <div class="w-full h-full  ">
                <img
                  src="/banner.svg"
                  loading="lazy"
                  alt="Imagem"
                  className="w-full h-[450px]  object-fill"
                />
              </div>
            
            </div>
            <div className="w-[50%] h-full flex  flex-col ">
              <div className="flex flex-col gap-2">
                <h1>PRONTUÁRIOS PLANEJADOS PARA ATIVIDADE DE RESULTADO</h1>
                <h2>
                  O{" "}
                  <span className="font-extrabold text-[#00003e] text-lg">
                    principal erro
                  </span>{" "}
                  das Clinicas de Harmonização!
                </h2>
                <p className="text-justify">
                  A responsabilidade civil dos profissionais de saúde em
                  atividades fim é mais abrangente e rigorosa. Na atividade fim
                  ou de resultado, como restou definido pelo Judiciário para
                  cirurgiões plasticos e profissionais de harmonização, estes
                  estão vinculados a entrega deste resultado almejado
                  subjetivamente caso não utilize documentos juricamente
                  adequados a esta realidade. É essencial que a documentação
                  produzida pelo profissional esteja preparada para limitar ,
                  comprovar e definir as limitações impostas pela idiosincrasia
                  individual de cada paciente
                </p>
              </div>

              <div className="flex flex-col gap-2 ">
                <h1>PRONTUÁRIOS ALINHADOS AO PRINCÍPIO DA AUTONOMIA</h1>
                <h2>
                  Uma das{" "}
                  <span className="font-extrabold text-[#00003e] text-lg">
                    principais causas de litigio!
                  </span>{" "}
                </h2>
                <p className="text-justify">
                  O TCLE (termo de consentimento livre e esclarecido),
                  infelizmente, além de utilizar erronamente modelos espelhados
                  em termos de profisionais de atividade meio, normalmente são
                  documentos confusos que não conseguem esclarecer de fato o
                  paciente e tampouco dar a liberdade de escolha, dando margem
                  para alegaçoes de vício de consentimento, uso indevido de
                  imagem e outras discordancias. Os nossos documentos utilizam
                  uma técnica grafica chamada{" "}
                  <span className="font-extrabold text-[#00003e] text-lg">
                    VISUAL LAW OU LEGAL DESIGN
                  </span>{" "}
                  , que permite que o paciente entenda o tratamento proposto
                  visualmente e interaja com o documento.
                </p>
              </div>
            </div>
          </div>


          <div className="w-full flex gap-2 ">
            <div className="w-[50%] h-full flex items-center justify-center ">
            <div class="w-full h-full  ">
                <img
                  src="/banner.svg"
                  loading="lazy"
                  alt="Imagem"
                  className="w-full h-[450px] object-fill"
                />
              </div>
            </div>
            <div className="w-[50%] h-full flex  flex-col ">
              <div className="flex flex-col gap-2">
                <h1>CONTRATOS E TERMOS EDITÁVEIS E PERSONALIZÁVEIS</h1>
                <h2>
                  <span className="font-extrabold text-[#00003e] text-lg">
                    Adapte o conteúdo
                  </span>{" "}
                  para sua prática clinica livremente !
                </h2>
                <p className="text-justify">
                  Você receberá um arquivo editável e personalizavel, devendo
                  apenas incluir sua logomarca e seus dados, além de realizar as
                  alterações que julgar necessária de acordo com sua experiencia
                  e prática profissional. Todos os aspectos de saúde e jurídicos
                  foram desenvolvidos por profissionais renomados e{" "}
                  <strong>estão prontos para uso</strong>, entretanto caso haja
                  discordancia sobre algum elemento juridico ou de saúde no
                  documento, você pode e deve fazer as alterações necessárias
                  com seu advogado ou sua equipe de especialistas para adequar o
                  documento ao seu protoloco ou suas rotinas administrativas.
                </p>
              </div>

              <div className="w-full flex flex-col gap-2 my-4">
                <h1 className="font-extrabold text-[#00003e] text-lg">OUTRAS VANTAGENS</h1>
                <div className="pl-2 w-full ">
                  <ul class="list-disc flex flex-col gap-3">
                    <li className="list-outside text-left">
                      Contratos e termos específicos para cada procedimento
                      projetados para descrever todo plano de tratamento
                      indicado
                    </li>
                    <li>
                      Termos de consentimento (TCLE’s) projetados para
                      harmonização, focado na prevenção das principais causas de
                      demandas judiciais.
                    </li>
                    <li>
                      Ficha de anamnese organizada com ênfase dermatológica,
                      aspectos psicossociais, validação de retornos e outros.
                    </li>
                    <li>
                      Evite problemas com a subjetividade da percepção de
                      resultados por parte do paciente através de documentos
                      compreensíveis e detalhados.
                    </li>
                    <li>
                      Evite problemas com a subjetividade da percepção de
                      resultados por parte do paciente através de documentos
                      compreensíveis e detalhados.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full bg-[#3b8e7d]">
        <div className="container mx-auto  h-full    py-10 flex gap-3">
          <div className="w-[33%]  flex items-center justify-center px-4">
            <h1 className="w-full text-white font-bold text-3xl">
              Documentos disponíveis na plataforma e-commerce
            </h1>
          </div>
          <div className="w-[33%] flex flex-col items-center justify-center gap-3 px-2 bg-[#163459] bg-opacity-25">
            <h1 className="text-white font-bold text-xl py-2">
              CONTRATO + TCLE
            </h1>

            <ul className="list-disc text-white py-2">
              <li className="ml-4">Toxina Botulínica</li>

              <li className="ml-4">Acido Hialurônico</li>

              <li className="ml-4">Endolaser</li>
              <li className="ml-4">Bioestimulador de Colágeno</li>
              <li className="ml-4">Skinbooster</li>
              <li className="ml-4">Criofrequência</li>
              <li className="ml-4">Depilação (Epilação Laser ou Led)</li>
              <li className="ml-4">Ultrassom herus hifu</li>
              <li className="ml-4">CO2 Fracionado</li>
              <li className="ml-4">Ultrassom</li>
              <li className="ml-4">Microfocado</li>

              <li className="ml-4">Luz Intensa Pulsada</li>
              <li className="ml-4">Microagulhamento</li>
              <li className="ml-4">Peeling</li>
              <li className="ml-4">Químico</li>
              <li className="ml-4">Fios de PDO</li>
              <li className="ml-4">Laser Lavieen</li>
              <li className="ml-4">Lipo de Papada Química</li>
              <li className="ml-4">Mesoterapia</li>
              <li className="ml-4">PEIM (Microvasos)</li>
              <li className="ml-4">UP – Glúteo</li>
              <li className="ml-4">Bichectomia</li>
              <li className="ml-4">Lipo de Papada + Skinbooster</li>
              <li className="ml-4">Ultrassom Ultraformer</li>
              <li className="ml-4">Hialuronidase</li>
              <li className="ml-4">Tatuagem Remoção</li>
              <li className="ml-4">Terapia Capilar</li>
              <li className="ml-4">Velashape</li>
            </ul>
          </div>
          <div className="w-[33%] flex flex-col items-center  px-2 gap-3 bg-[#163459] bg-opacity-25">
            <h1 className="text-white font-bold text-xl py-2">
              DOCUMENTOS FUNDAMENTAIS
            </h1>
            <p className="text-white"></p>

            <ul className="list-disc text-white">
              <li className="ml-4">Plano de tratamento</li>
              <li className="ml-4">Anamnese dermatológica para harmonização</li>
              <li className="ml-4">Termo de Conclusão de Tratamento</li>
              <li className="ml-4">Ficha clínica</li>
              <li className="ml-4">Termo de Resultado e Idiossincrasia</li>
              <li className="ml-4">Termo de Intercorrência Prévia</li>
              <li className="ml-4">Termo de Conclusão De Tratamento</li>
              <li className="ml-4">Termo de Desistência De Tratamento</li>
              <li className="ml-4">Termo de Intercorrência Prévia</li>
              <li className="ml-4">
                Termo de Consentimento paciente modelo em Clínica Escola
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[50vh] bg-[#d3ebe2]  ">
        <h1 className="text-3xl text-[#00003e] font-bold uppercase text-center ">Confira o depoimento de nossos clientes!</h1>
        <Carousel/>
      </section>
      <section className="w-full-screen  flex flex-col bg-white   items-center ">
        <h1 className="text-[2rem] font-bold max-w-[900px] text-[#00003e] py-10">
          Garanta sua Tranquilidade: Adquira Documentos de Proteção e Foque no
          seu Crescimento na Harmonização
        </h1>
        <div className="w-[90%] h-full mx-auto grid grid-cols-3">
          <div className="flex items-center justify-center">
            <Link
              href={"https://www.documentosparaharmonizacao.com.br/"}
              target="_blank"
            >
              <button className="bg-[#3b8e7d] w-[310px] py-5 rounded-full text-white flex items-center gap-1 justify-center transition ease-in-out delay-150 hover:bg-blue-800">
                ACESSE O E-COMMERCE
                <img src="/cart.svg" className="w-10 h-10 object-cover" />
              </button>
            </Link>
          </div>
          <div className="w-full h-full">
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-full h-full object-fill"
            />
          </div>
          <div className="flex items-center justify-center">
            <Link
              href={"https://www.documentosparaharmonizacao.com.br/"}
              target="_blank"
            >
              <button className="bg-[#3b8e7d] w-[310px] py-5 rounded-full text-white flex items-center gap-3 justify-center transition ease-in-out delay-150 hover:bg-blue-800">
                CONSULTE PELO WHATSAPP
                <img src="/w.svg" className="w-10 h-10 object-fill" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center bg-[#3b8e7d] justify-center gap-3 py-4 ">
        <div className="flex items-center gap-2 text-white">
          <img
            src="/fb.png"
            alt="Fb"
            className="w-10 h-10 object-fill rounded-full"
          />
          <p>Facebook</p>
        </div>
        <div className="flex items-center gap-2 text-white">
          <img
            src="/inst.png"
            alt="Fb"
            className="w-10 h-10 object-fill rounded-full"
          />
          <p>Instagram</p>
        </div>
        <div className="flex items-center gap-2 text-white">
          <img
            src="/yt.png"
            alt="Fb"
            className="w-10 h-10 object-fill rounded-full"
          />
          <p>Youtube</p>
        </div>
      </section>
    </main>
  );
}
/*
  <div className="w-full flex gap-2">
              <div className="w-[50%] h-[450px]   relative  ">
            
              </div>
              <div className="w-[50%] flex flex-col">
             
              </div>
          
            <div className="flex gap-2">
              <div className="w-full h-[450px]  relative">
               
              </div>
              <div className="flex flex-col gap-2 my-14">
                <h1>CONTRATOS E TERMOS EDITÁVEIS E PERSONALIZÁVEIS</h1>
                <h2>
                  <span className="font-extrabold text-[#00003e] text-lg">
                    Adapte o conteúdo{" "}
                  </span>
                  para sua prática clinica livremente !{" "}
                </h2>
                <p>
                  Você receberá um arquivo editável e personalizavel, devendo
                  apenas incluir sua logomarca e seus dados, além de realizar as
                  alterações que julgar necessária de acordo com sua experiencia
                  e prática profissional. Todos os aspectos de saúde e jurídicos
                  foram desenvolvidos por profissionais renomados e estão
                  prontos para uso, entretanto caso haja discordancia sobre
                  algum elemento juridico ou de saúde no documento, você pode e
                  deve fazer as alterações necessárias com seu advogado ou sua
                  equipe de especialistas para adequar o documento ao seu
                  protoloco ou suas rotinas administrativas.
                </p>
              </div>
            </div>
           </div>
           */
