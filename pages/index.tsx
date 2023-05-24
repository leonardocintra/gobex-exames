import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { IProduct } from "../interfaces/IProduct";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Worklabweb from "../components/Worklabweb";

const datas: IProduct[] = [
  {
    title: "Atendimento",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/atendimento.jpeg",
  },
  {
    title: "Para CNH!",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/cnh.jpeg",
  },
  {
    title: "Coceira",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/coceira.jpeg",
  },
  {
    title: "Dengue",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/dengue.jpeg",
  },
  {
    title: "Dengue",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/hcg.jpeg",
  },
  {
    title: "Dengue",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/hormonios.jpeg",
  },
  {
    title: "Dengue",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/papa.jpeg",
  },
  {
    title: "Dengue",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/pernas.jpeg",
  },
  {
    title: "Dengue",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/preco.jpeg",
  },
  {
    title: "Dengue",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/saude.jpeg",
  },
  {
    title: "Dengue",
    description: "Exame toxicologico para CNH. RAPIDO! FACIL! CONFIAVEL!",
    imageUrl: "/img/tireoide.jpeg",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gobex Exames</title>

        <meta name="description" content="Gobex exames" />
        <meta name="author" content="Leonardo Nascimento Cintra"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-200 rounded overflow-hidden">
                <div className="w-24 h-full bg-cyan-300"></div>
              </div>
              <div className="mt-2 flex lg:flex-row flex-col justify-center">
                <div className="p-5">
                  <Image
                    src={"/img/gobex.png"}
                    width={800}
                    height={500}
                    alt="gobex"
                  />
                </div>
                <div className="leading-relaxed sm:text-3xl flex justify-center items-center p-4 text-justify">
                  Gobex é um laboratório de análises clínicas e citológicas que
                  emprega as mais modernas técnicas na busca por resultados
                  precisos. Isso facilita muito na indicação do tratamento
                  médico mais adequado a cada situação específica do paciente.
                </div>
              </div>
            </div>
          </div>
        </section>
        <Worklabweb />
        <hr className="my-6" />
        <div id="divExames">
          <Products products={datas} />
        </div>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <Image
              src={"/img/gobex.png"}
              width={400}
              height={250}
              alt="gobex"
            />

            <div id="divContato" className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-3">
                Fale conosco
              </h1>
              <div className="mb-8 leading-relaxed text-2xl">
                Fone: <b> (35) 99104-0975</b>
                <br />
                Endereço: <b> Av. São Vicente de Paulo, 230</b>
                <br />
                Bairro: <b> Centro</b>
                <br />
                Cidade: <b> Cássia - MG</b>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
