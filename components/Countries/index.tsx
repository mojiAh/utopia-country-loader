import React, { useState, useEffect } from 'react';
import { Grid, Button, ScrollArea } from '@mantine/core';

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
    <ScrollArea style={{ height: '50%' }}>
      <Grid justify={'start'}>
        {regionCountries.map((country, idx) => (
          <Grid.Col key={idx} lg={3} md={2}>
            <Button
              variant="subtle"
              color={isSelected(country.name) ? 'pink' : 'dark'}
              size="md"
              fullWidth={true}
              onClick={() => toggleCountry(country.name)}
            >
              {country.name}
            </Button>
          </Grid.Col>
        ))}
      </Grid>
    </ScrollArea>
  );
};

export default Countries;
