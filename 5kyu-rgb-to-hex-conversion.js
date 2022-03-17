function rgb(r, g, b) {
  const hexTable = "0123456789ABCDEF".split("");
  let hex = "";
  [r, g, b].forEach((color) => {
    color = Math.min(Math.max(parseInt(color), 0), 255);
    const posValue = color / hexTable.length;
    hex += hexTable[Math.floor(posValue)];
    hex += hexTable[(posValue - Math.floor(posValue)) * hexTable.length];
  });
  return hex;
}
