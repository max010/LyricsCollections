import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import NavigationRouts from '../../navigation/navigation-routs';
import {collectionActions, CollectionActions} from '../../actions/collections';
import {connect} from 'react-redux';
import {IAppState} from '../../state/app-state';
import {ICollection} from '../../models/collection';

interface CollectionListProps extends NavigationStackProp, CollectionActions {
  collections: ICollection[];
}

const renderOption = (item, props) => (
  <TouchableOpacity
    style={styles.optionContainer}
    id={item.id}
    onPress={() => props.navigation.navigate(NavigationRouts.songsList)}
    activeOpacity={0.8}>
    <Text style={styles.optionTitle}>{item.name}</Text>
    <View style={styles.detailContainer}>
      <Text style={styles.optionInfo}>
        {item.songsCount} / {item.author}
      </Text>
    </View>
  </TouchableOpacity>
);

const CollectionList = (props: CollectionListProps) => {
  useEffect(() => {
    props.getCollectionsStart();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={props.collections}
        renderItem={({item}) => renderOption(item, props)}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={{width: 200, height: 100, backgroundColor: 'red'}}
        onPress={() => props.uploadToDbStart()}
        activeOpacity={0.8}>
        <Text style={styles.optionTitle}>write</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: 200, height: 100, backgroundColor: 'blue'}}
        onPress={() => props.getCollectionsStart()}
        activeOpacity={0.8}>
        <Text style={styles.optionTitle}>read</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state: IAppState): CollectionListProps =>
  ({
    collections: state.collections.collections,
  } as CollectionListProps);

export default connect(mapStateToProps, {
  ...collectionActions,
})(CollectionList);

const styles = StyleSheet.create({
  container: {backgroundColor: '#f2f2f2', flex: 1},
  optionContainer: {
    backgroundColor: 'white',
    padding: 15,
    margin: 5,
    elevation: 2,
  },
  optionTitle: {
    fontSize: 25,
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
