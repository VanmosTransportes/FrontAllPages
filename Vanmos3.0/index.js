/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Routes from './src.1/navigations/Routes'
import TelaAjuda from './src.1/Telas/TelaAjuda'

AppRegistry.registerComponent(appName, () => Routes);
