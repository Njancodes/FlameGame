import { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function CandyRain() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const { Engine, Render, Runner, World, Bodies, Body, Events, Mouse, MouseConstraint, Query } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 1;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Ground
    const ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 50, window.innerWidth, 100, { isStatic: true });
    World.add(world, ground);

    // Candy colors
    const candyColors = ["#FF6FA5", "#ffeb7bff", "#aaea3dff", "#FF4500", "#8A2BE2", "#7FFF00"];

    function randomCandy() {
      const x = Math.random() * window.innerWidth;
      const y = -50;
      const size = 20 + Math.random() * 15;

      const shapeType = ["circle", "rectangle"][Math.floor(Math.random() * 2)];
      let candy;

      if (shapeType === "circle") {
        candy = Bodies.circle(x, y, size, {
          restitution: 0.7,
          render: { fillStyle: candyColors[Math.floor(Math.random() * candyColors.length)], lineWidth: 2 },
        });
      } else {
        candy = Bodies.rectangle(x, y, size * 2, size, {
          restitution: 0.7,
          render: { fillStyle: candyColors[Math.floor(Math.random() * candyColors.length)], lineWidth: 2 },
        });
      }

      // Store custom properties
      candy.isWrapped = true;
      candy.shapeType = shapeType;

      World.add(world, candy);
    }

    const candyInterval = setInterval(randomCandy, 800);

    // Mouse click to unwrap
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    World.add(world, mouseConstraint);

    Events.on(mouseConstraint, "mousedown", (event) => {
      const { mouse } = event.source;
      const pos = mouse.position;
      const clickedBodies = Query.point(world.bodies, pos);

      clickedBodies.forEach((body) => {
        if (body.isWrapped) {
          // Change color based on shape
          if (body.shapeType === "circle") {
            body.render.fillStyle = "#8B4513"; // brown
          } else if (body.shapeType === "rectangle") {
            body.render.fillStyle = "#f2af32ff"; // caramel
          }

          body.render.lineWidth = 4;
          body.isWrapped = false;
          Body.setVelocity(body, { x: (Math.random() - 0.5) * 10, y: -8 });
        }
      });
    });

    // Cleanup
    return () => {
      clearInterval(candyInterval);
      Render.stop(render);
      World.clear(world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} style={{ position: "fixed", top: 0, left: 0, zIndex: 1 }} />;
}
