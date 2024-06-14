import React, { useState } from 'react';
import './App.css';
import PlayingCard, { Size } from './component/PlayingCard';
import Rank from './type/Rank';
import Suit, { randomSuit } from './type/Suit';
import { Card, Container, FormControl, Grid, InputLabel, NativeSelect } from '@mui/material';
import RuleSets from './content/RuleSets';
import Rule from './type/Rule';
import RuleSet from './type/RuleSet';

function App() {
  const queryParams = new URLSearchParams(window.location.search);

  const getRulesetById = (id: string): RuleSet => RuleSets?.[id];

  const [rulesetId, setRulesetId] = useState<string>(queryParams.get('ruleset') ?? 'A');
  const ruleset = getRulesetById(rulesetId);

  return (
    <Container className="playing-card-container">
      <Grid container>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="select-ruleset">
              Rule Set
            </InputLabel>
            <NativeSelect
              defaultValue={rulesetId}
              inputProps={{
                name: 'select-ruleset'
              }}
              onChange={e => setRulesetId(e.target.value)}>
              {['A', 'B', 'C'].map(rulesetName => <option value={rulesetName}>Rule Set {rulesetName}</option>)}
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={1} className="playing-card-grid">
        {[Rank.ACE, Rank.TWO, Rank.THREE, Rank.FOUR, Rank.FIVE, Rank.SIX, Rank.SEVEN, Rank.EIGHT, Rank.NINE, Rank.TEN, Rank.JACK, Rank.QUEEN, Rank.KING, Rank.JOKER].map(rank => {
          const rule: Rule | null = ruleset[rank];

          if (!rule) {
            return '';
          }

          return (<Grid item xs={6} md={4} className="playing-card-grid-item">
            <Card className="playing-card-card">
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
