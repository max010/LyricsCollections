import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationRouts from './navigation-routs';
import CollectionsPage from '../components/collections/collections-page';
import SongsPage from '../components/songs/songs-page';
import SongPage from '../components/songs/song-page';
import SimpleHeader from '../components/shared/simple-header-component';

const AppNavigator = createStackNavigator(
  {
    [NavigationRouts.collections]: {
      screen: CollectionsPage,
      navigationOptions: {
        headerTitle: 'Сборники',
        header: props => <SimpleHeader {...props} />,
      },
    },
    [NavigationRouts.songsList]: {
      screen: SongsPage,
      navigationOptions: {
        header: null,
      },
    },
    [NavigationRouts.song]: {
      screen: SongPage,
      navigationOptions: {
        headerTitle: 'Псалом',
        header: props => <SimpleHeader {...props} />,
      },
    },
  },
  {
    initialRouteName: NavigationRouts.collections,
    navigationOptions: {
      header: props => <SimpleHeader {...props} />,
    },
  },
);

export default createAppContainer(AppNavigator);
