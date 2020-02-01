import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface SimpleHeaderProps {
  navigation: any;
  onChange: (filter: string) => void;
}

const SearchHeader = (props: SimpleHeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => props.navigation.goBack()}>
        <Icon name="md-arrow-back" size={30} />
      </TouchableOpacity>
      <TextInput
        onChangeText={props.onChange}
        style={styles.searchInput}
        autoFocus={true}></TextInput>
      <TouchableOpacity
        disabled={true}
        style={styles.searchIcon}
        onPress={() => {}}>
        <Icon name="md-search" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
    elevation: 3,
  },
  backIcon: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchIcon: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});
