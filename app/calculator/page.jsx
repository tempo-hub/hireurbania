// app/calculator/page.jsx

import UrbaniaFareCalculatorPage from "../../components/UrbaniaFareCalculatorPage";

export const metadata = {
  title: "Force Urbania Fare Calculator | Rental Price Per KM",
  description:
    "Calculate Force Urbania rental fares for 9, 12 and 16 seater vehicles. Check estimated per km rates, driver allowance and trip charges.",
  alternates: {
    canonical: "https://hireurbaniatempotraveller.com/calculator",
  },
  openGraph: {
    title: "Force Urbania Fare Calculator",
    description:
      "Calculate estimated Force Urbania rental prices for your next group journey.",
    url: "https://hireurbaniatempotraveller.com/calculator",
    type: "website",
  },
};

export default function Page() {
  return <UrbaniaFareCalculatorPage />;
}