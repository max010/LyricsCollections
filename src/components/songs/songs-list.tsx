import * as React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import NavigationRouts from '../../navigation/navigation-routs';
import {IAppState} from '../../state/app-state';
import {songsActions, SongsActions} from '../../actions/songs-list';
import {connect} from 'react-redux';
import {ISong} from '../../models/song';

interface SongsListProps extends SongsActions {
  songs: ISong[];
}

const renderOption = (item: ISong, props) => (
  <TouchableOpacity
    key={item.number}
    style={styles.optionContainer}
    onPress={() => props.navigation.navigate(NavigationRouts.songsList)}
    activeOpacity={0.8}>
    <Text style={styles.optionTitle}>{item.number}</Text>
    <View style={styles.detailContainer}>
      <Text style={styles.optionInfo}>{item.accord}</Text>
    </View>
  </TouchableOpacity>
);

const SongsList = (props: SongsListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.songs}
        renderItem={({item}) => renderOption(item, props)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const mapStateToProps = (state: IAppState): SongsListProps =>
  ({
    songs: state.collections.songs,
  } as SongsListProps);

export default connect(mapStateToProps, {
  ...songsActions,
})(SongsList);

const styles = StyleSheet.create({
  container: {},
  optionContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    elevation: 2,
  },
  optionTitle: {
    fontSize: 18,
    color: '#666666',
  },
  detailContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  optionInfo: {
    margin: 5,
    fontSize: 11,
    color: '#666666',
  },
});
