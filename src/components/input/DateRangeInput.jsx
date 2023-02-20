import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import DateUtil from "../../utils/date";
import StyledText from "./StyledText";
import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need




const DateRangeInput = () => {
    const [value, setValue] = useState("");
    const [range, setRange] = React.useState({ startDate: undefined, endDate: undefined });
    const [open, setOpen] = React.useState(false);

    const onDismiss = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirm = React.useCallback(
        ({ startDate, endDate }) => {
            setOpen(false);
            setRange({ startDate, endDate });
            const start = DateUtil.convertToString(startDate, "DD/MM/YYYY");
            const end = DateUtil.convertToString(endDate, "DD/MM/YYYY");
            const text = `${start} - ${end}`;
            setValue(text)
        },
        [setOpen, setRange]
    );

    const showDatePicker = () => {
        setOpen(true);
    };

    return (
        <SafeAreaProvider>
            <View>
                <TouchableOpacity onPress={showDatePicker} style={styles.button}>
                    <StyledText color='black' align='left' fontSize='heading' style={styles.textInput}>{value}</StyledText>
                    <View style={styles.icon}>
                        <MaterialIcons name="date-range" size={30} color="black" />
                    </View>
                </TouchableOpacity>
                <DatePickerModal
                    locale="es"
                    mode="range"
                    visible={open}
                    onDismiss={onDismiss}
                    startDate={range.startDate}
                    endDate={range.endDate}
                    onConfirm={onConfirm}
                />
            </View>
        </SafeAreaProvider>
    );
};

export default DateRangeInput;


const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
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