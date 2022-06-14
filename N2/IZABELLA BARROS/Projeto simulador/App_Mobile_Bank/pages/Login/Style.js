import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    background:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121214',
    },
    containerLogo:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    welcome:{
       color: '#fff',
       fontSize:25,
       paddingBottom:20,
    },
    logo:{
        width: '80%',
        height: '80%',
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        width: '90%',
        marginBottom:'3%',
    },
    input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom:20,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,

    },
    btnSubmit:{
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:7,
    },
    submitText:{
        color: '#FFF',
        fontSize:18,
    },
    btnRegister:{
        marginTop:15,
    },
    registerText:{
        color: '#FFF',
        fontSize:15,
    }
});