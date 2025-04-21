import { Groups } from '@screens/Groups';
import Theme from '@theme/index';
import { ThemeProvider } from 'styled-components';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
    <Groups/>
    </ThemeProvider>
  );
}

