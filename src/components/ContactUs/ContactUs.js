import React from "react";
import { NativeBaseProvider, Center, ScrollView } from "native-base";

import { useBreakpointValue, Text, VStack } from "native-base";
import { View } from "react-native";
import FindUs from "./FindUs";
import { ByMail } from "./ContactUsByMail";
import { ByPhone } from "./ContactUsByPhone";
import { TermsAndConditions } from "../random/TermsAndConditions";
import MonthlySub from "../Renting/MonthlySub/MonthlySub";
import AdventurePass from "../Renting/AdventurePass/AdventurePass";
import SingleTrip from "../Renting/SingleTrip/SingleTrip";
import AdventurePassDetails from "../Renting/AdventurePass/AdventurePassDetails";

export const ContactUs = () => {
  const flexDir = useBreakpointValue({
    base: "column",
    lg: "row",
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack py="8" space={8} alignItems="center" justifyContent="center">
        <View style={{ flexDirection: flexDir }}>
          <ByPhone></ByPhone>
          <ByMail></ByMail>
        </View>
        {/* <TermsAndConditions></TermsAndConditions> */}
        <FindUs></FindUs>
        <MonthlySub></MonthlySub>
        <AdventurePass></AdventurePass>
        <SingleTrip></SingleTrip>
        <AdventurePassDetails></AdventurePassDetails>
      </VStack>
    </ScrollView>
  );
};

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <ContactUs />
      </Center>
    </NativeBaseProvider>
  );
}
