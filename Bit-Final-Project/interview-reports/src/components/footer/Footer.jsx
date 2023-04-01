import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer p-3 mt-5">
      <h3 className="p-2 text-center text-white">Created By</h3>
      <hr />
      <div className="footerValue d-flex justify-content-evenly">
        <p>Jovan Davicović</p>
        <p>Anes Koštreba</p>
        <p>Tamara Kablar</p>
        <p>Ljiljana Milošević</p>
      </div>
    </div>
  );
};
