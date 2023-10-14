import * as SQLite  from 'expo-sqlite';
import {DB} from '@env'

const posConnDB = SQLite.openDatabase(DB);

export default posConnDB