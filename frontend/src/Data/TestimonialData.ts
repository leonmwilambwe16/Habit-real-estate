import img1 from '../assets/john.jpg'
import img2 from '../assets/jane.jpg'
import img3 from '../assets/michel.png'
import img4 from '../assets/emily.png'


export interface Testimonial {
  id: number;
  name: string;
  picture: string;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    picture: img1,
    testimonial:
      "This service completely exceeded my expectations! The team was professional, efficient, and friendly.",
  },
  {
    id: 2,
    name: "Jane Smith",
    picture: img2,
    testimonial:
      "I love how easy it was to get started. The results have been amazing, and I’ll definitely recommend it to others.",
  },
  {
    id: 3,
    name: "Michael Brown",
    picture: img3,
    testimonial:
      "Fantastic experience from start to finish. I’ve never seen such attention to detail and care for customers.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    picture: img4,
    testimonial:
      "They went above and beyond to help me. I couldn’t be happier with the results!",
  },
];
