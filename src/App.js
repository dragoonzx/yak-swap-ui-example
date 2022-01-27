import { MoralisProvider } from "react-moralis";
import YakSwap from "@yak-spirit/yak-swap-ui";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <MoralisProvider
      appId={process.env.REACT_APP_MORALIS_ID}
      serverUrl={process.env.REACT_APP_MORALIS_SERVER}
    >
      <YakSwap />
    </MoralisProvider>
  );
};

export default App;
