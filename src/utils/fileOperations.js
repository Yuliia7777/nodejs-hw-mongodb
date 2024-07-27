import fs from 'fs';
import { readFile, writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContactsFromFile = () => {
  const data = fs.readFileSync(PATH_DB, 'utf8');
  return JSON.parse(data);
};

export const writeContactsToFile = (contacts) => {
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
};

export const readContactsFromFileAsync = async () => {
  try {
    const data = await readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(error.message);
  }
};

export const writeContactsToFileAsync = async (contacts) => {
  try {
    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error(error.message);
  }
};
