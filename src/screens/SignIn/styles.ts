import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        fontFamily: theme.fonts.title700,
        textAlign:'center',
        color:theme.colors.heading,
        marginBottom:16,
        lineHeight:40,
    },
    subtitle:{
        fontSize:15,
        fontFamily:theme.fonts.title500, 
        textAlign:'center',
        color: theme.colors.heading,
        marginBottom:64,
        lineHeight:25,
    }

});