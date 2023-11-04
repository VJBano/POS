import posConnDB from "./config";

const Delete = {

    allUser:async () => {
        
        try {
            
            return new Promise((resolve, reject) => {
                posConnDB.transaction((tx) => {
                    tx.executeSql(`DELETE FROM user`,[],(_, resultSet) => {
                        resolve(true);

                    },(error) => {
                        reject(error);
                        return false
                    });
                },(error) => {
                    reject(error);
                });
            });

        } catch (error) {
            console.log("Error From Delete-allUser: ", error)
            return
        }
    }
}

export default Delete