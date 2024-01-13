import { Exchange } from "components/Exchange";
import { Header } from "components/Header";
import { ExchangeRatesProvider } from "context";

const App = () => (
  <div
    id="app-wrapper"
    className="bg-slate-800 grid auto-rows-min h-screen text-slate-300"
  >
    <Header
      title="Deus ex-Change Rate Machina"
      tag="Exchange rates made easy!"
    />
    <main className="px-8 py-4">
      <ExchangeRatesProvider>
        <Exchange />
      </ExchangeRatesProvider>
    </main>
  </div>
);

export { App };
