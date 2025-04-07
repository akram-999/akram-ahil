
import './Testimonial.css';

const testimonials = [
  {
    author: {
      name: "Souhail ",
      handle: "@Souhail",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Working with Akram was a game changer. He’s fast, creative, and extremely professional.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "Anass Ferdoussi",
      handle: "@anass",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Akram turned our ideas into a beautiful, functional website. Highly recommended!",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "mohammed sbaii",
      handle: "@mohammed",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Very impressed by his skills in both frontend and design. The project was delivered ahead of time!"
  },
  {
    author: {
      name: "mohammed ahmed",
      handle: "@ahmed",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Akram brings a rare blend of development and creative design. It’s always a pleasure to work with him."
  }
]

// Duplicate testimonials for seamless loop
const doubledTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSectionDemo() {
  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h2>Trusted by developers worldwide</h2>
        <p>Join thousands of developers who are already building the future with our AI platform</p>
      </div>
      
      <div className="testimonials-container">
        <div className="testimonials-track">
          {doubledTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="author-info">
                <img 
                  src={testimonial.author.avatar} 
                  alt={testimonial.author.name} 
                  className="author-avatar"
                />
                <div>
                  <h4>{testimonial.author.name}</h4>
                  <p>{testimonial.author.handle}</p>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}