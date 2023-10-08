import uuid from 'react-native-uuid';

const IDGenerator = {

    uuid: () => {

        return uuid.v4()
    },

    id: () => {
        const min = 999999999;
        const max = 9999999999;

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default IDGenerator