import Button from "@/components/share/Button";
import Title from "@/components/share/Title";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

const About = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div
      style={{
        backgroundColor: "#1c2428",
        margin: "15px",
        borderRadius: "5px",
        height: "82vh",
      }}
    >
      <Title className="mb-4 p-3">About</Title>
      <JoditEditor
        ref={editor}
        value={content}
        config={{ height: 600 }}
        onBlur={(newContent) => setContent(newContent)}
      />
      <div
        className="flex justify-end"
        style={{ margin: "20px", marginBottom: "20px" }}
      >
        <Button>Save Changes</Button>
      </div>
    </div>
  );
};

export default About;
