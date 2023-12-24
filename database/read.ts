
import { Product } from "../constants/product";
import { ProductCategory } from "../constants/product_category";
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
    },

    productCategory :async () => {
        
        try {
            
            return new Promise<ProductCategory[]>((resolve, reject) => {
                posConnDB.transaction((tx) => {
                    tx.executeSql(`SELECT * FROM product_category`,[],(_, {rows}) => {
                        const category:ProductCategory[] = rows._array.map((row: ProductCategory) => ({
                            id: row.id,
                            category_name:row.category_name
                        }));
                        resolve(category);

                    },(error) => {
                        reject(error);
                        return false
                    });
                });
            });

        } catch (error) {
            console.log("Error From Read-productCategory: ", error);
            return;
        }
    },

    getProductStocks:async () => {
        
        try {
            
            
            return new Promise<{ product_name: string; stock: number; }[]>((resolve, reject) => {

                posConnDB.transaction((tx) => {

                    tx.executeSql(`SELECT product_name, stock FROM product`,[],(_,{ rows }) => {
                        const product:{ product_name: string; stock: number; }[] = rows._array.map((row:Product) =>({
                            product_name: row.product_name,
                            stock: row.stock
                        }));

                        resolve(product);
                    },(error) => {
                        reject(error);
                        return false
                    });
                });
            });

        } catch (error) {
            console.log("Error From Read-getProductStocks: ", error);
            return;
        }
    }
} 

export default Read