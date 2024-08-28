import React from "react";
import userImg from "../../assets/images/user-icon-small-grey.png";
// interface TestimonialProps {
//   quote: string;
//   author: string;
// }

//const Testimonial: React.FC<TestimonialProps> = ({ quote, author }) => {
export const TestimonialCard: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center pt-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto md:max-w-[960px] md:px-0 px-10">
        <div className="relative text-center">
          <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 text-center">
            <img
              src={userImg}
              alt=""
              className="absolute rounded-full w-14 h-14 left-[-1.75rem] -top-6"
            />
            <div className="mt-4">
              <h2 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                "So Easy"
              </h2>
              <div className="flex mt-2 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mt-4 text-md text-gray-600 text-left">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happines.
              </p>
              <div className="flex justify-center items-center">
                <div className="mt-4 flex items-center space-x-4 py-6">
                  <div className="text-sm font-semibold">John Lucas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative ">
          <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 text-center">
            <img
              src={userImg}
              alt=""
              className="absolute rounded-full w-14 h-14 left-[-1.75rem] -top-6"
            />
            <div className="mt-4">
              <h2 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                "So Easy"
              </h2>
              <div className="flex mt-2 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mt-4 text-md text-gray-600 text-left">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happines.
              </p>
              <div className="flex justify-center items-center">
                <div className="mt-4 flex items-center space-x-4 py-6">
                  <div className="text-sm font-semibold">John Lucas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500 text-center">
            <img
              src={userImg}
              alt=""
              className="absolute rounded-full w-14 h-14 left-[-1.75rem] -top-6"
            />
            <div className="mt-4">
              <h2 className="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                "So Easy"
              </h2>
              <div className="flex mt-2 justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="mt-4 text-md text-gray-600 text-left">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happines.
              </p>
              <div className="flex justify-center items-center">
                <div className="mt-4 flex items-center space-x-4 py-6">
                  <div className="text-sm font-semibold">- Mrs Anne Downs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-10 text-center">
        <h4>
          Read more at: <a href="#">Google Reviews</a>
        </h4>

        <p>
          <strong>4.9 out of 5 Stars</strong> - Based on 5321 reviews
        </p>
      </div>
    </div>
  );
};

export const TestSection: React.FC = () => {
  return (
    <div className="content-wrapper">
      <div className="col-sm-6">
        <div className="card" style={{ height: "494.781px" }}>
          <h2 className="sub-title">Not Ready Yet?</h2>
          <p>
            We’ll send you a reminder when it’s near the time to advertise. Just
            let us know when!
          </p>

          <form action="/" method="get">
            {" "}
            <div className="form-group">
              <div
                className="datePicker hasDatepicker"
                data-altfield="#reminderDate"
                data-dateformat="dd MM yy"
                data-mindate="1"
                data-val-datetimeformat="The date is not in the expected format. e.g. 29 August 2024"
              >
                <div
                  className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all notranslate"
                  style={{ display: "block" }}
                >
                  <div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                    <a
                      className="ui-datepicker-prev ui-corner-all"
                      data-handler="prev"
                      data-event="click"
                      title="Prev"
                    >
                      <span className="ui-icon ui-icon-circle-triangle-w">
                        Prev
                      </span>
                    </a>
                    <a
                      className="ui-datepicker-next ui-corner-all"
                      data-handler="next"
                      data-event="click"
                      title="Next"
                    >
                      <span className="ui-icon ui-icon-circle-triangle-e">
                        Next
                      </span>
                    </a>
                    <div className="ui-datepicker-title">
                      <span className="ui-datepicker-month">September</span>
                      &nbsp;<span className="ui-datepicker-year">2024</span>
                    </div>
                  </div>
                  <table className="ui-datepicker-calendar">
                    <thead>
                      <tr>
                        <th scope="col" className="ui-datepicker-week-end">
                          <span title="Sunday">Su</span>
                        </th>
                        <th scope="col">
                          <span title="Monday">Mo</span>
                        </th>
                        <th scope="col">
                          <span title="Tuesday">Tu</span>
                        </th>
                        <th scope="col">
                          <span title="Wednesday">We</span>
                        </th>
                        <th scope="col">
                          <span title="Thursday">Th</span>
                        </th>
                        <th scope="col">
                          <span title="Friday">Fr</span>
                        </th>
                        <th scope="col" className="ui-datepicker-week-end">
                          <span title="Saturday">Sa</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="1"
                          >
                            1
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="2"
                          >
                            2
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="3"
                          >
                            3
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="4"
                          >
                            4
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="5"
                          >
                            5
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="6"
                          >
                            6
                          </a>
                        </td>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="7"
                          >
                            7
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="8"
                          >
                            8
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="9"
                          >
                            9
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="10"
                          >
                            10
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="11"
                          >
                            11
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="12"
                          >
                            12
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="13"
                          >
                            13
                          </a>
                        </td>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="14"
                          >
                            14
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="15"
                          >
                            15
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="16"
                          >
                            16
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="17"
                          >
                            17
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="18"
                          >
                            18
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="19"
                          >
                            19
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="20"
                          >
                            20
                          </a>
                        </td>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="21"
                          >
                            21
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="22"
                          >
                            22
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="23"
                          >
                            23
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="24"
                          >
                            24
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="25"
                          >
                            25
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="26"
                          >
                            26
                          </a>
                        </td>
                        <td
                          className="  ui-datepicker-current-day"
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default ui-state-active"
                            href="#"
                            aria-current="true"
                            data-date="27"
                          >
                            27
                          </a>
                        </td>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="28"
                          >
                            28
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className=" ui-datepicker-week-end "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="29"
                          >
                            29
                          </a>
                        </td>
                        <td
                          className=" "
                          data-handler="selectDay"
                          data-event="click"
                          data-month="8"
                          data-year="2024"
                        >
                          <a
                            className="ui-state-default"
                            href="#"
                            aria-current="false"
                            data-date="30"
                          >
                            30
                          </a>
                        </td>
                        <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                          &nbsp;
                        </td>
                        <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                          &nbsp;
                        </td>
                        <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                          &nbsp;
                        </td>
                        <td className=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                          &nbsp;
                        </td>
                        <td className=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                          &nbsp;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <input
                data-val="true"
                data-val-date="Must be a date."
                data-val-required="Reminder Date Required"
                id="reminderDate"
                name="reminderDate"
                type="hidden"
                value="27 September 2024"
                data-val-datetimeformat="The date is not in the expected format. e.g. 29 August 2024"
              />
              <span
                className="field-validation-valid"
                data-valmsg-for="AvailableFrom"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div className="add-property__button">
              <input
                type="Submit"
                className="btn btn-success"
                name="btn"
                value="Set Reminder"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="advertise-now card" style={{ height: "494.781px" }}>
          <h2 className="sub-title">Ready To List Now?</h2>
          <p>
            Finding tenants doesn't have to be painful. If you're ready to list
            your property now, just click the button below.
          </p>
          <img
            className=""
            data-src="https://staticcdn.openrent.co.uk/images/views/landlord-about/solo-building.png"
            alt="Advertise Now"
            src="https://staticcdn.openrent.co.uk/images/views/landlord-about/solo-building.png"
          />
          <a href="/listing/add" className="btn btn-success">
            Advertise Your Property Now
          </a>
        </div>
      </div>
    </div>
  );
};
