import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {IAppState} from '../../state/app-state';
import {songsActions, SongsActions} from '../../actions/songs-actions';
import {connect} from 'react-redux';
import {ISong} from '../../models/song';
import SearchHeader from './search-header-component';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {noop} from 'rxjs';
import {ScrollView} from 'react-native-gesture-handler';

interface SongPageProps extends SongsActions, NavigationStackScreenProps {
  song: ISong;
}

const SongPage = (props: SongPageProps) => {
  const [song, setSong] = useState(null);
  useEffect(() => {
    setSong(props.navigation.getParam('song'));
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {song &&
        song.verses.map(vers => (
          <View style={styles.versContainer}>
            <Text style={styles.versFont}>{vers.value}</Text>
          </View>
        ))}
    </ScrollView>
  );
};

const mapStateToProps = (state: IAppState): SongPageProps =>
  ({} as SongPageProps);

export default connect(mapStateToProps, {})(SongPage);

const styles = StyleSheet.create({
  scrollContainer: {flexGrow: 1, paddingVertical: 20},
  versContainer: {marginVertical: 10, marginHorizontal: 20},
  versFont: {
    fontSize: 24,
    fontWeight: 'normal',
  },
});
