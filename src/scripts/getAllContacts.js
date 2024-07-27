import {
  // readContactsFromFile,
  readContactsFromFileAsync,
} from '../utils/fileOperations.js';

export const getAllContacts = async () => {
  return await readContactsFromFileAsync();
};

console.log(await getAllContacts());
