import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
export default class WebViewExample extends React.PureComponent {
  render() {
    if (Platform.Version === 22) {
      return <WebView source={{
        html: `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          Android Version: ${Platform.Version}
          <h1>Hello #NOF</h1>
          <h2>More Content</h2>
        </body>
      </html>`.replace(/#/g, '�')
      }} />
    }
    return <WebView source={{
      html: `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          Android Version: ${Platform.Version}
          <h1>Hello #NOF</h1>
          <h2>More Content</h2>
        </body>
      </html>`}} />
  }
}
