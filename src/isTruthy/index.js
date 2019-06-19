import { complement, not } from 'ramda';

const isTrue = complement(not);

export default isTrue;
