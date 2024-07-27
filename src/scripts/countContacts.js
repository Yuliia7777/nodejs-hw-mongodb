import {
  // readContactsFromFile,
  // writeContactsToFileAsync,
  readContactsFromFileAsync,
} from '../utils/fileOperations.js';

export const countContacts = async () => {
  const contacts = await readContactsFromFileAsync();
  return contacts.length;
};

console.log(await countContacts());
