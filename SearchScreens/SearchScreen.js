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