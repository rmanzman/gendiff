import _ from 'lodash';
import { readFileSync } from 'fs';
import { cwd } from 'process';
import path from 'path';
import format from './formatters/index.js';
import buildTree from './buildTree.js';
import parseData from './parsers.js';

const getExtension = (filepath) => _.trim(path.extname(filepath), '.');

const readFile = (filepath) => {
  const fullPath = path.resolve(cwd(), filepath);
  const data = readFileSync(fullPath, 'utf-8');
  return parseData(data, getExtension(filepath));
};

export default (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const tree = buildTree(data1, data2);
  return format(tree, formatName);
};
