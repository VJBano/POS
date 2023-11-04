import { StyleSheet } from 'react-native';
import Colors from './colors'


export const LoginStyle = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      },
      container: {
        padding: 15,
        width: '100%',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      brandName: {
        fontSize: 42,
        textAlign: 'center',
        color: Colors.primary,
        opacity: 0.9,
        fontFamily:"RobotoBold"
      },
      loginContinueTxt: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.gray,
        marginBottom: 10,
        fontFamily:"RobotoRegular"
      },
      loginMessage: {
        fontSize: 15,
        textAlign: 'center',
        color: Colors.red,
        marginBottom: 16,
        fontFamily:"RobotoBold"
      },
      input: {
        borderWidth: 1,
        borderColor: Colors.graylight,
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        height: 55,
        paddingVertical: 0,
        fontFamily:"RobotoRegular"
      },
      // Login Btn Styles
      loginBtnWrapper: {
        height: 55,
        marginTop: 12,
        shadowColor: Colors.black,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
      },
      linearGradient: {
        width: '100%',
        borderRadius: 50,
      },
      loginBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
      },
      loginText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily:"RobotoRegular"
      },
      forgotPassText: {
        color: Colors.primary,
        textAlign: 'center',
        fontFamily:"RobotoBold",
        marginTop: 15,
      },
      // footer
      footer: {
        position: 'absolute',
        bottom: 20,
        textAlign: 'center',
        flexDirection: 'row',
      },
      footerText: {
        color: Colors.gray,
        fontFamily:"RobotoBold",
      },
      signupBtn: {
        color: Colors.primary,
        fontFamily:"RobotoBold",
      },
      // utils
      wFull: {
        width: '100%',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
      },
      mr7: {
        marginRight: 7,
      },
})