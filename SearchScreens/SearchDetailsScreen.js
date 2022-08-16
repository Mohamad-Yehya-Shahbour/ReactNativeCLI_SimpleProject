import {SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import { WebView } from 'react-native-webview';


function SearchDetailsScreen({route}) {
  
  const [loading, setLoading] = useState(true);

  const {url} = route.params;
    return (
      <SafeAreaView style={styles.safeArea} >

        <WebView
          source={{  uri: url, }}
          onLoad ={() => setLoading(false)}
        />


      </SafeAreaView>
      
    );
}


export default SearchDetailsScreen;