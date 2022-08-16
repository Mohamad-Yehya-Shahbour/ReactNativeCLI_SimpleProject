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

        {loading && (
          <ActivityIndicator
            style={{position: 'absolute',left: 0,right: 0,bottom: 0,top: 0,}}
            size="large"
            color={"black"}
          />
        )}

      </SafeAreaView>
      
    );
}


export default SearchDetailsScreen;