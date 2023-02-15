import React from 'react';
import { Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, View, Text, FlatList, Image } from 'react-native'
import StyledText from '../input/StyledText';

const deviceHeight = Dimensions.get('window').height;
export class BottomPopup extends React.Component {
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
                <Text style={{
                    color: '#182E44',
                    fontSize: 20,
                    fontWeight: '500',
                    marginTop: 15,
                    marginBottom: 30
                }}>
                    {title}
                </Text>
            </View>
        )
    }

    renderContent = () => {
        const { data } = this.props;
        return (
            <View>
                <FlatList
                    style={{ marginBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={this.renderSeparator}
                    contentContainerStyle={{
                        paddingBottom: 40
                    }}
                >
                </FlatList>
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image source={item.icon} style={styles.image} />
                <View>
                    <StyledText align='left' fontWeight='bold' style={styles.title}>{item.title}</StyledText>
                    <StyledText align='left' style={styles.description}>{item.description}</StyledText>
                </View>
            </View>
        )
    }

    renderSeparator = () => {
        <View style={{
            opacity: 0.1,
            backgroundColor: '#182E44',
            height: 1
        }}>
        </View>
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
                    justifyContent: 'flex-end'
                }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.4
                    }}>

                        {this.renderContent()}
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
    },
    description: {
        fontSize: 14,
    },
    image: {
        marginTop: 7,
        marginRight: 10
    }
});