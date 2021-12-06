import { AppProvider } from "./contexts/providers";
import Routes from "./routes/App.routes";
import GlobalStyles from "./shared/styles/global";
import { SnackbarProvider } from "notistack";
import { PlataformsProvider } from "./contexts/plataforms/plataformsContext";

function App() {
  return (
    <SnackbarProvider>
      <PlataformsProvider>
        <AppProvider>
          <GlobalStyles />
          <Routes />
        </AppProvider>
      </PlataformsProvider>
    </SnackbarProvider>
  );
}

export default App;
