import React, { useState } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import StyledText from "../input/StyledText";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";

const CardCommunication = () => {
  const [showRealApp, setShowRealApp] = useState(true);

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Image style={styles.introImageStyle} source={item.image} />
        <View style={styles.introFooter}>
          <StyledText style={styles.introTextStyle}>{item.text}</StyledText>
          <TouchableOpacity>
            <StyledText style={{color:'blue', marginLeft: 10, marginTop: 3}}>Ver más..</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={false}
          showNextButton={false}
          showPrevButton={false}
          showDoneButton={false}
          onSkip={onSkip}
        />
      </SafeAreaView>
    </>
  );
};

export default CardCommunication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFCFC",
    shadowColor: "black",
    shadowOpacity: 0.2,
    borderRadius: 10,
    elevation: 8,
    margin: 10,
    padding: 15,
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    flex: 1,
  },
  introTextStyle: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    paddingVertical: 2,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
  introFooter:{
      flexDirection:'row',
  }
});

const slides = [
  {
    key: "s1",
    text: "Best Recharge offers",
    title: "Mobile Recharge",
    image: require("../../../assets/images/communication.png"),
    backgroundColor: "#20d2bb",
  },
  {
    key: "s2",
    title: "Flight Booking",
    text: "Upto 25% off on Domestic Flights",
    image: require("../../../assets/images/communication2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "Great Offers",
    text: "Enjoy Great offers on our all services",
    image: require("../../../assets/images/communication3.jpg"),
    backgroundColor: "#22bcb5",
  },
];
