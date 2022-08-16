import {Text, View, StyleSheet, FlatList, Linking, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

function ListScreen({navigation}) {

  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(null);
  const [categArray, setCategArray] = useState([]);
  const filteredArray = [];
  const [error, setError]= useState(false)
  const [loading, setLoading]  = useState(true)
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    let array = [];
    let catArr = [];
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://api.publicapis.org/entries', requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        setData(responseJson);
        responseJson.entries.map(entries => {
          if (array.includes(entries.Category)) {
          } else {
            array.push(entries.Category);
            let tempObj = {
              label: entries.Category,
              value: entries.Category,
            };

            catArr.push(tempObj);
          }
        });

        console.log('array', catArr);
        setCategArray(catArr);
        setLoading(false);
      })
      .catch(error => {
        console.warn('errorrrr', error);
        setError(true)
      });
  }, []);

const filter = (value) => {
    for(let i=0; i<data.entries.length; i++){
        if(data.entries[i].Category == value){
            filteredArray.push(data.entries[i]);
    }
    setFilteredData(filteredArray);
    }
};

  const ItemView = ({item, index}) => {
    return (
      // Flat List Item
      <TouchableOpacity onPress={() => Linking.openURL(item.Link)}>
        <View style={styles.itemview}>
          <Text style={styles.text} > {index+1}{". "}{item.Description} </Text>
        </View>
      </TouchableOpacity>
      
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View style={{height: 1, width: '80%', backgroundColor: '#C8C8C8', justifyContent:"center", alignSelf:"center"}} />
    );
  };

  

  return (
      <SafeAreaView style={styles.container}>
            <Text style={[styles.label]}></Text>
            <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                search
                data={categArray}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Category' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                filter(item.value);
                }}
                renderLeftIcon={() => (
                <AntDesign
                    style={styles.icon}
                    color={'black'}
                    name="Safety"
                    size={20}
                />
                )}
            />

        {filteredData? 
          (<FlatList
            data={filteredData}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
          />
          ) : 
            <View>
              <Text style={styles.info2}>Pleasr select the category of the links  </Text>
              <Text style={styles.info2}>you are looking for...</Text>
            </View> 
        }
            
            { error && <Text style={{justifyContent:"center", alignSelf:"center", fontSize:"25",color:"black"}}>Page is not reachable, Please try again</Text>}

            {loading && 
              <ActivityIndicator
                style={{position: 'absolute',left: 0,right: 0,bottom: 0,top: 0,}}
                size="large"
                color={"black"}
              />
            }
            
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15, 
    paddingBottom:0,
    flex:1
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor:"white",
    color:"black"
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color: 'black',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  text: {
    fontSize: 15,
    color: 'black',
    marginBottom:4
  },
  link: {
    fontSize: 15,
    color: 'blue',
    marginBottom:4
  },
  info: {
    fontSize: 18,
    color: 'black',
    marginBottom:4, 
    justifyContent:"center",
    alignSelf:"center",
    marginTop:10
  },
  itemview: {
    padding: 16,
    marginTop: 15,
    marginBottom: 15,

    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  info2: {
    fontSize: 13,
    color: 'black',
    justifyContent:"center",
    alignSelf:"center",
    marginTop:5
  },
});

export default ListScreen;