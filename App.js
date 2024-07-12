
import { FlatList, Platform, SafeAreaView, ScrollView, StyleSheet, StatusBar,Text, View ,ActivityIndicator, Pressable, Alert} from 'react-native';
// import Card from './components/Card';
// import Card from './components/Card';
// import Card from './components/Card':
import listData from "./data.json"

import Card from './components/Card';
import { useEffect, useState } from 'react';
import Form from './components/Form';


export default function App() {
  const [listDataState, setListData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('shashi')
    setListData(listData);
    setLoading(false);
  },[])
  const charmandarData={
    name: 'Charmander',
    type: 'Fire',
    image: require('./assets/cartoon1.png'),
    hp:39,
    moves: ["Scratch", "Ember","Growl","Leer"],
    weaknesses: ["Water", "Grass"],
    
  }
  const pikashu={
    name: 'pikashu',
    type: 'Fire',
    image: require('./assets/cartoon2.png'),
    hp:39,
    moves: ["Scratch", "Ember","Growl","Leer"],
    weaknesses: ["Water", "Grass"],
    
  }
  const doreamon={
    name: 'doreamon',
    type: 'Gadget',
    image: require('./assets/cartoon3.png'),
    hp:39,
    moves: ["Scratch", "Ember","Growl","Leer"],
    weaknesses: ["Water", "Grass"],
    
  }
  
  return (
    <SafeAreaView style={[styles.safeContainer,styles.border]}>
    
      {/* <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Shashi kumar kushwaha</Text>
          <Card {...charmandarData}/>
          <Card {...pikashu}/>
          <Card {...doreamon}/>
          <Card {...charmandarData}/>
        </View>
        </ScrollView> */}
        {/* <ScrollView> */}
        {
          // listData.map((item, index) => {
          //   return (
          //     <View key={item.id} style={[styles.card,styles.border, styles.alignments]}> 
          //       <Text style={[styles.centerText]}>{index}</Text>
          //       <View style={[styles.border]}>
          //       <Text style={[ styles.centerText]}>name: {item.name}</Text>
          //       <Text style={[ styles.centerText]}>age: {item.age}</Text>
          //       </View>
          //     </View>
          //   )
          // })
        }
       {/* </ScrollView> */}
       {/* <View><Text>hello shashi</Text></View> */}
        {/* {  loading? <ActivityIndicator size="large" color="blue" style={styles.loader} />:(

          <FlatList
          data={listDataState }
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item})=>{
            // console.log(item.name)
            return (
                  <View style={[styles.card,styles.border, styles.alignments, styles.border]}> 
                    <Text style={[styles.centerText]}>{item.id}</Text>
                    <Pressable onPress={()=>Alert.alert(item.name)}>
                    <View style={[styles.border]} >
                    <Text style={[ styles.centerText]}>name: {item.name}</Text>
                    <Text style={[ styles.centerText]}>age: {item.age}</Text>
                    </View>
                    </Pressable>
                  </View>
                )

          }} 
          
          ItemSeparatorComponent={<View style={{height:16}}></View>}
          ListEmptyComponent={<View style={[styles.nodataFound,styles.border]}><Text>No item found </Text></View>}
          ListHeaderComponent={<Text style={[styles.centerText]}>starting</Text>}
          ListFooterComponent={<Text style={[styles.centerText]}>End</Text>}
          />)
        } */}
      
        <Form/>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
   
    
  },
  safeContainer:{
    flex: 1,
    padding: 10,
    // backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    backgroundColor:"plum",
    // paddingTop:200
    
  },
  text:{
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  card:{
    backgroundColor:"white",
    borderRadius: 10,
    borderWidth:2,
    padding:16,
    margin:16,
    marginBottom:0,
    // marginTop:0,
    ...Platform.select({
        ios: {
            shadowColor: '#333',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
        },
        android: {
            elevation: 5,
        },
    })
  }
  ,border:{
     borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
    borderRadius:10
  },
  centerText: {
    // textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin:8,
    textAlign:'center'
  },
  alignments: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodataFound:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    // alignContent: 'center',
    // alignContent: 'center',
    // fontSize: 30,
    // fontWeight: 'bold',
  }
  
});
