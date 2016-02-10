/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bigpad',
                            type: 'image',
                            rect: ['16px', '36px', '151px', '248px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bigpad.svg",'0px','0px']
                        },
                        {
                            id: 'smallpad',
                            type: 'image',
                            rect: ['218px', '132px', '150px', '164px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"smallpad.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['85px', '60px', '0px', '6px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            type: 'rect',
                            rect: ['85px', '75px', '0px', '6px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            type: 'rect',
                            rect: ['85px', '90px', '0px', '6px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy3',
                            type: 'rect',
                            rect: ['85px', '105px', '0px', '6px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy4',
                            type: 'rect',
                            rect: ['85px', '121px', '0px', '6px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy5',
                            type: 'rect',
                            rect: ['85px', '137px', '0px', '6px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RectangleCopy6',
                            type: 'rect',
                            rect: ['85px', '154px', '72px', '6px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '380px', '320px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: true,
                    data: [
                        [
                            "eid28",
                            "width",
                            1250,
                            250,
                            "linear",
                            "${RectangleCopy}",
                            '0px',
                            '92px'
                        ],
                        [
                            "eid58",
                            "height",
                            2250,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid59",
                            "background-color",
                            2250,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid60",
                            "background-color",
                            2500,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid47",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid48",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid74",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid75",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            '154px',
                            '154px'
                        ],
                        [
                            "eid21",
                            "background-color",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid22",
                            "background-color",
                            1250,
                            0,
                            "linear",
                            "${Rectangle}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${smallpad}",
                            '218px',
                            '157px'
                        ],
                        [
                            "eid9",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bigpad}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid68",
                            "background-color",
                            2500,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid69",
                            "background-color",
                            2750,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid44",
                            "height",
                            1750,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid24",
                            "width",
                            1000,
                            250,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '92px'
                        ],
                        [
                            "eid49",
                            "height",
                            2000,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid45",
                            "width",
                            1750,
                            250,
                            "linear",
                            "${RectangleCopy3}",
                            '0px',
                            '92px'
                        ],
                        [
                            "eid30",
                            "height",
                            1500,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid65",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid66",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${RectangleCopy5}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid63",
                            "width",
                            2250,
                            250,
                            "linear",
                            "${RectangleCopy5}",
                            '0px',
                            '92px'
                        ],
                        [
                            "eid54",
                            "width",
                            2000,
                            250,
                            "linear",
                            "${RectangleCopy4}",
                            '0px',
                            '92px'
                        ],
                        [
                            "eid67",
                            "height",
                            2500,
                            0,
                            "linear",
                            "${RectangleCopy6}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid56",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            '121px',
                            '121px'
                        ],
                        [
                            "eid57",
                            "top",
                            2250,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            '121px',
                            '121px'
                        ],
                        [
                            "eid72",
                            "width",
                            2500,
                            250,
                            "linear",
                            "${RectangleCopy6}",
                            '0px',
                            '72px'
                        ],
                        [
                            "eid50",
                            "background-color",
                            2000,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid51",
                            "background-color",
                            2250,
                            0,
                            "linear",
                            "${RectangleCopy4}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid42",
                            "background-color",
                            1750,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid43",
                            "background-color",
                            2000,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid25",
                            "background-color",
                            1250,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid26",
                            "background-color",
                            1500,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid38",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid39",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid34",
                            "width",
                            1500,
                            250,
                            "linear",
                            "${RectangleCopy2}",
                            '0px',
                            '92px'
                        ],
                        [
                            "eid15",
                            "height",
                            1000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid27",
                            "height",
                            1250,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid13",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${bigpad}",
                            '16px',
                            '54px'
                        ],
                        [
                            "eid32",
                            "background-color",
                            1500,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid33",
                            "background-color",
                            1750,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid29",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            '75px',
                            '75px'
                        ],
                        [
                            "eid7",
                            "top",
                            0,
                            0,
                            "linear",
                            "${smallpad}",
                            '132px',
                            '132px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("notepad_edgeActions.js");
})("EDGE-524363739");
