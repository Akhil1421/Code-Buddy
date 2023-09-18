import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AvatarEditor from "react-avatar-editor";
import { FcAddImage } from "react-icons/fc";
import './Editor.css'
export const Modal = (source, setPreview, setModalOpen) => {
  const cropRef = useRef(null);
  const [slideValue, setSlideValue] = useState(10);
  const handleSave = async () => {
    if (cropRef) {
      const dataURL = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataURL);
      const blob = await result.blob();
      source.setPreview(URL.createObjectURL(blob));
      source.setModalOpen(false);
    }
  };
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        border: "2px solid black",
        margin: "auto",
      }}
    >
      {/* <p>Hi there</p> */}
      <AvatarEditor
        ref={cropRef}
        image={source.source}
        style={{ width: "100%", height: "100%", zIndex: "1" }}
        border={50}
        borderRadius={150}
        color={[0, 0, 0, 0.72]}
        scale={slideValue / 10}
        rotate={0}
      />
      <input
        type="range"
        min="10"
        max="50"
        value={slideValue}
        onChange={(e) => {
          setSlideValue(e.target.value);
        }}
      />
      <div
        style={{
          display: "flex",
          padding: "10px",
          border: "3px solid white",
          background: "black",
        }}
      >
        <button
          size="small"
          style={{ marginRight: "10px", color: "white", borderColor: "white" }}
          onClick={() => setModalOpen(false)}
        >
          cancel
        </button>
        <button
          style={{ background: "#5596e6" }}
          size="small"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

const Editor = () => {
  const [source, setSource] = useState(null);
  const [preview, setPreview] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const inputRef = useRef(null);

  const handleInputClick = (e) => {
    e.preventDefault();
    (inputRef.current.click())  ;
  };
  const handleImgChange = (e) => {
    e.preventDefault();
    setSource(URL.createObjectURL(e.target.files[0]));
    setModalOpen(true);
  };
  // const handleURLClick=(e)=>{
    
  // }
  return (
    <div className="editorModal">
      <header>
        <h1 style={{textAlign:'center'}}>Avatar Cropper</h1>
        <hr></hr>
      </header>
      {modalOpen && (
        <Modal
          source={source}
          setPreview={setPreview}
          setModalOpen={setModalOpen}
        />
      )}
      <div>
        <Link onClick={handleInputClick}>
          <FcAddImage style={{ scale: "5", margin: "30px" }}></FcAddImage>
        </Link>
        <p>Click to select the image</p>
        <input
          type="file"
          ref={inputRef}
          accept="image/*"
          onInput={handleImgChange}
          style={{display:'none'}}
        />
        {/* <input type="url" placeholder="Or Enter a valid image link"  onChange={(e)=>{
          setExternalLink(e.target.value);
        }}/>
        <button onClick={()=>{handleURLClick}}>Ok</button> */}
        <div>
          <img
            src={
              preview ||
              "https://www.signivis.com/img/custom/avatars/member-avatar-01.png"
            }
            alt="Avatar"
            width="200"
            height="200"
            style={{
              borderRadius: "50%",
              border: "2px solid black",
              margin: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Editor;
