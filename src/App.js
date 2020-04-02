import { h, Fragment } from "preact";
import { Home } from "./Home";

const canUseDOM = typeof window !== 'undefined';

export const App = () => (
    <Fragment>
        <Home  />
        {canUseDOM ? <div style={{ color: 'red' }}>This is only rendered on the client side</div> : null}
    </Fragment>
);
