import { View, Text, StyleSheet, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import DateUtil from '../../utils/date';
import StyledText from '../input/StyledText';


const Header = ({ props }) => {
    return (
        <View style={styles.header}>
            <View style={styles.headertitle}>
                <Image source={require('../../../assets/icons/beach_vacation.png')} style={styles.iconLeft} />
                <StyledText>Dias a tomar</StyledText>
            </View>
            <View style={styles.headerdays}>
                <StyledText fontWeight="bold" style={{ marginVertical: 3, marginHorizontal: 2 }}>{props.days}</StyledText>
                <StyledText style={{ marginVertical: 3, marginHorizontal: 2 }}>días de</StyledText>
                <StyledText fontWeight="bold" style={{ marginVertical: 3, marginHorizontal: 2 }}>{props.totalDays}</StyledText>
            </View>
            <View>
                <MaterialIcons name="expand-more" size={24} color="black" style={styles.iconRight} />
            </View>
        </View>
    )
}

const Content = ({ props }) => {
    const daysRegularsText = `${props.regularStartDays} de ${props.regularLimitDays}`;
    const daysProgressiveText = `${props.progressiveStartDays} de ${props.progressiveLimitDays}`;
    const daysAditionalText = `${props.aditionalStartDays} de ${props.aditionalLimitDays}`;
    const dateIncorporate = DateUtil.convertToString(props.incorporateDate, 'DD/MM/YYYY');

    return (
        <View style={styles.content}>
            <View style={styles.itemcontent}>
                <StyledText>Días regulares</StyledText>
                <StyledText fontWeight="bold">{daysRegularsText}</StyledText>
            </View>
            <View style={styles.itemcontent}>
                <StyledText>Días progresivos</StyledText>
                <StyledText fontWeight="bold">{daysProgressiveText}</StyledText>
            </View>
            <View style={styles.itemcontent}>
                <StyledText>Días adicionales</StyledText>
                <StyledText fontWeight="bold">{daysAditionalText}</StyledText>
            </View>
            <View style={styles.itemcontent}>
                <StyledText>Te incorporas el</StyledText>
                <StyledText fontWeight="bold">{dateIncorporate}</StyledText>
            </View>
        </View>
    )
}

export default function DayTakeCollapse(props) {
    return (
        <View style={styles.container}>
            <Collapse>
                <CollapseHeader>
                    <Header props={props} />
                </CollapseHeader>
                <CollapseBody>
                    <Content props={props}/>
                </CollapseBody>
            </Collapse>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        marginVertical: 10,
        elevation: 3
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50
    },
    headertitle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10
    },
    headerdays: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10
    },
    iconLeft: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: -5
    },
    iconRight: {
        marginLeft: 5,
        marginRight: 10,
        marginTop: 6
    },
    content: {
        margin: 10,

    },
    itemcontent: {
        marginVertical: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
