export type Data = {
  icon: string;
  title: string;
  price: string;
  percentage_change: string;
  tvl: string;
  popular_pairings: string[];
};

export const data: Data[] = [
  {
    icon: "bitcoin",
    title: "Bitcoin [BTC]",
    price: "$31,812.80",
    percentage_change: "+10%",
    tvl: "$60,000",
    popular_pairings: ["solana", "etehreum", "binance"],
  },
  {
    icon: "solana",
    title: "Solana [SOL]",
    price: "$32.83",
    percentage_change: "-12.32%",
    tvl: "$60,000",
    popular_pairings: ["bitcoin", "ethereum", "binance"],
  },
  {
    icon: "ethereum",
    title: "Ethereum [ETH]",
    price: "$1,466.45",
    percentage_change: "-11.93%",
    tvl: "$60,000",
    popular_pairings: ["solana", "bitcoin", "binance"],
  },
  {
    icon: "binance",
    title: "Binance USD [BUSD]",
    price: "$1.00",
    percentage_change: "+0.26%",
    tvl: "$60,000",
    popular_pairings: ["solana", "ethereum", "binance"],
  },
  {
    icon: "shiba",
    title: "Shiba Inu [SHIB]",
    price: "$0.00000001948",
    percentage_change: "-8.1%",
    tvl: "$60,000",
    popular_pairings: ["solana", "ethereum", "binance"],
  },
];
