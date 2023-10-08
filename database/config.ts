import * as SQLite  from 'expo-sqlite';
import {DB} from '@env'

const quizConnDB = SQLite.openDatabase(DB);

export default quizConnDB