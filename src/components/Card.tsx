import { Data } from "../configs/data";
import binance from "../assets/binance.svg";
import bitcoin from "../assets/bitcoin.svg";
import ethereum from "../assets/ethereum.svg";
import shiba from "../assets/shiba.svg";
import solana from "../assets/solana.svg";
const Card = (props: { el: Data }) => {
  const { icon, title, price, percentage_change, tvl, popular_pairings } =
    props.el;

  return (
    <div className="w-fit relative">
      <div className=" absolute  rounded-full bg-[#14172b] left-[27%] p-5">
        <div className="bg-[#1f212f] p-5 rounded-full">
          <img
            className="h-14"
            src={
              icon == "solana"
                ? solana
                : icon == "bitcoin"
                ? bitcoin
                : icon == "shiba"
                ? shiba
                : icon == "binance"
                ? binance
                : ethereum
            }
          />
        </div>
      </div>
      <div className=" text-white p-2 mt-14 pt-24 w-fit rounded-2xl bg-[#1b1f34]">
        <p className="text-sm text-[#606794] text-center">{title}</p>
        <div className="flex bg-[#14172b] px-5 py-2 w-60 rounded-full mt-4 mb-2">
          <p className="m-auto">{price}</p>

          <p
            className={
              percentage_change[0] == "+" ? "text-[#02e897]" : "text-[#cc4145]"
            }
          >
            {percentage_change}
          </p>
        </div>
        <p className="text-sm text-[#606794] text-center ">Price</p>
        <p className="bg-[#14172b] py-2 text-center rounded-full mt-4 mb-2">
          {tvl}
        </p>
        <p className="text-sm text-[#606794] text-center">TVL</p>
        <div className="flex justify-between w-fit space-x-4 bg-[#14172b] p-3 m-auto rounded-full mt-4 mb-2">
          <img
            className="h-5"
            src={
              popular_pairings[0] == "solana"
                ? solana
                : popular_pairings[0] == "bitcoin"
                ? bitcoin
                : popular_pairings[0] == "shiba"
                ? shiba
                : popular_pairings[0] == "binance"
                ? binance
                : ethereum
            }
          />
          <img
            className="h-5"
            src={
              popular_pairings[1] == "solana"
                ? solana
                : popular_pairings[1] == "bitcoin"
                ? bitcoin
                : popular_pairings[1] == "shiba"
                ? shiba
                : popular_pairings[1] == "binance"
                ? binance
                : ethereum
            }
          />
          <img
            className="h-5"
            src={
              popular_pairings[2] == "solana"
                ? solana
                : popular_pairings[2] == "bitcoin"
                ? bitcoin
                : popular_pairings[2] == "shiba"
                ? shiba
                : popular_pairings[2] == "binance"
                ? binance
                : ethereum
            }
          />
        </div>
        <p className="text-sm text-[#606794] text-center">Popular pairs</p>
      </div>
    </div>
  );
};

export default Card;
