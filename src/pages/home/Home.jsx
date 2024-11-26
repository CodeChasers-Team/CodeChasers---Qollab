import FirstHero from "../../components/home/FirstHero";
import Navbar from "../../components/Navbar";
import SecondHero from "../../components/home/SecondHero";
import Features from "../../components/home/Features";
import FeaturesRev from "../../components/home/FeaturesRev";
import DeveloperCard from "../../components/home/DeveloperCard";
import Footer from "../../components/Footer";

const HomePage = () => {
  const features = {
    "title" : ["User Analytics", "Quiz Features", "Room"],
    "desc" : ["Gain valuable insights into learning patterns and performance with Qollab's advanced user analysis tools. Track progress, identify trends, and optimize learning experiences through our comprehensive analytics suite.", "Transform your learning experience with Qollab's innovative quiz features. Our platform combines collaborative learning with interactive assessments to create engaging and effective learning experiences.", "Connect and learn together in Qollab's interactive quiz rooms. Create or join dedicated spaces for collaborative learning, challenges, and group assessments."],
    "image" : ["../assets/home/user-analytics.png", "../assets/home/quiz.png", "../assets/home/room.png"]
  }

  const developers = [
    {
      "name" : "Syardi Dzikri",
      "role" : "Hipster Web",
      "image" : "/dzikri.png"
    },
    {
      "name" : "Ageng Prayoga",
      "role" : "Hacker Web",
      "image" : "ageng.png"
    },
    {
      "name" : "Fauzan Azima",
      "role" : "Project Manager",
      "image" : "fauzan.png"
    },
    {
      "name" : "Daniel Manulu",
      "role" : "Hacker Mobile",
      "image" : "daniel.png"
    },
    {
      "name" : "Oktavia Letisya",
      "role" : "Hipster Mobile",
      "image" : "okta.png"
    },
  ]

  return (
    <>
      <Navbar></Navbar>
      <section>
          <FirstHero/>
          <SecondHero/>
          <Features title={features.title[0]} desc={features.desc[0]} image={features.image[0]}/>
          <FeaturesRev title={features.title[1]} desc={features.desc[1]} image={features.image[1]}/>
          <Features title={features.title[2]} desc={features.desc[2]} image={features.image[2]}/>
          <div className="flex flex-col justify-center items-center mb-10">
            <h2 className="-text-primary-600 font-bold text-[36px] mb-4">Developer Team</h2>
            <div className="flex justify-between">
              {developers.map((value, index) => (
                <DeveloperCard image={value.image} name={value.name} role={value.role} key={index}/>
              ))}
            </div>
          </div>
          <Footer/>
      </section>
    </>
  );
};
export default HomePage;
