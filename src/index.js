import { h, hydrate } from "preact";
import { App } from "./App";

hydrate(<App />, document.body, document.getElementById("app"));

