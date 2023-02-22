import React from 'react';
import { Modal, Dimensions, TouchableWithoutFeedback, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import StyledText from '../input/StyledText';

const data = [
    {
        id: '1',
        title: 'Aprobar',
        icon: 'checkmark-done-outline'
    }
];

const deviceHeight = Dimensions.get('window').height;
export class PopupApproved extends React.Component {
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
                    fontWeight: 'bold',
                    marginTop: 15,
                    marginBottom: 10
                }}>
                    {title}
                </Text>
            </View>
        )
    }

    renderContent = () => {
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
        const { onSelectItem } = this.props;

        const onSelectMenu = () =>{
            onSelectItem(item) 
        }
        
        return (
            <TouchableOpacity onPress={onSelectMenu}>
                <View style={styles.item}>
                    <Ionicons name={item.icon} size={28} color="black" style={styles.image} />
                    <StyledText align='left' style={styles.title}>{item.title}</StyledText>
                </View>
            </TouchableOpacity>
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
        const { onTouchOutside } = this.props;
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
                        maxHeight: deviceHeight * 0.2
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
    item: {
        padding: 10,
        flexDirection: 'row',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    description: {
        fontSize: 14,
    },
    image: {
        marginVertical: 10,
        marginRight: 10
    }
});