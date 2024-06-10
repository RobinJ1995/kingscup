enum Suit {
    SPADE = '♠',
    HEART = '♥',
    DIAMOND = '♦',
    CLUB = '♣',
}

export const isRed = (suit: Suit) => {
    return suit === Suit.HEART || suit === Suit.DIAMOND;
};
export const isBlack = (suit: Suit) => {
    return suit === Suit.SPADE || suit === Suit.CLUB;
}
export const randomSuit = () => {
    const suits = [Suit.SPADE, Suit.HEART, Suit.DIAMOND, Suit.CLUB];
    return suits[Math.floor(Math.random() * suits.length)];
}

export default Suit;