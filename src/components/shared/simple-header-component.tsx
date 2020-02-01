import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

interface SimpleHeaderProps {
  scene: any;
  previous: any;
  navigation: any;
}

const SimpleHeader = (props: SimpleHeaderProps) => {
  console.log();
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => props.navigation.goBack()}>
          <Icon name="md-arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>
          {props.scene.descriptor.options.headerTitle}
        </Text>

        <TouchableOpacity
          disabled={true}
          style={styles.searchIcon}
          onPress={() => {}}>
          <Icon name="md-search" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SimpleHeader;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
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
  title: {
    flex: 1,
    margin: 5,
    fontSize: 20,
    textAlignVertical: 'center',
  },
});
