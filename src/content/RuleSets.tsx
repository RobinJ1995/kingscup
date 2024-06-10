import Rank from "../type/Rank";
import RuleSet from "../type/RuleSet";
import { CATEGORY, CHICKS, DICKS, DRINKING_BUDDY, FLOOR, GUYS, HEAVEN, KINGSCUP, MAKE_A_RULE, MAKE_A_RULE_TEMPORARY, MATE, ME, NEVER_HAVE_I_EVER, NO_NAMES, QUIZMASTER, RHYME, SILENCE, SLAP, SNAKE_EYES, SOCIAL, THUMBMASTER, VIKING, WATERFALL, WHORES, YOU } from "./Rules";

export const A : RuleSet = {
    [Rank.ACE]: WATERFALL,
    [Rank.TWO]: YOU,
    [Rank.THREE]: ME,
    [Rank.FOUR]: WHORES,
    [Rank.FIVE]: SLAP,
    [Rank.SIX]: DICKS,
    [Rank.SEVEN]: THUMBMASTER,
    [Rank.EIGHT]: CATEGORY,
    [Rank.NINE]: RHYME,
    [Rank.TEN]: SOCIAL,
    [Rank.JACK]: MAKE_A_RULE,
    [Rank.QUEEN]: QUIZMASTER,
    [Rank.KING]: KINGSCUP,
    [Rank.JOKER]: null
};
export const B : RuleSet = {
    [Rank.ACE]: WATERFALL,
    [Rank.TWO]: YOU,
    [Rank.THREE]: ME,
    [Rank.FOUR]: FLOOR,
    [Rank.FIVE]: GUYS,
    [Rank.SIX]: CHICKS,
    [Rank.SEVEN]: HEAVEN,
    [Rank.EIGHT]: MATE,
    [Rank.NINE]: SNAKE_EYES,
    [Rank.TEN]: SOCIAL,
    [Rank.JACK]: MAKE_A_RULE,
    [Rank.QUEEN]: QUIZMASTER,
    [Rank.KING]: KINGSCUP,
    [Rank.JOKER]: null
};
export const C : RuleSet = {
    [Rank.ACE]: WATERFALL,
    [Rank.TWO]: YOU,
    [Rank.THREE]: ME,
    [Rank.FOUR]: FLOOR,
    [Rank.FIVE]: SLAP,
    [Rank.SIX]: NO_NAMES,
    [Rank.SEVEN]: HEAVEN,
    [Rank.EIGHT]: MATE,
    [Rank.NINE]: NEVER_HAVE_I_EVER,
    [Rank.TEN]: SOCIAL,
    [Rank.JACK]: MAKE_A_RULE_TEMPORARY,
    [Rank.QUEEN]: QUIZMASTER,
    [Rank.KING]: KINGSCUP,
    [Rank.JOKER]: VIKING
};

export default {
    A,
    B,
    C
};