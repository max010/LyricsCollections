import * as React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import NavigationRouts from '../../navigation/navigation-routs';
interface SongsListProps {}

const renderOption = (item, props) => (
  <TouchableOpacity
    key={item.id}
    style={styles.optionContainer}
    onPress={() => props.navigation.navigate(NavigationRouts.songsList)}
    title={item.title}
    activeOpacity={0.8}>
    <Text style={styles.optionTitle}>{item.name}</Text>
    <View style={styles.detailContainer}>
      <Text style={styles.optionInfo}>{item.detail}</Text>
    </View>
  </TouchableOpacity>
);

const SongsList = (props: SongsListProps) => {
  const DATA = [
    {
      number: '154',
      name: 'test1',
      detail: 'detail',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => renderOption(item, props)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SongsList;

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
