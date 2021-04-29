import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import MonacoEditor from "react-monaco-editor";
import ChartTemp from "./echartTemp";
function TemplateEditor() {
    const [echartOption, setEchartOption] = useState(null);
    const [code, setCode] = useState(
        `{
            tooltip: {
                formatter: '{a} <br/>{b} : {c}%'
            },
            series: [{
                name: 'Pressure',
                type: 'gauge',
                detail: {
                    formatter: (value)=>{
                        return value
                    }
                },
                data: [{
                    value: 50,
                    name: 'SCORE'
                }]
            }]
        }`
    );
    // const editorDidMount = (editor, monaco) => {
    //     console.log("editorDidMount", editor);
    //     editor.focus();
    // };
    const onChange = (newValue, e) => {
        console.log("onChange", newValue, e);
        setCode(newValue)
    };
    const runEchart = () => {
        setEchartOption(code);
    };
    const saveEchartoption = () => {
        const optionList = JSON.parse(localStorage.getItem('options')) || []
        optionList.push(code)
        localStorage.setItem('options', JSON.stringify(optionList))
    };
    return (
        <>
            <Row style={{ background: "#fff" }}>
                <Col span={12}>
                    <MonacoEditor
                        height="600"
                        language="javascript"
                        theme="vs-light"
                        value={code}
                        options={{
                            selectOnLineNumbers: true,
                        }}
                        onChange={onChange}
                        // editorDidMount={editorDidMount}
                    />
                    <Button type="primary" htmlType="button" onClick={runEchart}>
                        运行
                    </Button>
                </Col>
                <Col span={12}>
                    <ChartTemp
                        domId="chartTemp"
                        chartCode={echartOption}
                    ></ChartTemp>
                    <Button type="primary" htmlType="button" onClick={saveEchartoption}>
                        保存
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default TemplateEditor;
