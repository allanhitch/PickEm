import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import ScoreCard from './ScoreCard';

export default function ScoreCardList() {
  const theme = useTheme();

  return (
    <div>
        <ScoreCard/>
        <ScoreCard/>
        <ScoreCard/>
    </div>
  );
}
