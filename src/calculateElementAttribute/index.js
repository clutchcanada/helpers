/* eslint-env browser */

function calculateElementAttr(id, attribute = 'offsetHeight') {
  if (!document.getElementById(id)) {
    window.requestAnimationFrame(() => calculateElementAttr(id, attribute));
    return undefined;
  } else {
    return document.getElementById(id)[attribute];
  }
}

export default calculateElementAttr;
