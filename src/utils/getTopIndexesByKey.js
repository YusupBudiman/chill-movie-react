const getTopIndexesByKey = (data, key, topN = 3) => {
  return data
    .map((item, index) => ({
      index,
      value: typeof item[key] === "number" ? item[key] : -Infinity,
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, topN)
    .map((item) => item.index);
};

export default getTopIndexesByKey;
