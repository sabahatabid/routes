"use client"
//import { Countries} from "@/app/fonts/types";
//import Link from "next/link";
import { useParams } from "next/navigation";

export default function CountryName() {
  const params = useParams(); // Get the dynamic route parameters
  const country_name = params?.["country-name"]; // Access the route segment
  
  const countries = {
    pakistan: {
      name: "Pakistan",
      population: 251269164,
      capital: "Islamabad",
    },
    china: {
      name: "China",
      population: 1419321278,
      capital: "Beijing",
    },
    iran: {
      name: "Iran",
      population: 91780985,
      capital: "Tehran",
    },
    turkey: {
      name: "Turkey",
      population: 87527081,
      capital: "Ankara",
    },
    india: {
      name: "India",
      population: 1450935791,
      capital: "New Delhi",
    },
  };

  // Ensure the country_name is lowercase and defined before accessing the countries object
  const countryKey = country_name?.toString().toLowerCase();

  // Retrieve the country details using the countryKey, or return a default value if not found
  const country = countryKey && countries[countryKey as keyof typeof countries];

  const countryDetails = country
    ? {
      name: country.name,
      population: country.population,
      capital: country.capital,
    }
  : {
      name: "Country not found",
      population: "Country not found",
      capital: "Country not found",
    };

return (
  <div style={{backgroundColor:"lightskyblue"}}>
    <h1>
      <b>Country Details</b>
    </h1>
    <p>Country name: {countryDetails.name}</p>
    <p>
      Population: <span style={{ color: "red" }}>{countryDetails.population}</span>
    </p>
    <p>
      Capital city: <span style={{ color: "red" }}>{countryDetails.capital}</span>
    </p>
  </div>
);
}
