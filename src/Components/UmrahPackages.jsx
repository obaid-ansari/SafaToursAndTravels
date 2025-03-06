import React from "react";

const UmrahPackages = ({
  bgColor,
  textColor,
  tableColor,
  packageName,
  duration,
  price1,
  price2,
  price3,
  price4,
  meters1,
  meters2,
}) => {
  return (
    <>
      <div className="m-3">
        <h3 className={`text-center ${textColor} py-3`}>{packageName}</h3>
        <div className="container">
          <div className="row bg-light rounded-4 p-4 shadow text-center">
            <h4 className={`${textColor} mb-4 fw-bold`}>{duration}</h4>
            <div className="col-md-12 col-lg-6 p-3">
              {/* Responsive Table */}
              <div className="d-none d-md-block">
                <table className={`table-bordered ${tableColor} table w-100`}>
                  <thead>
                    <tr>
                      <th className="p-3">
                        Quint
                        <br />5 Person
                      </th>
                      <th className="p-3">
                        Quad
                        <br />4 Person
                      </th>
                      <th className="p-3">
                        Triple
                        <br />3 Person
                      </th>
                      <th className="p-3">
                        Double
                        <br />2 Person or Couple
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3">&#8377; {price1}</td>
                      <td className="p-3">&#8377; {price2}</td>
                      <td className="p-3">&#8377; {price3}</td>
                      <td className="p-3">&#8377; {price4}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile-Friendly View (Stacked Layout) */}
              <div className="d-block d-md-none">
                <div className={`${bgColor} rounded-3 mb-1`}>
                  <p className="fw-bold p-1">
                    Quint 5 Person <br />
                    <span className="fw-semibold">&#8377; {price1}</span>
                  </p>
                </div>
                <div className="bg-success-subtle rounded-3 mb-1">
                  <p className="fw-bold p-1">
                    Quad 4 Person
                    <br />
                    <span className="fw-semibold">&#8377; {price2}</span>
                  </p>
                </div>
                <div className="bg-success-subtle rounded-3 mb-1">
                  <p className="fw-bold p-1">
                    Tripple 3 Person
                    <br />
                    <span className="fw-semibold">&#8377; {price3}</span>
                  </p>
                </div>
                <div className="bg-success-subtle rounded-3 mb-1">
                  <p className="fw-bold p-1">
                    2 Person or couple
                    <br />
                    <span className="fw-semibold">&#8377; {price4}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-6 p-2">
              <div className={`${bgColor} p-3 rounded-4`}>
                <h5 className="fw-bold mb-3">Hotel & Shuttle Details</h5>
                <div className="m-3">
                  <p>
                    <b>Hotel At Makkah : </b>★★★☆☆ {meters1}
                  </p>
                  <p>
                    <b>Hotel At Madina : </b>★★★☆☆ {meters2}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UmrahPackages;
