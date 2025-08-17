export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          About Me
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Hello! I'm Vivek, a passionate developer and creative thinker based in [Your Location]. 
            I love building things that live on the internet, whether that be websites, applications, or anything in between.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            My journey in technology began [X] years ago when I first discovered my passion for coding. 
            Since then, I've had the privilege of working on a variety of projects that have helped me 
            grow both professionally and personally.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            When I'm not coding, you can find me [your hobbies/interests]. I believe in continuous learning 
            and staying up-to-date with the latest technologies and best practices in the industry.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect or collaborate on something interesting!
          </p>
        </div>
      </div>
    </div>
  );
}
