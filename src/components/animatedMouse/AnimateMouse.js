import './AnimateMouse.scss'

const AnimateMouse = () => {

    const html = document.querySelector("html");

    html.addEventListener("mousemove", function (e) {
        let circle = document.createElement('div');
        circle.setAttribute("id", "circle1");
        document.body.appendChild(circle);
        circle.style.left = e.clientX + 'px';
        circle.style.top = e.clientY + 'px';
        setTimeout(() => {
          circle.remove();
        }, "500")
      });
};

export default AnimateMouse;