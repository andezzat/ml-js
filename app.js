const fs = require('fs');


const parseFile = (file, split, metricNames) => fs.readFileSync(file).toString()
  .split('\n')
  .map(split)
  .filter(item => !item.some(m => !m || m === '?'))
  .map(item => item.reduce((obj, metric, i) => ({ ...obj, [metricNames[i]]: metric }), {}));



const splitFn = item => {
  const tabSplit = item.split('\t');
  return [...tabSplit[0].split(' ').filter(i => !!i), tabSplit[1]];
}

const data = parseFile('autoMpg.tsv', splitFn, [
  'mpg',
  'cylinders',
  'displacement',
  'horsepower',
  'weight',
  'acceleration',
  'model year',
  'origin',
  'car name',
]);



x = 1;
