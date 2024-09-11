 

import estimation from "../assets/estimation.png";
import plans from "../assets/plans.png";
import execution from "../assets/execution.png";

export default function Service() {
  return (
    <>
    <div className="grid max-w-[350px] md:max-w-[600px] lg:max-w-[100%] mx-auto lg:grid-cols-[1fr_2fr] gap-3 text-[1rem] text-blue-950 shadow-[0px_2px_5px_0px_rgba(34, 17, 192, 0.1)] bg-blue-50 my-5 ">
      <img
        src={plans}
        alt="Image"
        />
      <div className="px-[10px] py-2">
        <h2 className="font-bold text-blue-950 text-[1.2rem] mb-2">2D & 3D House Plans</h2>
        <p>
          <span className="text-blue-950 font-bold">Custom 2D Design: </span>Detailed architectural layouts that provide a clear understanding of the spatial arrangement and dimensions of your future home.
        </p>
        <p>
          <span className="text-blue-950 font-bold">3D Visualization:  </span>Realistic 3D models that help you visualize the final look of your home before construction begins. This service helps clients see the design in full detail, including interior and exterior views.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Revisions and Modifications: </span>Allow clients to request changes to the designs until they are fully satisfied.
        </p>
       
      </div>
    </div>
    <div className="grid max-w-[350px] md:max-w-[600px] lg:max-w-[100%] mx-auto lg:grid-cols-[2fr_1fr] gap-3 text-[1rem] text-blue-950 shadow-[0px_2px_5px_0px_rgba(34, 17, 192, 0.1)] bg-blue-50 my-5 ">
      
      <div className="px-[10px] py-2">
        <h2 className="font-bold text-blue-950 text-[1.2rem] mb-2">On-Site Execution</h2>
        <p>
          <span className="text-blue-950 font-bold">End-to-End Project Management: </span>From foundation to finishing, we oversee every aspect of the construction process, ensuring high-quality standards and timely completion.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Skilled Construction Team:   </span>A team of experienced builders who bring your plans to life with precision and expertise.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Collaboration with Contractors: </span>Coordination with trusted contractors and suppliers to ensure a smooth building process.
        </p>
       
        </div>
        <img
        src={execution}
        alt="Image"
        />
    </div>
    <div className="grid max-w-[350px] md:max-w-[600px] lg:max-w-[100%] mx-auto lg:grid-cols-[1fr_2fr]  gap-3 text-[1rem] text-blue-950 shadow-[0px_2px_5px_0px_rgba(34, 17, 192, 0.1)] bg-blue-50 my-5 ">
      <img
        src={estimation}
        alt="Image"
        />
      <div className="px-[10px] py-2">
        <h2 className="font-bold text-blue-950 text-[1.2rem] mb-2">Cost Estimation</h2>
        <p>
          <span className="text-blue-950 font-bold">Accurate Building Cost Estimates: </span>We provide detailed estimates that cover every aspect of construction, from materials to labor, so you know what to expect financially.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Budget Planning:  </span>We help you plan your budget to avoid unexpected costs and ensure your project stays within financial limits.
        </p>
        <p>
          <span className="text-blue-950 font-bold">Material Recommendations: </span>Suggestions for cost-effective materials without compromising on quality.
        </p>
       
      </div>
    </div>
        </>
  );
}
