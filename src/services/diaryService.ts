import { diaries } from '../../data/diaries';

import { DiaryEntry } from '../types';

// Services being the logic that will happen when a route gets hit

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};