import { Debt } from "../constants/debt"
import { DebtProduct } from "../constants/debt_product"
import { Expenses } from "../constants/expenses"
import { Logs } from "../constants/logs"
import { Product } from "../constants/product"
import { ProductCategory } from "../constants/product_category"
import { Sales } from "../constants/sales"
import { User } from "../constants/user"
import posConnDB from "./config"

const Create = {

    user:async (user:User) => {

        try {
            
            await posConnDB.transaction((tx) => {
                tx.executeSql(`INSERT INTO user (
                    id,
                    first_name,
                    last_name,
                    email,
                    password,
                    store_name,
                    address,
                    permit_no,
                    contact_no) VALUES (?,?,?,?,?,?,?,?,?)`,
                    [
                        user.id,
                        user.first_name,
                        user.last_name,
                        user.email,
                        user.password,
                        user.store_name,
                        user.address,
                        user.permit_no,
                        user.contact_no], () => {
                            console.log("Successfully added user");
                        },() => {
                            return false
                        });
            });

            return { success: true, message: "user added successfully" };
            
        } catch (error) {
            console.error("Error adding user:", error);
            return { success: false, message: "Error adding user", error }
        }
    },
    product:async (product:Product) => {
        try {
            
        } catch (error) {
            
        }
    },
    sales:async (sales:Sales) => {
        try {
            
        } catch (error) {
            
        }
    },
    expenses:async (expenses:Expenses) => {
        try {
            
        } catch (error) {
            
        }
    },
    debt:async (debt:Debt) => {
        try {
            
        } catch (error) {
            
        }
    },
    debt_product:async (debtProduct:DebtProduct) => {
        try {
            
        } catch (error) {
            
        }
    },
    product_category:async (productCategory:ProductCategory) => {
        try {
            
        } catch (error) {
            
        }
    },
    logs:async (logs:Logs) => {
        try {
            
        } catch (error) {
            
        }
    },
    
}

export default Create