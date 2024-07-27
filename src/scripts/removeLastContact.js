import {
  // readContactsFromFile,
  // writeContactsToFile,
  readContactsFromFileAsync,
  writeContactsToFileAsync,
} from '../utils/fileOperations.js';

export const removeLastContact = async () => {
  const contacts = await readContactsFromFileAsync();

  if (contacts.length === 0) {
    console.log('Nothing to remove.');
    return;
  }
  contacts.pop();
  await writeContactsToFileAsync(contacts);
  console.log('Last contact has been removed.');
};

removeLastContact();
