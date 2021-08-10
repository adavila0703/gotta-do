import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, useWindowDimensions, Pressable, Animated, LayoutAnimation } from 'react-native';
import Icon from 'react-native-ico-material-design';
import { TodoForm } from '../todoform/TodoForm';

export const DropDown = () => {
    const [showPage, setShowPage] = useState(false);
    const windowHeight = useWindowDimensions().height;
    const windowWidth = useWindowDimensions().width;
    const slideAnimation = useRef(new Animated.Value(0)).current;

    const slideDown = () => {
        Animated.timing(slideAnimation, {
            toValue: 550,
            duration: 250,
            useNativeDriver: false,
        }).start();
        setShowPage(true);
    };

    const slideUp = () => {
        Animated.timing(slideAnimation, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false
        }).start();
        setShowPage(false);
    };

    return (
        <View style={styles().main}>
            <Pressable onPress={showPage ? slideUp : slideDown}>
                {
                    showPage ?
                        <Icon name="expand-arrow" height="40" width="40" />
                        : <Icon name="expand-button" height="40" width="40" />
                }
            </Pressable>
            <Animated.View
                style={[styles(windowHeight, windowWidth).formPage, { height: slideAnimation }]}>
                <TodoForm />
            </Animated.View>
        </View>
    );
}

const styles = (windowHeight, windowWidth) => StyleSheet.create({
    main: {
        flex: 1,
        top: 60,
        alignItems: 'center',
    },
    formPage: {
        borderColor: '#000000',
        overflow: 'hidden',
        marginTop: 30,
        width: windowWidth,
        alignItems: 'center',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    }
});