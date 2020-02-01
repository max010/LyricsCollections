import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {IAppState} from '../../state/app-state';
import {songsActions, SongsActions} from '../../actions/songs-actions';
import {connect} from 'react-redux';
import {ISong} from '../../models/song';
import SearchHeader from './search-header-component';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {noop} from 'rxjs';
import NavigationRouts from '../../navigation/navigation-routs';

interface SongsPageProps extends SongsActions, NavigationStackScreenProps {
  songs: ISong[];
  isLoading: boolean;
}

const renderOption = (item: ISong, props: SongsPageProps) => (
  <TouchableOpacity
    key={item.number}
    style={styles.optionContainer}
    onPress={() =>
      props.navigation.navigate(NavigationRouts.song, {song: item})
    }
    activeOpacity={0.8}>
    <Text style={styles.songNumber}>{item.number}</Text>
    <View style={styles.detailContainer}>
      <Text style={styles.optionInfo} numberOfLines={3}>
        {item.verses[0] && item.verses[0].value.replace('1. ', '')}
      </Text>
    </View>
  </TouchableOpacity>
);

const SongsPage = (props: SongsPageProps) => {
  useEffect(() => {
    props.filterSongsStart(1, '');
  }, []);
  return (
    <View style={styles.container}>
      <SearchHeader
        navigation={props.navigation}
        onChange={filter => {
          props.filterSongsStart(1, filter);
        }}
      />
      <FlatList
        style={styles.flatList}
        data={props.songs}
        renderItem={({item}) => renderOption(item, props)}
        keyExtractor={item => `${item.number}`}
        refreshing={props.isLoading}
        onRefresh={noop}
      />
    </View>
  );
};

const mapStateToProps = (state: IAppState): SongsPageProps =>
  ({
    songs: state.songsData.songs,
    isLoading: state.songsData.songsLoading,
  } as SongsPageProps);

export default connect(mapStateToProps, {
  ...songsActions,
})(SongsPage);

const styles = StyleSheet.create({
  container: {flex: 1},
  optionContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 2,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  songNumber: {
    fontSize: 18,
    color: '#444',
    fontWeight: 'bold',
    width: 45,
    alignSelf: 'flex-start',
  },
  detailContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
  },
  optionInfo: {
    marginVertical: 5,
    fontSize: 18,
    color: '#666666',
  },
  flatList: {
    flexGrow: 1,
  },
});
