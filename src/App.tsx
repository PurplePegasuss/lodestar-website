import { Navigate, Route, Routes } from 'react-router-dom';
import './i18n';
import { Center, Image } from '@chakra-ui/react';

const App = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Center height="100vh">
          <Image src="/logo.svg" width="50%" />
        </Center>
      }
    />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default App;
