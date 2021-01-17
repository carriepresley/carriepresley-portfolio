import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const StyledCard = styled.div`
  .card-floating {
    width: 350px;
    height: 420px;
    background: grey;
    border-radius: 5px;
    background-image: url(https://res.cloudinary.com/carriepresley/image/upload/v1610662333/carriepresley/MePolaroid_h9rjdp.jpg);
    background-size: cover;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
    will-change: transform;
   
   
    
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);

    @media (max-width: 768px) {
      z-index: -1;
      margin-top: 50px;
      position: relative;
    }
  }

  .card-floating:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <StyledCard>
      <animated.div
        class="card-floating"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    </StyledCard>
  );
}

export default Card;
