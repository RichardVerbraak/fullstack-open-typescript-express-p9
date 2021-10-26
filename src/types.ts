export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy',
}

export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export type nonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>[];

// the question mark indicates that the field is optional
export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string;
}

export interface newDiaryEntry {
  date: string,
  weather: Weather,
  visibility: Visibility,
  comment?: string
}