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
    container:{
        flex:1,
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
        marginTop:10,
    },
    submitText:{
        color: '#FFF',
        fontSize:18,
        marginBottom:10,
    },
    btnRegister:{
        marginTop:10,
    },
    registerText:{
        color: '#FFF',
    }
});

