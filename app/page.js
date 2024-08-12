"use client";
import useOnScreen from "./utils/useOnScreen";
import { useRef } from "react";
import Accordion from "./components/Accordion/Accordion";

export default function Home() {
  const ref = useRef(null);
  const visible = useOnScreen(ref)

  return (
    <main>
      <section>
        <h1>section1</h1>
        <div>
          <Accordion/>
        </div>
      </section>

      <section>
        <div>section 2</div>
      </section>

      <div ref={ref}>
        {" "}
        section 3
        <div className={`initial ${visible && 'show'}` }>section is visible : {visible.toString()}</div>
      </div>
    </main>
  );
}
