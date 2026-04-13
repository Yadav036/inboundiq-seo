export const addCommas = (value: string) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const copyToClipboard = (v: string | undefined): void => {
  if (!v) return;
  navigator.clipboard?.writeText(v);
};
