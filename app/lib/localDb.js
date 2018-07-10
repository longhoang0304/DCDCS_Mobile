import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

const db = new Storage({
  size: 1000,
  defaultExpires: null,
  enableCache: true,
  sync: {},
  storageBackend: AsyncStorage,
});

const dbLoad = db.load;
const dbSave = db.save;

db.load = async (key) => {
  const ret = await dbLoad({
    key,
    autoSync: false,
    syncInBackground: false,
    syncParams: {},
  });
  return ret;
};

db.save = async (key, data) => {
  await dbSave({
    key,
    data,
    expires: null,
  });
};

export default db;