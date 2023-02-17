import React from 'react';
import { Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, View, Pressable } from 'react-native'
import StyledText from '../input/StyledText';

const deviceHeight = Dimensions.get('window').height;
export class ModalConfirm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({ show: true });
    }

    close = () => {
        this.setState({ show: false });
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view;

        return (
            <TouchableWithoutFeedback onPress={onTouch}
                style={{ flex: 1, width: '100%' }}
            >
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderTitle = () => {
        const { title } = this.props;
        return (
            <View>
                <StyledText color='black' align='center' fontWeight='bold' fontSize='heading' style={styles.title}>{title}</StyledText>
            </View>
        )
    }

    renderContent = () => {
        const { message, onAccept } = this.props;
        return (
            <View style={styles.container}>
                <StyledText align='center' style={styles.message}>{message}</StyledText>
                <View style={styles.containerButton}>
                    <Pressable style={styles.buttonCancel} onPress={this.close}>
                        <StyledText color='white' align='center' fontWeight='bold' style={styles.textCancel}>Cancel</StyledText>
                    </Pressable>
                    <Pressable style={styles.buttonAccept} onPress={onAccept}>
                        <StyledText color='white' align='center' fontWeight='bold' style={styles.textAccept}>Aceptar</StyledText>
                    </Pressable>
                </View>
            </View>
        )
    }

    render() {
        let { show } = this.state;
        const { onTouchOutside, title } = this.props;
        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: '#000000AA',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '70%',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        position: 'absolute',
                        maxHeight: deviceHeight
                    }}>
                        {this.renderTitle()}
                        {this.renderContent()}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    buttonCancel: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginRight:10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },
    textCancel: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
    },
    buttonAccept: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    },
    textAccept: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
    },
    message: {
        marginVertical: 30,
        fontSize: 15,
        textAlign: 'center',
    }
});