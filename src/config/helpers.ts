const formatId = (id: number) => {
  return "#" + padLeadingZeros(id, 3);
};

const padLeadingZeros = (id: number, pad: number) => {
  return String(id).padStart(pad, "0");
};

export { formatId, padLeadingZeros };
