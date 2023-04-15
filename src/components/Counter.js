import React, { useState, useEffect } from "react";
function Counter() {
  const slider = document.getElementById("fill");
  const [min, setMin] = useState(10);
  const [sec, setSec] = useState(0);
  const [fillwidth, setWidth] = useState(100);
  let timer;
  useEffect(() => {
    if (min >= 0) {
      timer = setInterval(() => {
        setSec(sec - 1);
        setWidth(((min * 60 + sec) / 600) * 100);
        if (sec === 0) {
          setMin(min - 1);
          setSec(59);
        }
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setMin(0);
      setSec(0);
    }
  });
  if (slider === null) {
  } else {
    slider.style.width = fillwidth + "%";
  }
  if (fillwidth < 50) {
    slider.classList.add("bg-warning");
  }
  if (fillwidth < 20) {
    slider.classList.remove("bg-warning");
    slider.classList.add("bg-danger");
  }
  if (min === 0 && sec === 0) {
    document.getElementById("submit").setAttribute("disabled", "true");

    document.getElementById("alert").classList.remove("d-none");
  }
  return (
    <>
      <div className="mt-4" id="counter">
        <h6>
          {min < 10 ? "0" + min : min}:{sec < 10 ? "0" + sec : sec} Minutes
          Remaining
        </h6>
      </div>
      <div className="countdown w-75">
        <div className="fill" id="fill"></div>
      </div>
    </>
  );
}
export default Counter;
