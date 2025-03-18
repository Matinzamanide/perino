import GridLayout from "../grid-layout/grid-layout";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#FEF2F5] to-[#FFDDE6]">
        <div className="w-[80%] mx-auto pt-20 lg:flex lg:items-center">
          <div className="">
            <h1 className="text-6xl text-pink-700">پرینو</h1>
            <h2 className="text-xl font-semibold my-7">
              دوستته، مشاورته، مراقبته{" "}
            </h2>
            <p>
              ایمپو کنارته تا بتونی چرخه قاعدگی، زمان تخمک‌گذاری و دوره بارداریت
              رو با آرامش دنبال کنی
            </p>
          </div>
          <div className="">
            <img
              src="https://landing.impo.app/_next/image?url=%2Fassets%2Fimages%2FheadingMain.webp&w=750&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
      
      <GridLayout />
    </>
  );
};

export default Home;
