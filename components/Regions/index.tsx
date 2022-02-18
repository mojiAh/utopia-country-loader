import React from 'react';
import { Grid, Button } from '@mantine/core';

type Props = {
  regions: string[];
  selectedRegion: string;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
};

const Regions = ({
  regions = [],
  selectedRegion,
  setSelectedRegion,
}: Props) => (
  <Grid
    justify={'center'}
    style={{ marginTop: 35, marginBottom: 35 }}
    gutter={40}
  >
    {regions.map((region, idx) => (
      <Grid.Col key={idx} span={4}>
        <Grid justify={'center'}>
          <Button
            variant="outline"
            color={region === selectedRegion ? 'pink' : 'dark'}
            size="lg"
            onClick={() => setSelectedRegion(region)}
          >
            {region}
          </Button>
        </Grid>
      </Grid.Col>
    ))}
  </Grid>
);

export default Regions;
