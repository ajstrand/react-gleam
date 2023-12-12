import { render } from "preact-render-to-string";
import Island from './Island'
import Counter from "./main.js";

export const renderComponent = async () => {
  const html = render(
  <Island componentName="Counter" islandTag='span'>
      <Counter count={4}/>
      {/* <div>hi from a server</div> */}
  </Island>
  )
  return { html }
}