import React from 'react';
import './App.css';
import PlayingCard, { Size } from './component/PlayingCard';
import Rank from './type/Rank';
import Suit, { randomSuit } from './type/Suit';
import { Card, Container, Grid } from '@mui/material';
import RuleSets from './content/RuleSets';
import Rule from './type/Rule';

function App() {
  const ruleset = RuleSets.A;

  return (
    <Container className="playing-card-container">
      <Grid container spacing={2} className="playing-card-grid">
        {[Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING, Rank.JOKER].map(rank => {
          const rule: Rule | null = ruleset[rank];

          if (!rule) {
            return '';
          }

          return (<Grid item xs={6} md={4}>
            <Card className="playing-card-grid-item">
              <PlayingCard rank={rank} suit={randomSuit()} size={Size.NORMAL} />
              <div className="card-rule">
                <h2>{ruleset[rank]?.name}</h2>
                <p>{ruleset[rank]?.description}</p>
              </div>
            </Card>
          </Grid>);
        })}
      </Grid>
    </Container>
  );
}

export default App;
