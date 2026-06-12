import React from "react";
import "./App.css";
const LaboratoryReport=()=>{
    return(
        <div className="report-modal">
            <div className="report-container">
                <div className="report-header">
                    <h2>Laboratory Test</h2>
                    <span>LAB003</span>
                </div>
                <div className="report-card">
                    <div className="hospital-info">
                        <h1>MediCare Hospital</h1>
                        <h4>Clinical Laboratory Services</h4>
                        <p>ISO 15189 Accredited</p>
                    </div>
                    <div className="info-section">
                        <div className="patient-info">
                            <h5>Patient information</h5>
                            <div classname="info-row">
                                <span>Name:</span>
                                <span>Emily Davis</span>
                                </div>  
                                <div className="info-row">
                                    <span>ID:</span>
                                    <span>PAT004</span>
                                </div>
                                <div className="info-row">
                                    <span>Age/Gender</span>
                                    <span>45yr/Male</span>
                                </div>
                        </div>
                        <div className="test-info">
                            <h5>Test information</h5>
                            <div className="info-row">
                                <span>Test:</span>
                                <span>HbA1c</span>
                            </div>
                            <div className="info-row">
                                <span>Order ID:</span>
                                <span>LAB003</span>
                            </div>
                            <div className="info-row">
                                <span>Ordered By:</span>
                                <span>Dr.James Wilson</span>
                            </div>
                            <div className="info-row">
                                <span>Report Date:</span>
                                <span>1/19/2026</span>
                            </div>
                        </div>
                    </div>
                    <div classname="result-section">
                        <h5>Test Result</h5>
                        <table className="result-table">
                            <thread>
                                <tr>
                                    <th>Parameter</th>
                                    <th>Result</th>
                                    <th>Unit</th>
                                    <th>Reference Range</th>
                                    <th>Flag</th>
                                </tr>
                            </thread>
                            <tbody>
                                <tr>
                                    <td>HbaA1c</td>
                                    <td>Normal</td>
                                    <td>-</td>
                                    <td>Within limits</td>
                                    <td><span class="normal-badge">Normal</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
        
}