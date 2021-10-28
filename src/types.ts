// Enums are usually used when there is a set of predetermined values which are not expected to change in the future
// Or tight values like weekdays, months, directions
export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
}
// the question mark indicates that the field is optional
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type newDiaryEntry = Omit<DiaryEntry, 'id'>;

export type nonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;