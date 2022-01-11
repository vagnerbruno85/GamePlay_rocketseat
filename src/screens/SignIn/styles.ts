import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:theme.colors.background,
        alignItems:'center',
        justifyContent:"center",
    },
   image:{
        width:'100%',
        height:360
   },
   content:{
        marginTop:-40,
        paddingHorizontal:50,
   },
    title:{
        fontSize:40,
        textAlign:'center',
        color:theme.colors.heading,
        marginBottom:16,
    },
    subtitle:{
        fontSize:15,
        textAlign:'center',
        color: theme.colors.heading,
        marginBottom:64,
    }

});
//  export default styles;