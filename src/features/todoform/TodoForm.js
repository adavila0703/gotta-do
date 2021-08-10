import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, Switch } from 'react-native';

export const TodoForm = () => {
    const [titleText, setTitleText] = useState(null);
    const [descriptionText, setDescriptionText] = useState(null);
    const [completed, setCompleted] = useState(false);
    return (
        <>
            <Text style={styles.text}>Enter Todo</Text>
            <TextInput 
            style={styles.input} 
            placeholder='Title' 
            onChangeText={setTitleText}
            />
            <TextInput
                style={[styles.input, { height: 150 }]}
                placeholder='Description'
                onChangeText={setDescriptionText}
                value={descriptionText}
            />
            <Text style={{ fontSize: 15 }}>Completed?</Text>
            <Switch
                value={completed}
                onValueChange={() => completed ? setCompleted(false) : setCompleted(true)}
            />
            <Button title="Test" onPress={() => console.log(titleText)}></Button>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    input: {
        width: 250,
        height: 30,
        borderColor: '#000',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
        flexWrap: 'wrap',
    }
});