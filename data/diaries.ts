import { DiaryEntry } from "../src/types";
import { toNewDiaryEntry } from '../src/utils';


const data = [
    {
        "id": 1,
        "date": "2017-01-01",
        "weather": "rainy",
        "visibility": "poor",
        "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
        "id": 2,
        "date": "2017-04-01",
        "weather": "sunny",
        "visibility": "good",
        "comment": "Everything went better than expected, I'm learning much"
    },
    {
        "id": 3,
        "date": "2017-04-15",
        "weather": "windy",
        "visibility": "good",
        "comment": "I'm getting pretty confident although I hit a flock of birds"
    },
    {
        "id": 4,
        "date": "2017-05-11",
        "weather": "cloudy",
        "visibility": "good",
        "comment": "I almost failed the landing but I survived"
    }
];

// Map the diary data in order to make the weather property conform to the Weather type after the change to an Enum
// We use the 'as' operator to assert the data to be a DiaryEntry (telling the compiler that you know this conforms to a DiaryEntry and have done the checks)
const diaryEntries: DiaryEntry[] = data.map((diary) => {
    const diaryEntry : DiaryEntry = toNewDiaryEntry(diary) as DiaryEntry;

    // The object returned from toNewDiaryEntry doesn't return an object with an id field
    diaryEntry.id = diary.id;

    return diaryEntry;
});

export { diaryEntries };