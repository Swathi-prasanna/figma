import React from "react";

const Enterresult = ({ order, onClose }) => {
  const currentOrder = order || {
    orderid: "LAB001",
    patient: "John Anderson",
    test: "Complete Blood Count (CBC)",
    priority: "routine",
  };

  return (
    <div className="enter-result-overlay">
      <div className="enter-result-modal">
        <div className="enter-result-header">
          <div>
            <h2>Enter Test Results</h2>
            <p>
              {currentOrder.orderid} - {currentOrder.test}
            </p>
          </div>
          <button
            type="button"
            className="enter-result-close"
            onClick={onClose}
            aria-label="Close enter result form"
          >
            x
          </button>
        </div>

        <div className="enter-result-summary">
          <div>
            <span>Patient</span>
            <strong>{currentOrder.patient}</strong>
          </div>
          <div>
            <span>Test</span>
            <strong>{currentOrder.test}</strong>
          </div>
          <div>
            <span>Priority</span>
            <strong className="enter-result-badge">{currentOrder.priority}</strong>
          </div>
        </div>

        <form className="enter-result-form">
          <div className="enter-result-section-title">
            <h3>Test Parameters & Results</h3>
          </div>

          <div className="enter-result-row">
            <label>
              <span>Result Value *</span>
              <input type="text" placeholder="Enter result" />
            </label>
            <label>
              <span>Unit</span>
              <input type="text" placeholder="mg/dL, mmol/L, etc." />
            </label>
            <label className="enter-result-check">
              <input type="checkbox" />
              <span>Flag as abnormal</span>
            </label>
          </div>

          <div className="enter-result-row two-column">
            <label>
              <span>Technician ID *</span>
              <input type="text" defaultValue="LAB001 - Dr. Michael Lee" />
            </label>
            <label>
              <span>Completion Time *</span>
              <input type="text" />
            </label>
          </div>

          <label className="enter-result-textarea">
            <span>Interpretation & Comments</span>
            <textarea
              rows="4"
              placeholder="Clinical interpretation, technical notes, recommendations..."
            />
          </label>

          <div className="critical-alert">
            <div className="critical-alert-title">Critical Values Alert</div>
            <p>Critical values detected - notify physician immediately</p>
            <label>
              <input type="checkbox" />
              <span>Results reviewed and verified</span>
            </label>
          </div>

          <div className="enter-result-actions">
            <button type="button" className="btn btn-light" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-success">
              Save Results
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enterresult;
