import React from 'react';
import { Modal, Dimensions, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import StyledText from '../input/StyledText';

const deviceHeight = Dimensions.get('window').height;
export class ModalMessage extends React.Component {
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
        const { type, message } = this.props;
        const src = type === 'success' ? require('../../../assets/icons/success.png') : require('../../../assets/icons/error.png');
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={src}
                        style={{ height: 100, width: 100, marginVertical: 10 }}
                    ></Image>
                </View>
                <StyledText align='center' style={styles.message} >{message}</StyledText>
                <TouchableOpacity onPress={this.close}>
                    <StyledText align='right' style={styles.back}>Volver</StyledText>
                </TouchableOpacity>
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
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        marginTop: 20,
        marginBottom: 30
    },
    message: {
        marginTop: 20,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 20,
    },
    back: {
        marginBottom: 20,
        marginRight: 20,
        textAlign: 'right',
        fontSize: 13,
    }
});