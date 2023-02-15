import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { ModalMessage } from '../../components/modal/ModalMessage';


export default function DocumentPage() {
    let popupRef = React.createRef();

    const onShowPopup = () => {
        popupRef.show();
    }

    const onClosePopup = () => {
        popupRef.close();
    }

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={styles.container}>
                <TouchableWithoutFeedback onPress={onShowPopup}>
                    <Text style={styles.txtSize}>Show Popup</Text>
                </TouchableWithoutFeedback>
                <ModalMessage
                    title="Solicitud Enviada"
                    message="La solicitud de anticipo fue enviada con éxito"
                    type="success"
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                >
                </ModalMessage>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtSize: {
        fontSize: 20
    }
});