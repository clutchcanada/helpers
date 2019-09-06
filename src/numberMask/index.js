import * as R from "ramda";
import removeNonNumbers from "../removeNonNumbers";

const addCommasToNumber = (value = '') => value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");


export default R.pipe(removeNonNumbers, addCommasToNumber);