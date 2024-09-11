import {
  Box,
  CardBody,
  CardHeader,
  Card as ChakraCard,
  Heading,
  Text,
} from "@chakra-ui/react";
 
import { BiRuler, BiSolidCalculator, BiSolidCalendar } from "react-icons/bi";

const features = [
  {
    title: "Precision and Innovation",
    icon: <BiRuler color="#1162DA" fontSize={"3rem"} />,
    description:
      " Our cutting-edge technology and attention to detail ensure that ourdesigns are visually stunning but also structurally sound and feasible.",
  },
  {
    title: "Timely Project Completion",
    icon: <BiSolidCalendar color="#1162DA" fontSize={"3rem"} />,
    description:
      "We pride ourselves on delivering projects on time, without compromising on quality, so you can move into your dream home as planned.",
  },
  {
    title: "Tailored to Your Desired Vision",
    description:
      "We work closely with you to ensure every aspect of the design reflects your personal preferences and lifestyle needs, creating a truly custom home.",
    icon: <BiSolidCalculator color="#1162DA" fontSize={"3rem"} />,
  },
];

export default function Card() {
  return features.map((feature) => (
    <ChakraCard
      width={"290px"}
      border={"2px solid #E8F1FF"}
      borderRadius={"10px"}
      padding={"1.2rem"}>
      <CardHeader >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        marginY={'1.2rem'}>
          <Box
            backgroundColor={"#E8F1FF"}
            padding={"1.2rem"}
            borderRadius={"50%"}>
            {feature.icon}
          </Box>
          <Heading
            color={"#0D203D"}
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{base:"1.2rem", md:"1.7rem"}}
            as={"h3"}>
            {feature.title}
          </Heading>
        </Box>
      </CardHeader>
      <CardBody>
        <Text lineHeight={1.5} color={"#0D203D"}>
          {feature.description}
        </Text>
      </CardBody>
    </ChakraCard>
  ));
}
