import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import NavigationRouts from '../../navigation/navigation-routs';

interface CollectionListProps extends NavigationStackProp { }

const renderOption = (item, props) => (<TouchableOpacity
    style={styles.optionContainer}
    id={item.id}
    onPress={() => props.navigation.navigate(NavigationRouts.songsList)}
    title={item.title}
    activeOpacity={0.8}>
    <Text style={styles.optionTitle}>
        {item.name}
    </Text>
    <View style={styles.detailContainer}>
        <Text style={styles.optionInfo}>
            {item.songsCount} / {item.author} /  {item.creationDate}
        </Text>
    </View>
</TouchableOpacity>)

const CollectionList = (props: CollectionListProps) => {
    console.log(props)
    const DATA = [
        {
            id: 'test1',
            name: 'test1',
            songsCount: 254,
            author: "test test",
            creationDate: '02.02.2000'
        }
    ]
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => renderOption(item, props)}
                keyExtractor={item => item.id}
            />
        </View>
    );
};


export default CollectionList;

const styles = StyleSheet.create({
    container: { backgroundColor: '#f2f2f2', flex: 1 },
    optionContainer: {
        backgroundColor: 'white',
        padding: 15,
        margin: 5,
        elevation: 2,
    },
    optionTitle: {
        fontSize: 25,
        color: '#666666'
    },
    detailContainer: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    optionInfo: {
        margin: 5,
        fontSize: 11,
        color: '#666666'
    }
});
