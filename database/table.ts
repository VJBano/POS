
import posConnDB from "./config"

const CreateTable = {

    user:async () => {
        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS user (
                    id VARCHAR(50) ,
                    first_name VARCHAR(30),
                    last_name VARCHAR(30),
                    email VARCHAR(20) PRIMARY KEY,
                    password VARCHAR(50),
                    store_name VARCHAR(50),
                    address VARCHAR(50),
                    permit_no VARCHAR(50),
                    contact_no VARCHAR(15))`)
            });

            return { success: true, message: "user created successfully" };
        } catch (error) {
            console.error("Error creating user table:", error);
            return { success: false, message: "Error creating user table", error };
        }
    },
    product:async () => {
        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS product (
                    id VARCHAR(50) PRIMARY KEY,
                    product_code BIGINT,
                    product_name VARCHAR(50),
                    price BIGINT,
                    category BIGINT,
                    stock BIGINT,
                    sold BIGINT,
                    created_by VARCHAR(30),
                    created_at VARCHAR(30),
                    updated_at VARCHAR(30))`)
            });

            return { success: true, message: "product created successfully" };
        } catch (error) {
            console.error("Error creating product table:", error);
            return { success: false, message: "Error creating product table", error };
        }
    },
    sales:async () => {
        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS sales (
                    id VARCHAR(50) PRIMARY KEY,
                    product_code BIGINT,
                    price REAL,
                    sold BIGINT,
                    total REAL,
                    created_by VARCHAR(30),
                    created_at VARCHAR(30))`)
            });

            return { success: true, message: "sales created successfully" };
        } catch (error) {
            console.error("Error creating sales table:", error);
            return { success: false, message: "Error creating sales table", error };
        }
    },
    expenses:async () => {
        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS expenses (
                    id VARCHAR(50) PRIMARY KEY,
                    description VARCHAR(50),
                    amount BIGINT,
                    created_by VARCHAR(30),
                    created_at VARCHAR(30))`)
            });

            return { success: true, message: "expenses created successfully" };
        } catch (error) {
            console.error("Error creating expenses table:", error);
            return { success: false, message: "Error creating expenses table", error };
        }
    },
    debt:async () => {
        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS debt (
                    id VARCHAR(50) PRIMARY KEY,
                    name VARCHAR(30),
                    debt_product VARCHAR(50),
                    total BIGINT,
                    balance BIGINT,
                    paid BOOLEAN,
                    created_by VARCHAR(30),
                    created_at VARCHAR(30))`)
            });

            return { success: true, message: "debt created successfully" };
        } catch (error) {
            console.error("Error creating debt table:", error);
            return { success: false, message: "Error creating debt table", error };
        }
    },
    debt_product:async () => {
        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS debt_product (
                    id VARCHAR(50) PRIMARY KEY,
                    product_name VARCHAR(50),
                    price BIGINT,
                    created_by VARCHAR(30),
                    created_at VARCHAR(30))`)
            });

            return { success: true, message: "debt_product created successfully" };
        } catch (error) {
            console.error("Error creating debt_product table:", error);
            return { success: false, message: "Error creating debt_product table", error };
        }
    },
    product_category:async () => {
        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS product_category (
                    id BIGINT PRIMARY KEY,
                    category_name VARCHAR(50))`)
            });

            return { success: true, message: "product_category created successfully" };
        } catch (error) {
            console.error("Error creating product_category table:", error);
            return { success: false, message: "Error creating product_category table", error };
        }
    },
    logs:async () => {
        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS logs (
                    id VARCHAR(50) PRIMARY KEY,
                    log_type VARCHAR(30),
                    log_name VARCHAR(30),
                    created_at VARCHAR(30))`)
            });

            return { success: true, message: "logs created successfully" };
        } catch (error) {
            console.error("Error creating logs table:", error);
            return { success: false, message: "Error creating logs table", error };
        }
    },

    table_checker:async () => {
        try {
            return new Promise((resolve, reject) => {
              posConnDB.transaction(tx => {
                tx.executeSql(
                  'SELECT name FROM sqlite_master WHERE type="table"',
                  [],
                  (txObj, { rows }) => {
                    const tableNames = rows['_array'].map(row => row.name);
                    console.log('Table names:', tableNames);
                    resolve(tableNames);
                  },
                  (error) => {
                    console.log('Error:', error);
                    reject(error);
                     return false
                  }
                );
              });
            });
          } catch (error) {
            console.log("Error: ", error);
            throw error;
          }
    },

    dropTable:async (table:string) => {
        
        try {
            
            return new Promise((resolve,reject) => {
                posConnDB.transaction((tx) => {
                    tx.executeSql(`DROP TABLE IF EXISTS ${table};`, [], (_, result) => {
                      resolve(true)
                    }, (error) => {
                        reject(false)
                      console.log('Error deleting table:', error);
                      return false
                    });
                  });
            });
        } catch (error) {
            console.log("Error from Table-dropTable: ", error);
            return
        }
    }
    // check_table:async (tables:string) => {
        
    //     try {
            
    //         return new Promise<Boolean>((resolve, reject) => {
    //             posConnDB.transaction(
    //               (tx) => {
    //                 tx.executeSql(
    //                   `SELECT COUNT(*) as count FROM ${tables}`,
    //                   [],
    //                   (txObj, { rows }) => {
    //                     const count = rows.item(0).count;
    //                     if (count > 0) {
    //                       resolve(true);
    //                     } else {
    //                       resolve(false);
    //                     }
    //                   },
    //                   (txObj, error) => {
    //                     reject(error);
    //                     return false
    //                   }
    //                 );
    //               },
    //               (error) => {
    //                 reject(error);
    //               }
    //             );
    //           });
    //     } catch (error) {

    //         console.error("Error checking table:", error);
    //         return
    //     }
    // },
    // tables:async () => {
        
    //     try {
            

    // const tableNames = [
    //     "user",
    //     "sales",
    //     "product",
    //     "product_category",
    //     "debt",
    //     "debt_product",
    //     "expenses",
    //     "logs"
    //   ];

    //   const tableResults = [];

    //   for (const tableName of tableNames) {
    //     try {
    //       const result = await CreateTable.check_table(tableName);
    //       tableResults.push(result);
    //     } catch (error) {
    //       tableResults.push(false);
    //     }
    //   }
    //   return tableResults

    //     } catch (error) {
    //         console.error("Error getting tables:", error);
    //         return
    //     }
    // }

}

export default CreateTable