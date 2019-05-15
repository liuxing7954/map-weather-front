export default {
  "color":
    [
      "#d87c7c",
      "#919e8b",
      "#d7ab82",
      "#6e7074",
      "#61a0a8",
      "#efa18d",
      "#787464",
      "#cc7e63",
      "#724e58",
      "#4b565b"
    ],
  "backgroundColor":
    {
      "x":
        0.5,
      "y":
        0.5,
      "r":
        1,
      "type":
        "radial",
      "global":
        false,
      "colorStops":
        [
          {
            "offset": 0,
            "color": "hsl(200,30%,90%)"
          },
          {
            "offset": 1,
            "color": "hsl(200,30%,45%)"
          }
        ]
    }
  ,
  "graph":
    {
      "color":
        [
          "#d87c7c",
          "#919e8b",
          "#d7ab82",
          "#6e7074",
          "#61a0a8",
          "#efa18d",
          "#787464",
          "#cc7e63",
          "#724e58",
          "#4b565b"
        ]
    }
  ,
  "gradientColor":
    [
      "#f6efa6",
      "#d88273",
      "#bf444c"
    ],
  "textStyle":
    {
      "fontFamily":
        "Microsoft YaHei",
      "fontSize":
        12,
      "fontStyle":
        "normal",
      "fontWeight":
        "normal"
    }
  ,
  "animation":
    "auto",
  "animationDuration":
    1000,
  "animationDurationUpdate":
    300,
  "animationEasing":
    "exponentialOut",
  "animationEasingUpdate":
    "cubicOut",
  "animationThreshold":
    2000,
  "progressiveThreshold":
    3000,
  "progressive":
    400,
  "hoverLayerThreshold":
    3000,
  "useUTC":
    false,
  "axisPointer":
    [
      {
        "show": "auto",
        "triggerOn": null,
        "zlevel": 0,
        "z": 50,
        "type": "line",
        "snap": false,
        "triggerTooltip": true,
        "value": null,
        "status": null,
        "link": [],
        "animation": null,
        "animationDurationUpdate": 200,
        "lineStyle": {
          "color": "#aaa",
          "width": 1,
          "type": "solid"
        },
        "shadowStyle": {
          "color": "rgba(150,150,150,0.3)"
        },
        "label": {
          "show": true,
          "formatter": null,
          "precision": "auto",
          "margin": 3,
          "color": "#fff",
          "padding": [
            5,
            7,
            5,
            7
          ],
          "backgroundColor": "auto",
          "borderColor": null,
          "borderWidth": 0,
          "shadowBlur": 3,
          "shadowColor": "#aaa"
        },
        "handle": {
          "show": false,
          "icon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
          "size": 45,
          "margin": 50,
          "color": "#333",
          "shadowBlur": 3,
          "shadowColor": "#aaa",
          "shadowOffsetX": 0,
          "shadowOffsetY": 2,
          "throttle": 40
        }
      }
    ],
  "tooltip":
    [],
  "series":
    [],
  "markArea":
    [
      {
        "zlevel": 0,
        "z": 1,
        "tooltip": {
          "trigger": "item"
        },
        "animation": false,
        "label": {
          "show": true,
          "position": "top"
        },
        "itemStyle": {
          "borderWidth": 0
        },
        "emphasis": {
          "label": {
            "show": true,
            "position": "top"
          }
        }
      }
    ],
  "markLine":
    [
      {
        "zlevel": 0,
        "z": 5,
        "symbol": [
          "circle",
          "arrow"
        ],
        "symbolSize": [
          8,
          16
        ],
        "precision": 2,
        "tooltip": {
          "trigger": "item"
        },
        "label": {
          "show": true,
          "position": "end"
        },
        "lineStyle": {
          "type": "dashed"
        },
        "emphasis": {
          "label": {
            "show": true
          },
          "lineStyle": {
            "width": 3
          }
        },
        "animationEasing": "linear"
      }
    ],
  "markPoint":
    [
      {
        "zlevel": 0,
        "z": 5,
        "symbol": "pin",
        "symbolSize": 50,
        "tooltip": {
          "trigger": "item"
        },
        "label": {
          "show": true,
          "position": "inside"
        },
        "itemStyle": {
          "borderWidth": 2
        },
        "emphasis": {
          "label": {
            "show": true
          }
        }
      }
    ],
  "marker":
    [],
  "visualMap":
    [],
  "dataZoom":
    [],
  "brush":
    [],
  "legend":
    [],
  "geo":
    [
      {
        "map": "mapArea",
        "roam": true,
        "selectedMode": "single",
        "itemStyle": {
          "areaColor": "#004159",
          "borderColor": "#cfe7ee",
          "borderWidth": 0.5,
          "color": "#eee"
        },
        "label": {
          "show": true,
          "color": "rgba(18,89,147,1)",
          "backgroundColor": "white",
          "fontFamily": "宋体",
          "fontSize": 12,
          "fontWeight": "bold",
          "padding": 5
        },
        "emphasis": {
          "itemStyle": {
            "areaColor": "#68849a",
            "color": "rgba(255,215,0,0.8)"
          },
          "label": {
            "show": true,
            "color": "rgb(100,0,0)"
          }
        },
        "zlevel": 0,
        "z": 0,
        "show": true,
        "left": "center",
        "top": "center",
        "aspectScale": null,
        "silent": false,
        "boundingCoords": null,
        "center": null,
        "zoom": 1,
        "scaleLimit": null
      }
    ]
}
