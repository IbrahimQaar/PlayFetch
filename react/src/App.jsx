import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView/HomeView';
import LoginView from './views/LoginView/LoginView';
import LogoutView from './views/LogoutView';
import RegisterView from './views/RegisterView/RegisterView';
import UserProfileView from './views/UserProfileView/UserProfileView';
import RegisterPetView from './views/RegisterPetView/RegisterPetView';
import PetView from './views/PetView/PetView';
import PetsView from './views/PetsView/PetsView';
import MainNav from './components/MainNav/MainNav';
import ProtectedRoute from './components/ProtectedRoute';
import ListPlaydatesView from './views/ListPlaydatesView/ListPlaydatesView';
import SchedulePlaydate from './views/SchedulePlaydate/SchedulePlaydate';
import TermsAndConditionsView from './views/TermsAndConditionsView/TermsAndConditionsView';
import UpdatePlaydateView from './views/UpdatePlaydateView/UpdatePlaydateView';
import UpdatePetView from './views/UpdatePetView/UpdatePetView';


export default function App() {

  return (
    <BrowserRouter>
      <div id="app">
          <MainNav />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/login" element={<LoginView />} />
              <Route path="/logout" element={<LogoutView />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/register-pet" element={<RegisterPetView />} />
              <Route path="/pet/:id" element={<PetView />} />
              <Route path="/pets" element={<PetsView />} />
              <Route path='/update-playdate/:playdateId' element={<UpdatePlaydateView/>}/>
              <Route path='/update-pet/:petId' element={<UpdatePetView/>}/>
              <Route path='/playdates/:id'
                element ={
                  <ProtectedRoute>
                    <ListPlaydatesView/>
                  </ProtectedRoute>
                } />
              <Route path='/schedule-playdate/:id' element={<SchedulePlaydate/>} />
              <Route path='/terms' element={<TermsAndConditionsView/>} />
              <Route
                path="/userProfile"
                element={
                  <ProtectedRoute>
                    <UserProfileView />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
      </div>
    </BrowserRouter>
  );
}
