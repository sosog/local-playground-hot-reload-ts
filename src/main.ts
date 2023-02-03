import './style.css'
import { setupCounter } from './counter'
import { playground } from "./playground";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="playground">
        
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`
playground();
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
