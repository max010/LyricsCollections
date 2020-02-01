import React, {useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {NavigationStackProp} from 'react-navigation-stack';
import NavigationRouts from '../../navigation/navigation-routs';
import {
  collectionActions,
  CollectionActions,
} from '../../actions/collection-actions';
import {connect} from 'react-redux';
import {IAppState} from '../../state/app-state';
import {ICollection} from '../../models/collection';

interface CollectionListProps extends NavigationStackProp, CollectionActions {
  collections: ICollection[];
}

const renderOption = (item, props) => (
  <TouchableOpacity
    style={styles.optionContainer}
    onPress={() => props.navigation.navigate(NavigationRouts.songsList)}
    activeOpacity={0.8}>
    <View style={styles.detailContainer}>
      <Text style={styles.optionTitle}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const CollectionList = (props: CollectionListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.collections}
        renderItem={({item}) => renderOption(item, props)}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

const mapStateToProps = (state: IAppState): CollectionListProps =>
  ({
    collections: state.songsData.collections,
  } as CollectionListProps);

export default connect(mapStateToProps, {
  ...collectionActions,
})(CollectionList);

const styles = StyleSheet.create({
  container: {backgroundColor: '#f2f2f2', flex: 1},
  optionContainer: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 2,
  },
  optionTitle: {
    fontSize: 25,
    color: '#666666',
  },
  detailContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionInfo: {
    margin: 5,
    fontSize: 11,
    color: '#666666',
  },
});
