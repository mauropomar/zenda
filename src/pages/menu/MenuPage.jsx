import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    StatusBar,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import { BottomPopup } from '../../components/modal/BottomPopup'

const popupList = [{
    id: 1,
    name: 'Task'
}, {
    id: 2,
    name: 'Mesage'
}, {
    id: 3,
    name: 'Note'
}]

const MenuPage = () => {
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
                <BottomPopup
                    title="Demo Popup"
                    ref={(target) => popupRef = target}
                    onTouchOutside={onClosePopup}
                    data={popupList}
                >
                </BottomPopup>
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

export default MenuPage