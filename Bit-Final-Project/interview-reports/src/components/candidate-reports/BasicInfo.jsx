import "./BasicInfo.css";
import { format } from "date-fns";

const BasicInfo = (info) => {
  const formatDate = () => {
    if (info && info.data && info.data.birthday) {
      return format(new Date(info.data.birthday), "MM-dd-yyyy");
    }

    return "";
  };

  // console.log(info.data.birthday)
  return (
    <div className="container info-card">
      <div className="candidate-image">
        <img src={info.data.avatar} alt="" />
      </div>
      <div className="info">
        <div className="name">
          <p className="tag">Name:</p>
          <h3>{info.data.name}</h3>
        </div>
        <div className="dob">
          <p className="tag">Birthday</p>
          <h3>{formatDate()}</h3>
        </div>

        <div className="email-education">
          <div className="email">
            <p className="tag">Email:</p>
            <h3>{info.data.email}</h3>
          </div>
          <div className="education">
            <p className="tag">Education:</p>
            <h3>{info.data.education}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
