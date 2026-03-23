import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cancer Diet App</Text>
            <Text style={styles.description}>Welcome to the Cancer Diet App! Here you can find dietary information and resources to help manage your diet during cancer treatment.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f7f7f7',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default App;