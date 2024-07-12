import {View ,Text,StyleSheet, Platform,Image, Pressable, Alert} from "react-native"

const Card = ({name, type, image,hp,moves,weaknesses}) => {
    return (
        <View style={styles.card}>
            <View style={[styles.nameContainer]}>
                <Text style={styles.characterName}>{name}</Text>
                <Text  style={styles.characterName}>{hp}</Text>
            </View>
         
            <Pressable onPress={()=>Alert.alert(name)}>
                {/* <Text style={styles.text}>Click to learn more about {name}!</Text> */}
           
            <Image  style={styles.image}source={image}  resizeMode="contain" accessibilityLabel={`${name} pokeman`}/>
            </Pressable>
            <View>
                <Text style={styles.text}>Type: {type}</Text>
            </View>
            <View>
            <Text style={styles.text}>Moves: {moves.join(", ")}</Text>
            
            </View>
            <View>
            <Text style={styles.text}>Weaknesses: {weaknesses.join(", ")}</Text>
            </View>
        </View>
    )
}

export default Card;
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    card:{
        backgroundColor:"white",
        borderRadius: 10,
        borderWidth:2,
        padding:16,
        margin:16,
        ...Platform.select({
            ios: {
                shadowColor: '#333',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 4,
            },
            android: {
                elevation: 1,
            },
        })
    },
    nameContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10
    },
    characterName:{
        fontSize:30,
        fontWeight: 'bold'
    },
    image:{
        width:"100%",
        height:200,
        borderRadius:10,
        marginBottom:10,
        borderWidth: 2,
        borderColor: 'red',
        borderStyle: 'solid',
        padding:10
    }
})