import { newDiaryEntry, Weather } from './types'

const toNewDiaryEntry = (bodyData: unknown) : newDiaryEntry => {
    const {date, weather, visibility, comment} = bodyData

    const newEntry : newDiaryEntry = {
        date,
        weather,
        visibility,
        comment
    };

    return newEntry;
};

// Type Guards & Predicate
// This is a Type Guard which is a function which returns a boolean based on the type predicate (text is string)
// The usual type predicate is like this: Paramater is X Type (paramater being the function parameter)
// A predicate means affirming or denying an argument in a assertion

// Checking typeof & instanceof
// You have 2 different ways of creating a string object in Javascript
// const a = "I'm a string primitive";
// const b = new String("I'm a String Object");
// typeof a; --> returns 'string'
// typeof b; --> returns 'object'
// a instanceof String; --> returns false
// b instanceof String; --> returns true
// Checking typeof would be good enough in most cases but this is to make it extra secure as it would be unlikely anyone creates a string with a constructor function

// Checks if string
const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

// Checks if comment is present and if isString equals to true
const parseComment = (comment: unknown) : string => {
    if(!comment || !isString(comment)) {
        throw new Error('Incorrect or missing comment');
    }

    return comment;
};

// Date.parse returns the milliseconds from 1970 1jan 00:00 as a number
// It will return NaN if it's an invalid date where Boolean(NaN) equals to false and thus throwing the error in parseDate

// Checks for a valid date
const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
  };

// Checks if date is present, is a string and is a valid date
// Because isString the date is set as a string type hence why isDate can use date: string instead of date: unknown
const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error(`Incorrect or missing date: ${date}`);
    }
    return date;
};

// Object.values() returns the objects values as an array, in this case ['sunny', 'rainy', 'cloudy', ...etc]
// An Enum type (Weather) are real objects that exist at runtime
// Param is set to any since weather is also unknown and is logical since you don't know what type the weather data is going to be
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWeather = (param: any): param is Weather => {
    return Object.values(Weather).includes(param);
};

const parseWeather = (weather: unknown): Weather => {
    if (!weather || !isWeather(weather)) {
        throw new Error(`Incorrect or missing weather:  + ${weather}`);
    }
    return weather;
};

export {
    toNewDiaryEntry
};