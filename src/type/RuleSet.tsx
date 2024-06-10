import Rank from "./Rank";
import Rule from "./Rule";

export default interface RuleSet {
    [Rank.ACE]: Rule,
    [Rank.TWO]: Rule,
    [Rank.THREE]: Rule,
    [Rank.FOUR]: Rule,
    [Rank.FIVE]: Rule,
    [Rank.SIX]: Rule,
    [Rank.SEVEN]: Rule,
    [Rank.EIGHT]: Rule,
    [Rank.NINE]: Rule,
    [Rank.TEN]: Rule,
    [Rank.JACK]: Rule,
    [Rank.QUEEN]: Rule,
    [Rank.KING]: Rule,
    [Rank.JOKER]: Rule | null
};