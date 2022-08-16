import { Text, View, StyleSheet,Pressable , FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Searchbar} from 'react-native-paper';
import React, {useState, useEffect } from 'react';



function SearchScreen({ navigation }) {

    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError]= useState(false)
    
    const onChangeSearch = query => {
      setSearchQuery(query);
      if(query == ""){
        setData(null);
      }
    }
    
    const api = () =>{
      var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
      setLoading(true);
      fetch(`http://universities.hipolabs.com/search?country=${searchQuery}`, requestOptions)
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson);
            setLoading(false);
          })
        .catch(error => {
          console.warn('error', error);
          setError(true);
        });
    }

    const ItemView = ( {item} ) => {
        return (
          // Flat List Item
        <View style={{flex:1, alignItems:"center",justifyContent:"center"}} >
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchItemDetails', {
                url: item.domains[0], title: item.name
            })}>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        </View>
        );
      };
    

    
    
    return (

      <SafeAreaView style={{ flex: 1}}>
          <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              onIconPress={api}
              style={{marginBottom:5, marginTop:1}}
          />
          {data? 
          (<FlatList
              data={data}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={ItemSeparatorView}
              renderItem={ItemView}
            />
          ) : 
            <View>
              <Text style={styles.info}>Type the country name where you want to </Text>
              <Text style={styles.info}>search for a university.</Text>
              <Text style={styles.info}>example: "Lebanon", "Egypt", "France"...</Text>
            </View> 
          }
          
          

          
          

      </SafeAreaView>

    );
}



export default SearchScreen;