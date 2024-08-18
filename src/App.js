import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersStatuses from './AdminPanel/UserStatuses/UsersStatuses';
import ClientsStatistic from './AdminPanel/ClientsStatistic/ClientsStatistic';
import ClientsRequests from './AdminPanel/ClientRequests/ClientsRequests';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Админ панель</p>

        <table width="100%">
          <thead>
            <tr>
              <th>
                <a className="AppHeaderLink"
                  href="./clients_requests"
                  rel="noopener noreferrer">
                  Запросы на обслуживание
                </a>
              </th>
              <th>
                <a className="AppHeaderLink"
                  href="./user_statuses"
                  rel="noopener noreferrer">
                  Статусы пользователей
                </a>
              </th>
              <th>
              <a className="AppHeaderLink"
                  href="/clients_statistic"
                  rel="noopener noreferrer">
                  Статистика посещений
                </a>
              </th>
            </tr>
          </thead>
        </table>
      </header>

      <Router>
        <Routes>
        <Route path="/clients_requests" element={<ClientsRequests />} />
         <Route path="/user_statuses" element={<UsersStatuses />} />
         <Route path="/clients_statistic" element={<ClientsStatistic />} />
        </Routes>
      </Router>

        
    </div>
  );
}

export default App;
