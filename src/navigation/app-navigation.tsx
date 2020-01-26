import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CollectionList from '../components/collections/collection-list';
import SongsList from '../components/songs/songs-list';
import NavigationRouts from './navigation-routs';
import SimpleHeader from '../components/shared/header';
import SearchHeader from '../components/shared/song-search';


const AppNavigator = createStackNavigator({
  [NavigationRouts.collections]: {
    screen: CollectionList,

  },
  [NavigationRouts.songsList]: {
    screen: SongsList,
    navigationOptions: {
      headerTitle: 'test',
      header: (props) => <SearchHeader {...props} />
    }
  },
}, {
    initialRouteName: NavigationRouts.collections,
    navigationOptions: {
      header: () => <SimpleHeader />
    }
  }
);

export default createAppContainer(AppNavigator);