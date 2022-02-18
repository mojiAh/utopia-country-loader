import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Countries from '../Countries';
import Regions from '../Regions';
import './body.css';

const API = 'https://cdn.utopiamusic.com/code-test/frontend/countries.json';

type Country = {
  continent: string;
  name: string;
};

const Body = () => {
  const [regions, setRegions] = useState<string[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [countries, setCountries] = useState<Country[]>([]);
  const matches = useMediaQuery('(min-width: 900px)');

  useEffect(() => {
    axios
      .get(API)
      .then(({ data }) => {
        const continents: string[] = data.map((c: Country) => c.continent);
        setRegions([...new Set<string>(continents)]);
        setCountries(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={'body'}>
      <div className={'body-title'}>
        <Title align={'center'} order={matches ? 2 : 4}>
          {'Select region and click on the countries you want to highlight'}
        </Title>
      </div>
      <div className={`body-rest ${!matches ? 'small' : null}`}>
        <Regions {...{ regions, selectedRegion, setSelectedRegion }} />
        <Countries {...{ countries, region: selectedRegion }} />
      </div>
    </div>
  );
};

export default Body;
