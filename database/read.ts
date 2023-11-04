
import { User } from "../constants/user"
import posConnDB from "./config";

const Read = {

    userByEmailAndPassword: async (email:string, password:string) => {
        
        try {
            
            return new Promise<User[]>((resolve, reject) => {
                
                posConnDB.transaction((tx) => {
                    tx.executeSql(`SELECT * FROM user WHERE email = ? AND password = ?`,[email, password],
                    (_, {rows}) => {
                        const user:User[] = rows._array.map((row: User) => ({
                            id: row.id,
                            first_name: row.first_name,
                            last_name:row.last_name,
                            email:row.email,
                            password:row.password,
                            store_name:row.store_name,
                            address:row.address,
                            permit_no:row.permit_no,
                            contact_no:row.contact_no
                        }));
                        resolve(user);
                    }, (error) => {
                        reject(error);
                        return false
                    });
                });
            });

        } catch (error) {
            console.log("Error From Read-userByEmailAndPassword: ", error);
            return
        }
    },

    user:async () => {
        
        try {
            
            return new Promise<User[]>((resolve, reject) => {
                posConnDB.transaction((tx) => {
                    tx.executeSql(`SELECT * FROM user`,[],(_, {rows}) => {
                        const user:User[] = rows._array.map((row: User) => ({
                            id: row.id,
                            first_name: row.first_name,
                            last_name:row.last_name,
                            email:row.email,
                            password:row.password,
                            store_name:row.store_name,
                            address:row.address,
                            permit_no:row.permit_no,
                            contact_no:row.contact_no
                        }));
                        resolve(user);

                    },(error) => {
                        reject(error);
                        return false
                    });
                });
            });

        } catch (error) {
            console.log("Error From Read-user: ", error);
            return
        }
    }
} 

export default Read