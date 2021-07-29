import { Switch, Route } from "react-router-dom";

import ContactMePage from "./pages/ContactMePage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AboutMePage />
      </Route>
      <Route exact path="/contact-me">
        <ContactMePage />
      </Route>
      <Route exact path="/projects">
        <ProjectsPage />
      </Route>
    </Switch>
  );
};

export default Routes;
