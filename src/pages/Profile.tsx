import { Edit } from "lucide-react";
import { useState } from "react";

import { Button, Col, Form, Input, Row } from "antd";

const Profile = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [image, setImage] = useState(null);
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    setImage(file);
  };

  const initialFormValues = {
    name: "Nadir on the go",
    email: "nadir@gmail.com",
    phoneNumber: "4651261025",
    dateOfBirth: "25-4-2003",
    location: "Banasree,Dahaka",
  };

  return (
    <div
      style={{
        backgroundColor: "#232D32",
        padding: "30px",
        height: "800px",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      <div className="w-2/4 mx-auto mt-5">
        <div
          className="text-center  p-4 rounded mb-5"
          style={{ backgroundColor: "#29363C" }}
        >
          {!openEdit && (
            <div className="flex justify-end">
              <button className="text-blue" onClick={() => setOpenEdit(true)}>
                <Edit size={20} />
              </button>
            </div>
          )}

          {openEdit ? (
            <div className=" relative ">
              <input
                type="file"
                id="img"
                onChange={handleImage}
                className="hidden"
              />
              <label htmlFor="img">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="w-28 h-28 rounded-full inline-block"
                  />
                ) : (
                  <img
                    src="https://i.ibb.co/cXq8yDY/destination-italiy-single3.jpg"
                    alt=""
                    className="w-28 h-28 rounded-full inline-block"
                  />
                )}
              </label>

              <button className=" absolute bottom-2 -ms-5 ">
                <Edit size={28} className="text-white" />
              </button>
            </div>
          ) : (
            <img
              src="https://i.ibb.co/cXq8yDY/destination-italiy-single3.jpg"
              alt=""
              className="w-28 h-28 rounded-full inline-block"
            />
          )}

          <h2 className="text-2xl mt-2 text-white">Pirates</h2>
        </div>

        <div>
          {!openEdit ? (
            <Form layout="vertical" initialValues={initialFormValues}>
              <Row
                gutter={{
                  xs: 8,

                  lg: 15,
                }}
              >
                <Col span={12}>
                  <Form.Item
                    label={<div className="text-white">Name</div>}
                    name="name"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<div className="text-white">Email</div>}
                    name="email"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<div className="text-white">Phone number</div>}
                    name="phoneNumber"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<div className="text-white">Date of Birth</div>}
                    name="dateOfBirth"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label={<div className="text-white">Location</div>}
                    name="location"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                      readOnly
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          ) : (
            //edit section
            <Form
              layout="vertical"
              initialValues={initialFormValues}
              onFinish={onFinish}
            >
              <Row
                gutter={{
                  xs: 8,
                  lg: 15,
                }}
              >
                <Col span={12}>
                  <Form.Item
                    label={<div className="text-white">Name</div>}
                    name="name"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<div className="text-white">Email</div>}
                    name="email"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<div className="text-white">Phone Number</div>}
                    name="phoneNumber"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label={<div className="text-white">Date of birth</div>}
                    name="dateOfBirth"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    label={<div className="text-white">Location</div>}
                    name="location"
                  >
                    <Input
                      size="large"
                      className="bg-transparent border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button
                  onClick={() => setOpenEdit(false)}
                  type="primary"
                  className="bg-secondary h-10 text-lg"
                  htmlType="submit"
                >
                  Save changes
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
