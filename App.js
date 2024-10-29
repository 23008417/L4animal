import { StatusBar } from 'expo-status-bar';
import {Text, Button, Alert, View, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import React, { useState } from 'react';

const App = () => {
    const [a, setA] = useState(null); // Updated to use null for unselected state
    const [b, setB] = useState(null);
    const [c, setC] = useState(null);

    // Correct answers for the questions
    const correctAnswers = {
        question1: 'Penguin', // First question correct answer
        question2: 'Leopard',  // Second question correct answer
        question3: 'Bee',      // Third question correct answer
    };

    const handleSubmit = () => {
        let score = 0;
        if (a === correctAnswers.question1) score++;
        if (b === correctAnswers.question2) score++;
        if (c === correctAnswers.question3) score++;

        // Custom message based on score
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
        <View style={{ padding: 20 }}>
            <StatusBar hidden={true} />
            <Image source={require('./img/penguin.jpg')} style={{ width: 100, height: 100 }} />
            <Text>Who is this?</Text>
            <RNPickerSelect
                onValueChange={(value) => setA(value)}
                items={[
                    { label: 'Penguin', value: 'Penguin' },
                    { label: 'Crocodile', value: 'Crocodile' },
                    { label: 'Deer', value: 'Deer' },
                ]}
            />

            <Image source={require('./img/leopard.jpg')} style={{ width: 100, height: 100 }} />
            <Text>Who is this?</Text>
            <RNPickerSelect
                onValueChange={(value) => setB(value)}
                items={[
                    { label: 'Leopard', value: 'Leopard' },
                    { label: 'Crocodile', value: 'Crocodile' },
                    { label: 'Deer', value: 'Deer' },
                ]}
            />

            <Image source={require('./img/bee.jpg')} style={{ width: 100, height: 100 }} />
            <Text>What Animal Is This?</Text>
            <RNPickerSelect
                onValueChange={(value) => setC(value)}
                items={[
                    { label: 'Zebra', value: 'Zebra' },
                    { label: 'Bee', value: 'Bee' },
                    { label: 'Owl', value: 'Owl' },
                ]}
            />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default App;
