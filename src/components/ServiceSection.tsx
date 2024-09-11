import { Button, Container, Text } from "@chakra-ui/react";
import Service from "./Service";
import plans from "../assets/plans.png";
import execution from "../assets/execution.png";
import estimation from "../assets/estimation.png";
export default function ServiceSection() {
  return (
    <Container marginBottom={'2rem'}>
      <Text textAlign={"center"} fontSize={"2rem"}color={"#1162DA"} fontWeight={"bold"}>Our Services</Text>
      <Service image={plans} title="2D & 3D House Plans">
        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            Custom 2D Design:{" "}
          </span>
          Detailed architectural layouts that provide a clear understanding of
          the spatial arrangement and dimensions of your future home.
        </Text>
        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            3D Visualization:
          </span>
          Realistic 3D models that help you visualize the final look of your
          home before construction begins. This service helps clients see the
          design in full detail, including interior and exterior views.
        </Text>

        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            Revisions and Modifications:{" "}
          </span>
          Allow clients to request changes to the designs until they are fully
          satisfied.
        </Text>
      </Service>
      <Service reverse={true} title="On-Site Execution" image={execution}>
        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            End-to-End Project Management:{" "}
          </span>
          End-to-End Project Management: From foundation to finishing, we
          oversee every aspect of the construction process.
        </Text>
        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            Skilled Construction Team:
          </span>
          Experienced builders who bring your plans to life with precision and
          expertise
        </Text>

        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            Collaboration with Contractors:{" "}
          </span>
          Coordination with trusted contractors and suppliers to ensure a smooth
          building process.
        </Text>
      </Service>
      <Service title="Cost Estimation" image={estimation}>
        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            Accurate Building Cost Estimates:{" "}
          </span>
          We provide detailed estimates that cover every aspect of construction,
          from materials to labor.
        </Text>
        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            Budget Planning:
          </span>
          We help you plan your budget to avoid unexpected costs and ensure your
          project stays within financial limits.
        </Text>

        <Text>
          <span
            style={{
              color: "#0D203D",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}>
            Material Recommendations:{" "}
          </span>
          Suggestions for cost-effective materials without compromising on
          quality.
        </Text>
      </Service>
      <Button fontSize={'1.2rem'} fontWeight={'bold'} borderRadius={'5rem'} border={'none'} textAlign={'center'} width={'fit-content'} padding={'1rem 2rem'} background={'#1162DA'} color={'#E8F1FF'}>Contact Us</Button>
    </Container>
  );
}
