// eslint-disable-next-line consistent-return
function calculateElementAttr(id, attribute = 'offsetHeight') {
  if (!document.getElementById(id)) {
    window.requestAnimationFrame(() => calculateElementAttr(id, attribute));
  } else {
    return document.getElementById(id)[attribute];
  }
}

export default calculateElementAttr;
