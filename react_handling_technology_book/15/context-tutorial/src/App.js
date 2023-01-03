import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors></SelectColors>
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
