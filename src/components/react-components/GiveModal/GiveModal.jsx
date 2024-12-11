import { useState } from "react";
import "./GiveModal.css";

export default function GiveModal() {
  const [showGiveModal, setShowGiveModal] = useState(false);
  const onToggleModal = () => {
    setShowGiveModal(!showGiveModal);
  };
  return (
    <>
      <span onClick={onToggleModal}>Give</span>
      {showGiveModal ? (
        <div class="give-overlay">
          <div class="give-dialog">
            <div className="top">
              <i class="fas fa-times invisible"></i>
              <h2>Give to Our Church</h2>
              <i
                id="close-icon"
                onClick={onToggleModal}
                class="fas fa-times"
              ></i>
            </div>

            <p>
              Electronic giving is available through Zelle. Contact email is
              LVRPCgiving@gmail.com
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
