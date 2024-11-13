import data from '../Data.json';

export const processDataForTable1 = () => {
  const processedData: { year: string, maxCrop: string, minCrop: string }[] = [];
  const yearMap: { [key: string]: { [key: string]: number } } = {};

  data.forEach((entry: any) => {
    const year = entry["Year"].match(/\d+/g)[0];
    const crop = entry["Crop Name"];
    const production = entry["Crop Production (UOM:t(Tonnes))"] || 0;

    if (!yearMap[year]) {
      yearMap[year] = {};
    }
    yearMap[year][crop] = production;
  });

  for (const year in yearMap) {
    const crops = yearMap[year];
    const cropEntries = Object.entries(crops);
    const maxCrop = cropEntries.reduce((max, curr) => curr[1] > max[1] ? curr : max)[0];
    const minCrop = cropEntries.reduce((min, curr) => curr[1] < min[1] ? curr : min)[0];

    processedData.push({
      year,
      maxCrop,
      minCrop,
    });
  }

  return processedData;
};

export const processDataForTable2 = () => {
  const cropData: { [key: string]: { totalYield: number, totalArea: number, count: number } } = {};

  data.forEach((entry: any) => {
    const crop = entry["Crop Name"];
    const yieldValue = entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0;
    const area = entry["Area Under Cultivation (UOM:Ha(Hectares))"] || 0;

    if (!cropData[crop]) {
      cropData[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    }

    cropData[crop].totalYield += yieldValue;
    cropData[crop].totalArea += area;
    cropData[crop].count += 1;
  });

  const processedData: { crop: string, avgYield: number, avgArea: number }[] = [];

  for (const crop in cropData) {
    const { totalYield, totalArea, count } = cropData[crop];
    processedData.push({
      crop,
      avgYield: parseFloat((totalYield / count).toFixed(3)),
      avgArea: parseFloat((totalArea / count).toFixed(3)),
    });
  }

  return processedData;
};
