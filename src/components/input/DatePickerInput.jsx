import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateUtil from "../../utils/date";
import StyledText from "./StyledText";

const DatePickerInput = () => {
    const [text, setText] = useState("Seleccione un periodo");
    const color = 'black';
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const value = DateUtil.convertToPeriodo(date);
        console.warn("A date has been picked: ", value);
        hideDatePicker();
    };

    return (
        <View>
            <TouchableOpacity onPress={showDatePicker} style={styles.button}>
                <StyledText color='black' align='left' fontSize='heading' style={styles.textInput}>{text}</StyledText>
                <View style={styles.icon}>
                    <MaterialIcons name="date-range" size={30} color={color} />
                </View>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DatePickerInput;


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 44
    },
    textInput: {
        marginTop: 10,
        marginLeft: 10
    },
    icon: {
        margin: 3
    }
});