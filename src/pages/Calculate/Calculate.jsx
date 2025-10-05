import { useState } from "react";
import './Calculate.css'

    export default function Calculate() {
      const [name1, setName1] = useState("");
      const [name2, setName2] = useState("");
      const [result, setResult] = useState("");

      function flamefunc(n1, n2) {
        let nameArr1 = n1.split("");
        let nameArr2 = n2.split("");
        let flame = "flame";
        let m = new Map();

        // Count letters in first name
        for (let ch of nameArr1) {
          m.set(ch, (m.get(ch) || 0) + 1);
        }

        // Count letters in second name
        for (let ch of nameArr2) {
          if (m.has(ch) && nameArr1.includes(ch)) {
            m.set(ch, 0);
          } else {
            m.set(ch, (m.get(ch) || 0) + 1);
          }
        }

        // Sum of counts
        let length = 0;
        m.forEach((v) => (length += v));

        // FLAME elimination logic
        let l = 0;
        while (flame.length > 1) {
          l = (length + l - 1) % flame.length;
          flame = flame.slice(0, l) + flame.slice(l + 1);
        }

        return flame;
      }

      function handleCalculate(e) {
        e.preventDefault();
        if (name1 && name2) {
          const res = flamefunc(name1.toLowerCase(), name2.toLowerCase());
          setResult(res);
        }
      }

      return (
        <div className="calculate-container">
          <h2>Flames Calculator</h2>
          <form onSubmit={handleCalculate}>
            <input
              type="text"
              placeholder="Your Name"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Their Name"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              required
            />
            <button type="submit">F L A M E S</button>
          </form>
          {result && <p>{result.toUpperCase()}</p>}
        </div>
      );
    }
