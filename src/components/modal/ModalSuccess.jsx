import React from 'react';
import { View, StyleSheet, Modal, Image, Animated } from 'react-native';
import StyledText from '../input/StyledText';

const ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toogleModal()
    }, [visible])

    const toogleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    }

    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>
                <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )

};

export default function ModalSuccess(props) {
    const [visible, setVisible] = React.useState(false);
    React.useEffect(() => {
        setVisible(props.isOpen);
        console.log(props.isOpen);
    }, [props.isOpen])

    const onHideModal = () => {
        props.biRef.onHideModalSuccess();
    }

    return (
        <View style={styles.container}>
            <ModalPopup visible={visible}>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.header}>
                        <StyledText align='center' onPress={() => onHideModal()} style={{ fontSize: 24 }}>X</StyledText>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../assets/icons/success.png')}
                        style={{ height: 150, width: 150, marginVertical: 10 }}
                    ></Image>
                </View>
                <StyledText align='center' style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }} >Congratulations authentication was succesful</StyledText>
            </ModalPopup>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'absolute'
    },
    modalBackGround: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20
    },
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});