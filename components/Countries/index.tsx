import React, { useState, useEffect } from "react";
import { SimpleGrid, Button, ScrollArea, Tooltip } from "@mantine/core";
import "./countries.css";

type Country = {
  continent: string;
  name: string;
};

type Props = {
  countries: Country[];
  region: string;
};

const Countries = ({ countries, region }: Props) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [regionCountries, setRegionCountries] = useState<Country[]>([]);

  useEffect(() => {
    setRegionCountries(
      countries.filter(({ continent }) => continent === region)
    );
  }, [region]);
  const toggleCountry = (cName: string) => {
    if (!isSelected(cName)) {
      setSelectedCountries((prevSelected) => [...prevSelected, cName]);
    } else {
      setSelectedCountries(selectedCountries.filter((c) => c !== cName));
    }
  };

  const isSelected = (cName: string) =>
    selectedCountries.find((country) => country === cName);
  return (
    <div className="scrollable-container">
      <ScrollArea style={{ height: "100%" }}>
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 900, cols: 4, spacing: "md" },
            { maxWidth: 755, cols: 3, spacing: "sm" },
            { maxWidth: 600, cols: 2, spacing: "sm" },
          ]}
        >
          {regionCountries.map((country, idx) => (
            <div key={idx}>
              <Tooltip label={country.name} withArrow>
                <Button
                  variant="subtle"
                  color={isSelected(country.name) ? "pink" : "dark"}
                  fullWidth={true}
                  onClick={() => toggleCountry(country.name)}
                  className={"country"}
                >
                  {country.name}
                </Button>
              </Tooltip>
            </div>
          ))}
        </SimpleGrid>
      </ScrollArea>
    </div>
  );
};

export default Countries;
