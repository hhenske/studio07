import { StyledButton } from "./Components/Button.styles";
import { AppContainer } from "./Components/Container.styles";
import {GlobalStyle} from './GlobalStyle.styles';


function App () {
  return (
    <AppContainer>
     <GlobalStyle />
     <StyledButton 
        buttonLabel="Click Here" 
        backgroundColor="violet">
     </StyledButton>
    </AppContainer>
  );
}

export default App;
