import * as R from "ramda";
import removeNonNumbers from "../removeNonNumbers";

const addCommasToNumber = (value = '') => value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

export default R.pipe(R.toString, removeNonNumbers, addCommasToNumber);