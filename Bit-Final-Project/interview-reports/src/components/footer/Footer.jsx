import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer p-3 mt-5">
      <h3 className="p-2 text-center text-white">Created By</h3>
      <hr />
      <div className="footerValue d-flex justify-content-evenly">
        <p><a className="text-white" href="https://github.com/jovandavidovic12">Jovan Davicović</a></p>
        <p><a className="text-white" href="https://github.com/AnesKostreba">Anes Koštreba</a></p>
        <p><a className="text-white" href="https://github.com/tkablar">Tamara Kablar</a></p>
        <p><a className="text-white" href="https://github.com/ljmilosevic">Ljiljana Milošević</a></p>
      </div>
    </div>
  );
};
