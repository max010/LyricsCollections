import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SimpleHeaderProps { }

const SimpleHeader = (props: SimpleHeaderProps) => {
    return (
        <View style={styles.container}>
            <Text>Songs</Text>
        </View>
    );
};

export default SimpleHeader;

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#f2f2f2'
    }
});
