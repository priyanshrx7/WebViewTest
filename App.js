import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {

  const [showWebview, toggleWebview] = useState(false)
  const [url, setUrl] = useState('')


  if(showWebview && url) {
    return (
      <SafeAreaView style={styles.container2}>
        <StatusBar style="auto" />
        <WebView
          source={{ uri: url }}
          style={styles.webview}
        />
        <Button onPress={() => toggleWebview(false)} title='Close Webview' />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container1}>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={setUrl}
        value={url}
        placeholder='Enter URL'
        keyboardType='url'
        autoCapitalize='none'
      />
      <Button onPress={() => toggleWebview(true)} title='Open' />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 2,
    width: '80%'
  }
});
