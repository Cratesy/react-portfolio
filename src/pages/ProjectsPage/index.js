import Card from "../../components/Card";

const ProjectsPage = () => {
  return (
    <div className="project-content">
      <h2 className="project">Projects</h2>
      <div className="card-container">
        <Card
          name="Pixel"
          url="https://fast-shelf-77951.herokuapp.com/"
          image="./assets/img/Team P1xel.jpg"
          alt="pixel team"
        />

        <Card
          name="Travel Companion"
          url="https://natasha-mann.github.io/travel-app/"
          image="./assets/img/travel companion.jpg"
          alt="Travel Companion"
        />

        <Card
          name="Pridely"
          url=""
          image="./assets/img/Project coming soon.jpg"
          alt="Project coming soon"
        />

        <Card
          name="Tech Blog"
          url="https://stormy-bayou-37854.herokuapp.com/"
          image="./assets/img/Tech-blog.jpg"
          alt="Tech Blog"
        />

        <Card
          name="Workout Tracker"
          url="https://frozen-falls-54533.herokuapp.com/"
          image="./assets/img/workout tracker.jpg"
          alt="workout tracker"
        />

        <Card
          name="Ecommerce-backend"
          url="https://github.com/Cratesy/E-Commerce-Back-End"
          image="./assets/img/Ecommerce.PNG"
          alt="Ecommerce-backend"
        />
      </div>
    </div>
  );
};

export default ProjectsPage;
