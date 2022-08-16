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
      })
  }, []);
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

      </SafeAreaView>
  );
}

export default ListScreen;