/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
//import Button from "@/components/share/Button";
import Title from "@/components/share/Title";
import { Form, Input, Button, Flex, Select } from "antd";

import { useState } from "react";
import imgURL from "@/assets/imgURL.png";

const TrainingProgram = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const onFinish = (valeus: any) => {
    console.log(valeus);
  };
  const onChange = (e) => {
    const file = e.target.files?.[0];

    setImageUrl(file);
  };

  return (
    <div
      className=" bg-[#1C2428] me-[50px]  mb-[10px] mt-[5px] pt-[30px] ps-[40px] pe-[120px] rounded"
      style={{ height: "85vh", width: "100%" }}
    >
      <Title className="pb-5  ">Create an events</Title>

      <Form onFinish={onFinish} layout="vertical">
        <div className="grid grid-cols-2 gap-10">
          <div className=" grid-cols-6">
            <Form.Item
              name="name"
              label={<p className="text-white text-md ">Events Name</p>}
            >
              <Input
                placeholder="Events  Name"
                className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="host"
              label={<p className="text-white text-md ">Hosted by</p>}
            >
              <Input
                placeholder="Hosted by"
                className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name=" startDate"
              label={<p className="text-white text-md ">Start Date</p>}
            >
              <Input
                placeholder="mm/dd/yy"
                type="date"
                className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                size="large"
                min="1997-01-01"
                max="2030-12-31"
              />
            </Form.Item>

            <Form.Item
              name=" endDate"
              label={<p className="text-white text-md ">End Date</p>}
            >
              <Input
                placeholder="mm/dd/yy"
                type="date"
                className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                size="large"
                min="1997-01-01"
                max="2030-12-31"
              />
            </Form.Item>

            <Form.Item
              name="eventType"
              label={<p className="text-white text-md ">Event Type</p>}
            >
              <Input
                placeholder="onsite"
                className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                size="large"
              />
            </Form.Item>

            <Form.Item
              name="location"
              label={<p className="text-white text-md ">Location</p>}
            >
              <Input
                placeholder="location.."
                className="bg-[#2E3C43] border text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent"
                size="large"
              />
            </Form.Item>
          </div>

          <div className=" grid-cols-6">
            <Form.Item
              name="name"
              label={<p className="text-white text-md ">Description</p>}
            >
              <textarea
                name="description"
                placeholder="Write here"
                rows={5}
                cols={40}
                className="bg-[#2E3C43] w-full border rounded-lg text-white border-[#3a3a3a] placeholder:text-gray-400 py-3 hover:bg-transparent focus:bg-transparent placeholder:ps-2"
              />
            </Form.Item>

            <Form.Item
              name="category"
              label={<p className="text-white text-md ">Category</p>}
            >
              <Select
                placeholder="Select a category"
                style={{
                  backgroundColor: "#2E3C43",
                  height: "50px",
                }}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />
            </Form.Item>

            <div>
              <h2 className="text-white text-lg mb-2">Event Image</h2>

              <Form.Item>
                <input
                  type="file"
                  id="image"
                  style={{ display: "none" }}
                  onChange={onChange}
                />
                <label
                  htmlFor="image"
                  className="w-full border-2 border-[#2E3C43] rounded-lg flex justify-center items-center h-[260px] cursor-pointer"
                >
                  {imageUrl ? (
                    <img
                      src={URL.createObjectURL(imageUrl)}
                      className="w-[50%] h-[70%] object-fill rounded"
                      alt=""
                    />
                  ) : (
                    <img src={imgURL} alt="" className="w-[154px] h-[100px]" />
                  )}
                </label>
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <Button
            type="primary"
            block
            style={{
              height: "50px",
              width: "20%",
              backgroundColor: "red",
              marginTop: "10px",
              fontSize: "18px",
              fontWeight: "semibold",
            }}
          >
            Save event
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TrainingProgram;
