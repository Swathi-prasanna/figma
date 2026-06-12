import React from "react"
import"./StartProcessing.css";
function StartProcessing(){
    return(
        <div className="modal">
            <div className="modal-box">
                <div className="modal-header">
                    <div>
                        <h2>start Processing</h2>
                        <p> LAB002-Lipid Profile</p>
                        <button className="close-btn"><X size={24}/></button>
                    </div>
                    <div className="patient-card">
                        <div className="info-item">
                            <label>Patient</label>
                            <h5>Sarah Williaams</h5>
                            <span>PAT002</span>
                        </div>
                        <div className="info-item">
                            <label>Test Type</label>
                            <label>Lipid Profile</label>
                        </div>
                        <div className="info-item">
                            <label>Priority</label>
                            <div classNae="priority-badge">routine</div>
                       </div>
                       <div className="info-item">
                        <label>Ordered By</label>
                        <h5>Dr.Lisa Brown</h5>
                       </div>
                    </div>
                    <div className="form-group">
                        <label>Sample ID*</label>
                        <input type="text" defaultValue="LAB002"/>
                    </div>
                    <div  className="row-group">
                        <label>Processing Started By *</label>
                        <input type="text" defaultValue="Lab Tech- Dr Michael Lee"/>
                    </div>
                    <div className="form-group">
                        <label>Processing Start Time*</label>
                        <input type="text"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Equipment Used*</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>sample Condition</label>
                        <input type="text"/> 
                    </div>
                    <hr/>
                    <div className="form-group">
                        <label>Technician Name</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Sample condition</label>
                    </div>
                    <div className="form-group">
                        <label>Processing Notes</label>
                        <textarea rows="4" placeholder="Any special observations during processing"></textarea>
                    </div>
                    <div className="check-item">
                        <h4>Processing Checklist</h4>
                        <ul>
                            <li>Sample integrity Verified</li>
                            <li>Equipment calibrated</li>
                            <li>Quality control performed</li>
                        </ul>
                    </div>
                </div>
                <div className="button-group">
                    <button className="confirm-btn">
                        Confirm Start Processing
                    </button>
                    <button className="cancel-btn">
                        cancel
                    </button>
                </div>
            </div>
    );
}
export default StartProcessing;