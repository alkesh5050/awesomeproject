import React, { useCallback } from 'react';
import { Alert, Button, Linking, StyleSheet, View } from 'react-native';

const supportedURL = 'https://google.com';

const unsupportedURL = 'slack://open?team=123456';

const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
        try {
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Don't know how to open this URL: ${url}`);
            }
        } catch (error) {
            Alert.alert(`An error occurred: ${error.message}`);
        }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
};

export default function Linking1() {
    return (
        <View style={styles.container}>
            <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
            <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
