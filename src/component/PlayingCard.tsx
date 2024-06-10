import React from 'react';
import Suit, { isRed } from '../type/Suit';
import Rank from '../type/Rank';

export enum Size {
  TEXT = 'size-text',
  NORMAL = 'size-normal'
};

const PlayingCard = ({
  suit, rank, size = Size.TEXT
} : {
  suit: Suit, rank: Rank, size?: Size
}) => {
  const colour = isRed(suit) ? 'red' : 'black';

  return (
    <div
      className={`playing-card ${colour} ${size}`}
      title={`Suit: ${suit}\nRank: ${rank}`}>
      {rank === Rank.JOKER ? '' : suit}{rank}
    </div>
  );
}

export default PlayingCard;
