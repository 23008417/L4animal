import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, Alert, View, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react';

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F2F5',
        padding: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    child: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'blue'
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pickerContainer: {
        width: '80%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        marginVertical: 10,
        backgroundColor: '#f9f9f9',
    },
    buttonContainer: {
        marginTop: 20,
    },
});

const App = () => {
    const [a, setA] = useState(null);
    const [b, setB] = useState(null);
    const [c, setC] = useState(null);

    const correctAnswers = {
        question1: 'Penguin',
        question2: 'Leopard',
        question3: 'Bee',
    };

    const handleSubmit = () => {
        let score = 0;
        if (a === correctAnswers.question1) score++;
        if (b === correctAnswers.question2) score++;
        if (c === correctAnswers.question3) score++;

        let message;
        switch (score) {
            case 0:
                message = "Oh no! Try again. You got 0 questions right.";
                break;
            case 1:
                message = "You got 1 question right. Keep trying, you can do better!";
                break;
            case 2:
                message = "Good job! You got 2 questions right. Almost perfect!";
                break;
            case 3:
                message = "Excellent! You got all 3 questions correct. Well done!";
                break;
            default:
                message = `You got ${score} questions right.`;
        }

        Alert.alert(message);
    };

    return (
        <View style={styles.parent}>
            <StatusBar hidden={true} />

            <Text style={styles.header}>Quiz Time</Text>

            <Image source={require('./img/penguin.jpg')} style={styles.child} />
            <Text style={styles.questionText}>What animal is this?</Text>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setA(value)}
                    items={[
                        { label: 'Penguin', value: 'Penguin' },
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Deer', value: 'Deer' },
                    ]}
                />
            </View>

            <Image source={require('./img/leopard.jpg')} style={styles.child} />
            <Text style={styles.questionText}>Who is this animal?</Text>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setB(value)}
                    items={[
                        { label: 'Leopard', value: 'Leopard' },
                        { label: 'Crocodile', value: 'Crocodile' },
                        { label: 'Deer', value: 'Deer' },
                    ]}
                />
            </View>

            <Image source={require('./img/bee.jpg')} style={styles.child} />
            <Text style={styles.questionText}>What Animal Is This?</Text>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    onValueChange={(value) => setC(value)}
                    items={[
                        { label: 'Zebra', value: 'Zebra' },
                        { label: 'Bee', value: 'Bee' },
                        { label: 'Owl', value: 'Owl' },
                    ]}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default App;
