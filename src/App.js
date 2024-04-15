import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TrackYourGoal, GetBurn, GoalsPage, Signin, Signup, WorkoutSchedule, WorkoutTracker } from "./pages/index"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TrackYourGoal />}/>
        <Route path="/get-burn" exact element={<GetBurn />}/>
        <Route path="/goals-page" exact element={<GoalsPage />}/>
        <Route path="/sign-in" exact element={<Signin />}/>
        <Route path="/sign-up" exact element={<Signup />}/>
        <Route path="/workout-schedule" exact element={<WorkoutSchedule />}/>
        <Route path="/workout-tracker" exact element={<WorkoutTracker />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
