import marouane from "../assets/Testimonial/marouaneZahaoui.jpeg";
import dounia from "../assets/Testimonial/dounia.jfif";

export const TestimonialArr = [
  {
    id: 0,
    image: dounia,
    name: "Belgazzar Wafae",
    short_desc: "Full stack web developer",
    long_desc:
      "Belgazzar Wafae 22 years old from morocco full stack javascript developer (React/Vue,Nodejs/express...)",
  },
  {
    id: 1,
    image: marouane,
    name: "Zahaoui Marouane",
    short_desc: "Full stack web developer",
    long_desc:
      "Marouane Zahaoui 22 years old from morocco full stack javascript developer (React/Vue,Nodejs/express...)",
  },
  {
    id: 2,
    image: dounia,
    name: "Mellouki dounya",
    short_desc: "Full stack web developer",
    long_desc:
      "Mellouki dounya 22 years old from morocco full stack javascript developer (React/Vue,Nodejs/express...)",
  },
];
export interface TestimonialType {
  id: number;
  image: string;
  name: string;
  short_desc: string;
  long_desc: string;
}
