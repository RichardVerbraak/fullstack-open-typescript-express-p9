////// Services being the logic that will happen when a route gets hit

import { diaryEntries } from '../../data/diaries';

import { DiaryEntry, nonSensitiveDiaryEntry, newDiaryEntry } from '../types';


// Pick is a utility type where you can hand-select the types you want, in this case we want everything but 'comment'
// example const getEntries = (): Pick<DiaryEntry, 'id' | 'visibility' | 'date' | 'weather'>[]

// Omit can also be used to exclude the comment like Omit<DiaryEntry, 'comment'>[] and saved as a type

// Gets all diaries
const getEntries = (): DiaryEntry[] => {
  return diaryEntries;
};

// TypeScript only checks if the required fields are there or not
// It's unaware in the sense that the 'comment' field should be excluded, TS doesn't modify the data, it only checks it
// Hence you have to exclude the field yourself in order to avoid leaking the sensitive data
const getNonSensitiveEntries = (): nonSensitiveDiaryEntry[] => {
  return diaryEntries.map(({id, visibility, date, weather}) => {
    return {
      id,
      visibility,
      date,
      weather
    };
  });
};

// undefined has to be specified here in case the find method doesn't find the diary entry (find returns undefined if not found)
const findEntryById = (id: number): DiaryEntry | undefined => {
  const foundEntry = diaryEntries.find((diary) => {
    return diary.id === id;
  });

  return foundEntry;
};

// Math.max takes in numbers as an argument and not an array hence the spread syntax
const addDiary = (entry: newDiaryEntry) : DiaryEntry => {
  const newEntry = {
    id: Math.max(...diaryEntries.map((diary) => {
      return diary.id;
    })) + 1,
    ...entry    
  };

  diaryEntries.push(newEntry);

  return newEntry;
};

export {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findEntryById
};