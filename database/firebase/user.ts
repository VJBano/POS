import { collection, getDocs, query, where } from "firebase/firestore";
import { Device } from "../../constants/device"
import { db } from "./config";
import { User, initUser } from "../../constants/user";

const UserFirebase = {

    getUserByDeviceData:async (fingerprint:string | null):Promise<User> => {
        
        try {
            const usersCollectionRef = collection(db, 'Devices');

            const q = query(usersCollectionRef, where('fingerprint', '==', fingerprint));

            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const docData = querySnapshot.docs[0].data() as User;
                const storedFingerPrint = docData.fingerprint;

                if (fingerprint === storedFingerPrint) {
                        return docData
                } else {
                    return initUser
                }
                
            }

            return initUser

        } catch (error) {
            console.log("Error From UserFirebase-getUserByDeviceData: ", error)
            return initUser
        }

    },

}

export default UserFirebase