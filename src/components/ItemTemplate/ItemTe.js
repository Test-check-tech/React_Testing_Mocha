import React, { Component } from 'react'
import mck from './JSON/MCKTemplate.json'
import tf from './JSON/TFTemplate.json'
import mcs from './JSON/MCSTemplate.json'
import mcms from './JSON/MCMSTemplate.json'
import multi from './JSON/MULTITemplate.json'
import gen from './JSON/GENTemplate.json'
import CKEditorBase from '../ui/CKEditorBase'
export class Template extends Component {
    state = {
        value: null,
    };
    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };
    render() {
        return (
            <div >
                <div><h1 align="center">Item Creation</h1>
                    <hr className='new'></hr>
                </div>
                &emsp;&emsp; <b>Task Type :</b>&emsp;
                <select id="dropdown" onChange={this.handleChange} >
                    <option >Select Task Type</option>
                    <option value="1">Multiple Choice - Keyed</option>
                    <option value="2">True/False</option>
                    <option value="3">Multiple Choice - Scaled</option>
                    <option value="4">Multiple Choice - Multiple Selection</option>
                    <option value="5">Multi-Part</option>
                    <option value="6">Generic</option>
                </select>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <b >Task Sub-Type :</b>&emsp;
                <select id="dropdown" disabled>
                    <option >Select Task Sub-Type</option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <hr></hr>
                {(() => {
                    switch (this.state.value) {
                        case "1": return (mck.map(obj => <Item obj={obj} />))
                        case "2": return (tf.map(obj => <Item obj={obj} />))
                        case "3": return (mcs.map(obj => <Item obj={obj} />))
                        case "4": return (mcms.map(obj => <Item obj={obj} />))
                        case "5": return (multi.map(obj => <MultiItem obj={obj} />))
                        case "6": return (gen.map(obj => <GenericItem obj={obj} />))
                        default: return ("")
                    }
                })()}
                <style dangerouslySetInnerHTML={{ __html: `.tab {position:absolute;left:750px; } ` }} />
                <style dangerouslySetInnerHTML={{ __html: `.new {border: 2px solid green; } ` }} />
            </div>

        )
    }
}
export default Template

const Item = props => {
    return (
        <div>
            <br />
            <table>
                <tr>&emsp;
                    <td class="stemPosition"><b>{props.obj.stem.label}</b>
                        <td >
                            <div className="editor"><CKEditorBase/></div>
                        </td>
                    </td>

                <td className="tab"  >
                    {props.obj.responses.map(responses =>
                        <tr >
                            <td ><br /> <b>
                                {responses.label} &emsp;
                                {
                                    props.obj.tasktype === "mcs" ?
                                        <b> score:<input type="number" placeholder={responses.score} className="size"></input></b>
                                        : <input type="checkbox"></input>
                                }
                                 <br />
                            </b>
                                <div className="editor"><CKEditorBase/></div> </td>
                        </tr>
                    )}</td></tr>
            </table>
            <style dangerouslySetInnerHTML={{ __html: `.size {width: 3em;} ` }} /> 
            <style dangerouslySetInnerHTML={{ __html: `.tab {position:absolute;left:750px; } ` }} />
            <style dangerouslySetInnerHTML={{ __html: `.editor {width:600px;} ` }} />
            <style dangerouslySetInnerHTML={{ __html: `.stemPosition {padding-top: 37px;} ` }} />
            
        </div>
    );
};

const GenericItem = props => {
    return (
        <div>
            <br />
            <table>
                <tr>&emsp;
                    <td class="stemPosition"><b>{props.obj.stem.label}</b>
                        <td >
                            <div className="editor"><CKEditorBase/></div>
                        </td>
                    </td>

                <td className="tab"  >
                    {props.obj.responses.map(responses =>
                        <tr >
                            <td ><br /> <b>
                                {responses.label} &emsp;
                                 <br />
                            </b>
                                <div className="editor"><CKEditorBase/></div> </td>
                        </tr>
                    )}</td></tr>
            </table>
            <style dangerouslySetInnerHTML={{ __html: `.size {width: 3em;} ` }} /> 
            <style dangerouslySetInnerHTML={{ __html: `.tab {position:absolute;left:750px; } ` }} />
            <style dangerouslySetInnerHTML={{ __html: `.editor {width:600px;} ` }} />
            <style dangerouslySetInnerHTML={{ __html: `.stemPosition {padding-top: 37px;} ` }} />
            
        </div>
    );
};

const MultiItem = props => {
    return (
        <div>
            <table>
                <tr>
                    &emsp; &emsp;
                    <td>
                        <br />
                        <td><b>
                            <label >{props.obj.part1.stem.label}</label>
                            <br />
                            <br />
                            <div className="editor"><CKEditorBase/></div>
                        </b></td>
                        {props.obj.part1.responses.map(responses =>
                            <tr>
                                <td><b>
                                    <br />
                                    <label >{responses.label}</label>
                                    <input type="checkbox"></input>
                                    <br />
                                    <div className="editor"><CKEditorBase/></div>
                                    <br />
                                </b> </td>
                            </tr>
                        )}
                    </td >&emsp; &emsp;
                    <td className="tab">
                        <td><b>
                            <label >{props.obj.part2.stem.label}</label>
                            <br />
                            <br />
                            <div className="editor"><CKEditorBase/></div>
                        </b> </td>
                        {props.obj.part2.responses.map(responses =>
                            <tr>
                                <td><b>
                                    <br />
                                    <label >{responses.label}</label>
                                    <input type="checkbox"></input>
                                    <br />
                                    <div className="editor"><CKEditorBase/></div>
                                    <br />
                                </b></td>
                            </tr>
                        )}</td>
                </tr>
            </table>
            <style dangerouslySetInnerHTML={{ __html: `.tab {position:absolute;left:750px; } ` }} />
            <style dangerouslySetInnerHTML={{ __html: `.editor {width:600px;} ` }} />
        </div>
    );
};