import activity from "../assets/activity.svg";
import { data } from "../configs/data";
import Card from "./Card";

const Home = () => {
  return (
    <div className="bg-[#14172b] p-10 body-font font-Tomorrow h-screen w-screen ">
      <div className="flex items-center mb-10 mt-20">
        <img className="h-8 p-2" src={activity} />
        <p className="text-white">Trending Assets</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-9 ">
        {data.map((el, i) => (
          <Card key={i} el={el} />
        ))}
      </div>
    </div>
  );
};

export default Home;
